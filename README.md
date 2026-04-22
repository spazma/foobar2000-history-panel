# foobar2000 Playback History Panel (SMP 1.6.1)

Minimalistyczny panel historii odtwarzania dla **foobar2000 + Spider Monkey Panel 1.6.1**.

> **⭐ KLUCZOWA ZALETA:** Ten panel **NIE wymaga Media Library** – w odróżnieniu od większości rozwiązań do historii, ten panel opiera się wyłącznie na zdarzeniach odtwarzania. Możesz go używać niezależnie od konfiguracji Media Library!

Projekt zawiera:

- panel wyświetlający **ostatnie 40 odtworzonych utworów** (konfigurowalnie)
- timestampy w formacie `[HH:MM]`
- licznik:
  - **session played** – ile utworów zagrano od uruchomienia foobara
  - **total mins** – łączny czas odtwarzania w minutach
- pełną historię w playliście `> History` (dodaje **wszystkie** utwory, nawet duplikaty)
- brak klikania, brak nagłówków, czysty minimalizm
- **brak zależności od Media Library** ✅

Panel jest w pełni kompatybilny z **SMP 1.6.1** i nie używa żadnych nowych API.

---

## ❓ Dlaczego bez Media Library?

Wszystkie panele historii dostępne dla foobara2000 wymagają skonfigurowanej i działającej **Media Library**. Ten panel działa inaczej:

- ✅ Śledzi **bezpośrednio zdarzenia odtwarzania** (on_playback_new_track)
- ✅ Nie zależy od indeksu Media Library
- ✅ Działa natychmiast po instalacji
- ✅ Lżejszy i bardziej niezawodny
- ✅ Idealny dla użytkowników, którzy preferują edytowanie plików bez Media Library

---

## 📚 Wymagania

Ten projekt wymaga:
- **foobar2000** [(pobierz tutaj)](https://www.foobar2000.org/) – wersja 1.6.x lub 2.x
- **[Spider Monkey Panel](https://github.com/TheQwertiest/foo_spider_monkey_panel)** v1.6.1+ – komponent foobar2000 do tworzenia paneli w JavaScript

**Media Library:** Opcjonalna! Panel pracuje z nią lub bez niej.

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

## ⚙️ Konfiguracja

Możesz dostosować rozmiar historii edytując stałe na początku pliku `history_panel.js`:

```javascript
const MAX_DISPLAY = 40;           // Liczba utworów wyświetlanych w panelu
const MAX_PLAYLIST_ITEMS = 200;   // Limit utworów w playliście > History
```

**Przykłady:**
- Chcesz widać ostatnie 60 utworów w panelu? Zmień `MAX_DISPLAY = 60`
- Chcesz archiwizować 500 utworów w playliście? Zmień `MAX_PLAYLIST_ITEMS = 500`

Po edycji zmień wartości w panelu SMP, a zmiany będą widoczne natychmiast!

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
5. Opcjonalnie – dostosuj `MAX_DISPLAY` i `MAX_PLAYLIST_ITEMS` do swoich potrzeb

---

## 📜 Licencja

Projekt jest udostępniany na licencji **MIT**.

---

## 🔗 Odnośniki

- [foobar2000](https://www.foobar2000.org/) – minimalistyczny odtwarzacz audio
- [Spider Monkey Panel](https://github.com/TheQwertiest/foo_spider_monkey_panel) – dokumentacja i pobranie komponentu
- [foobar2000 Developer Wiki](https://wiki.hydrogenaud.io/index.php?title=Foobar2000:Scripting) – dokumentacja scripting'u

---
<img width="1715" height="946" alt="4279foobar2000_rEYqjKwmAr" src="https://github.com/user-attachments/assets/48f9905f-a368-4516-8c81-e9616d267851" />



