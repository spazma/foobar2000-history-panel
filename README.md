# foobar2000 Playback History Panel (SMP 1.6.1)

Minimalistyczny panel historii odtwarzania dla **foobar2000 + Spider Monkey Panel 1.6.1**.

Projekt zawiera:

- panel wyświetlający **ostatnie 40 odtworzonych utworów**
- timestampy w formacie `[HH:MM]`
- licznik:
  - **session played** – ile utworów zagrano od uruchomienia foobara
  - **total mins** – łączny czas odtwarzania w minutach
- pełną historię w playliście `> History` (dodaje **wszystkie** utwory, nawet duplikaty)
- brak klikania, brak nagłówków, czysty minimalizm

Panel jest w pełni kompatybilny z **SMP 1.6.1** i nie używa żadnych nowych API.

---

## 📚 Wymagania

Ten projekt wymaga:
- **foobar2000** [(pobierz tutaj)](https://www.foobar2000.org/) – wersja 1.6.x lub 2.x
- **[Spider Monkey Panel](https://github.com/TheQwertiest/foo_spider_monkey_panel)** v1.6.1+ – komponent foobar2000 do tworzenia paneli w JavaScript

---

## 📦 Instalacja

1. Upewnij się, że masz zainstalowane wymagane komponenty (patrz wyżej)

2. Utwórz nowy panel SMP:
   - Otwórz foobar2000
   - PPM → *Configure* → *Spider Monkey Panel*

3. Wklej zawartość pliku `history_panel.js` do panelu

4. Ustaw caption panelu, np.:
   ```
   Playback History
   ```

5. Zapisz layout

---

## ✨ Funkcje panelu

### Lista ostatnich 40 utworów

Każdy wpis zawiera timestamp w formacie `[HH:MM]`:

```
[12:41] track.mp3
[12:45] another.flac
[12:50] song.wav
```

### Statystyki sesji (przyklejone do dołu panelu)

```
session played: 18
total mins: 42
```

Blok jest zawsze widoczny i nie przesuwa się podczas scrollowania.

### Pełna historia w playliście

Panel automatycznie tworzy playlistę `> History` i dodaje do niej **każdy odtworzony utwór**, bez filtrów i bez usuwania duplikatów.

- Limit playlisty: 200 pozycji
- Najstarsze pozycje są automatycznie usuwane

---

## 📂 Struktura repozytorium

```
foobar2000-history-panel/
├── README.md              # Dokumentacja
├── history_panel.js       # Główny skrypt panelu
└── LICENSE                # MIT License
```

---

## 📝 Przykład użycia

1. Zainstaluj Spider Monkey Panel w foobar2000
2. Utwórz nowy panel SMP i wklej `history_panel.js`
3. Panel automatycznie zacznie śledzić odtwarzane utwory
4. Historia jest widoczna w panelu i w playliście `> History`

---

## 📜 Licencja

Projekt jest udostępniany na licencji **MIT**.

---

## 🔗 Odnośniki

- [foobar2000](https://www.foobar2000.org/) – minimalistyczny odtwarzacz audio
- [Spider Monkey Panel](https://github.com/TheQwertiest/foo_spider_monkey_panel) – dokumentacja i pobranie komponentu
- [foobar2000 Developer Wiki](https://wiki.hydrogenaud.io/index.php?title=Foobar2000:Scripting) – dokumentacja scripting'u

---

## 📧 Wsparcie i wkład

Jeśli znalazłeś błąd lub masz pomysł na ulepszenie:
- Otwórz [Issue](../../issues)
- Wyślij [Pull Request](../../pulls)

Dziękuję za wsparcie! 🎵