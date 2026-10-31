// === Playback History Panel + Playlist Writer (SMP 1.6.1) ===
// Opis: Panel boczny wyświetlający historię odtwarzanych utworów z timestampami,
// licznikiem sesji, efektem hover, inteligentnym nadpisywaniem duplikatów oraz możliwością odtwarzania po kliknięciu.

const PLAYLIST_NAME = "> History";
const MAX_PLAYLIST_ITEMS = 200;
const MAX_DISPLAY = 40;

let history = [];
let sessionPlayed = 0;
let totalMinutes = 0;
let lastUpdateTime = 0;

let hover_index = -1;

// ---------------------------
// PLAYLISTA — zapis historii
// ---------------------------
function add_to_playlist(handle) {
    let pl = plman.FindPlaylist(PLAYLIST_NAME);
    if (pl === -1) {
        pl = plman.CreatePlaylist(plman.PlaylistCount, PLAYLIST_NAME);
    }

    let list = fb.CreateHandleList();
    list.Add(handle);
    
    // Zapobiegamy dublowaniu od razu na playliście foobara pod rząd
    let count = plman.PlaylistItemCount(pl);
    if (count > 0) {
        let items = plman.GetPlaylistItems(pl);
        let last_handle = items[0];
        try {
            if (last_handle && last_handle.Compare(handle) === 0) {
                return; 
            }
        } catch(e) {}
    }

    plman.InsertPlaylistItems(pl, 0, list);

    if (count + 1 > MAX_PLAYLIST_ITEMS) {
        plman.RemovePlaylistSelection(pl, count, 1);
    }
}

// ---------------------------
// PANEL — logika i śledzenie czasu
// ---------------------------
function on_playback_time(time) {
    if (fb.IsPlaying) {
        let delta = time - lastUpdateTime;
        if (delta > 0) {
            totalMinutes += delta / 60;
        }
        lastUpdateTime = time;
    }
}

function on_playback_new_track(info) {
    if (!info) return;

    let handle = fb.GetNowPlaying();
    if (!handle) return;

    // Aktualny timestamp
    let now = new Date();
    let hh = String(now.getHours()).padStart(2, "0");
    let mm = String(now.getMinutes()).padStart(2, "0");
    let ts = `[${hh}:${mm}] `;

    // Nadpisywanie / Przenoszenie utworu na górę, jeśli już był w historii
    let target_path = "";
    try { target_path = handle.Path; } catch(e) { target_path = handle.RawPath; }

    for (let i = history.length - 1; i >= 0; i--) {
        let h_path = "";
        try { h_path = history[i].handle.Path; } catch(err) { h_path = history[i].handle.RawPath; }
        
        if (h_path === target_path) {
            history.splice(i, 1); // Usuwamy stary wpis, żeby nie było duplikatów na liście
            break;
        }
    }

    // Dodanie świeżego wpisu na sam początek
    history.unshift({ ts: ts, handle: handle });

    if (history.length > MAX_DISPLAY) {
        history.length = MAX_DISPLAY;
    }

    sessionPlayed++;
    lastUpdateTime = fb.PlaybackTime;

    add_to_playlist(handle);

    window.Repaint();
}

// ---------------------------
// OBSŁUGA MYSZY (Hover i Kliknięcie)
// ---------------------------
const lh = 18; // Wysokość wiersza w pikselach

function on_mouse_move(x, y) {
    let new_hover_index = -1;
    
    if (x >= 10 && x <= window.Width - 10) {
        let index = Math.floor(y / lh);
        if (index >= 0 && index < history.length) {
            let item_bottom_y = (index + 1) * lh;
            let infoY_limit = window.Height - (lh * 3) - 5;
            
            if (item_bottom_y <= infoY_limit) {
                new_hover_index = index;
            }
        }
    }

    if (hover_index !== new_hover_index) {
        hover_index = new_hover_index;
        window.Repaint();
    }
}

function on_mouse_leave() {
    if (hover_index !== -1) {
        hover_index = -1;
        window.Repaint();
    }
}

function on_mouse_lbtn_up(x, y) {
    if (hover_index >= 0 && hover_index < history.length) {
        let selected_item = history[hover_index];
        let handle = selected_item.handle;
        
        if (!handle) return;

        // Niezależne uruchomienie odtwarzania utworu
        try {
            fb.RunContextCommandWithMetadb("Play", handle);
        } catch (e) {
            try {
                if (typeof fb.PlayOrActivatePlaylistItem === "function") {
                    fb.PlayOrActivatePlaylistItem(handle);
                } else {
                    let active_pl = plman.ActivePlaylist;
                    let items = plman.GetPlaylistItems(active_pl);
                    let target_index = -1;
                    
                    let target_path = "";
                    try { target_path = handle.Path; } catch(err) { target_path = handle.RawPath; }

                    for (let i = 0; i < items.length; i++) {
                        try {
                            if (items[i].Path === target_path || items[i].RawPath === target_path) {
                                target_index = i;
                                break;
                            }
                        } catch(err) {}
                    }

                    if (target_index !== -1) {
                        plman.ExecutePlaylistDefaultAction(active_pl, target_index);
                    } else {
                        let handleList = fb.CreateHandleList();
                        handleList.Add(handle);
                        plman.InsertPlaylistItems(active_pl, plman.PlaylistItemCount(active_pl), handleList);
                        plman.ExecutePlaylistDefaultAction(active_pl, plman.PlaylistItemCount(active_pl) - 1);
                    }
                }
            } catch (e2) {}
        }
    }
}

// ---------------------------
// RYSOWANIE PANELU
// ---------------------------
function on_paint(gr) {
    gr.FillSolidRect(0, 0, window.Width, window.Height, 0xFF141414);

    let y = 5;

    // Rysowanie listy historii z efektem hover
    for (let i = 0; i < history.length; i++) {
        let h = history[i];
        
        if (i === hover_index) {
            gr.FillSolidRect(5, y, window.Width - 10, lh, 0x22FFFFFF); // Subtelne podświetlenie tła
        }

        let name = h.handle.RawPath.split("\\").pop();
        let text = h.ts + name;

        gr.GdiDrawText(
            text,
            gdi.Font("Segoe UI", 12, 0),
            0xFFCCCCCC,
            10, y, window.Width - 20, lh
        );

        y += lh;

        if (y > window.Height - (lh * 4)) break;
    }

    // --- SEKCJA STATYSTYK NA DOLE ---
    let infoY = window.Height - (lh * 3) - 5;

    gr.GdiDrawText(
        "---------------",
        gdi.Font("Segoe UI", 12, 0),
        0xFF888888,
        10, infoY, window.Width - 20, lh
    );

    infoY += lh;

    gr.GdiDrawText(
        "session played: " + sessionPlayed,
        gdi.Font("Segoe UI", 12, 0),
        0xFFBBBBBB,
        10, infoY, window.Width - 20, lh
    );

    infoY += lh;

    gr.GdiDrawText(
        "total mins: " + Math.floor(totalMinutes),
        gdi.Font("Segoe UI", 12, 0),
        0xFFBBBBBB,
        10, infoY, window.Width - 20, lh
    );
}
