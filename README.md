# 🎵 foobar2000 Playback History Panel

<img width="1687" height="923" alt="screenshot" src="https://github.com/user-attachments/assets/b8287101-9087-4569-86fe-7df22ac5151d" />

A minimalist playback history panel for **foobar2000 + Spider Monkey Panel 1.6.1**, working without Media Library.

> **⭐ KEY ADVANTAGE:** This panel **does NOT require a Media Library** – unlike most history solutions, it relies purely on playback events. 
You can use it regardless of your Media Library configuration!

---

## ✨ Features

✅ **Recent Tracks List** (customizable)
- Each entry with a `[HH:MM]` timestamp
- Clickable history – just click and play :)

✅ **Session Statistics**
- `session played` – number of tracks played since startup
- `total mins` – total playback time in minutes

✅ **Auto-Playlist `> History`**
- Full history tracking (including duplicates)
- Limit: 200 items (customizable)
- Oldest entries are automatically removed

✅ **Media Library Independent**
- Works with or without a Media Library
- Based entirely on `on_playback_new_track`

---

## ❓ Why Without Media Library?

- Works right out of the box
- Lighter and faster
- Independent of library indexing
- Compatible with any setup

---

## 📚 Requirements

- 🎶 **foobar2000** [(download)](https://www.foobar2000.org/) – version 1.6.x or 2.x
- 🕷️ **[Spider Monkey Panel](https://github.com/TheQwertiest/foo_spider_monkey_panel/releases/tag/v1.6.1)** v1.6.1+

---

## 📦 Installation

1. Create a new SMP panel
   - Open foobar2000
   - Right-click → *Configure* → *Spider Monkey Panel*
2. Paste the contents of `history_panel.js`
3. Save the layout

---

## ⚙️ Configuration

Edit the constants at the top of the `history_panel.js` file:

```javascript
const MAX_DISPLAY = 40;            // 📊 Number of tracks displayed in the panel
const MAX_PLAYLIST_ITEMS = 200;    // 📋 Track limit in the > History playlist
