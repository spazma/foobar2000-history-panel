# 🎵 foobar2000 Playback History Panel

Minimalistyczny panel historii odtwarzania dla **foobar2000 + Spider Monkey Panel 1.6.1**, działający bez Media Library.

> **⭐ KLUCZOWA ZALETA:** Ten panel **NIE wymaga Media Library** – w odróżnieniu od większości rozwiązań do historii, ten panel opiera się wyłącznie na zdarzeniach odtwarzania. 
Możesz go używać niezależnie od konfiguracji Media Library!

---

## ✨ Funkcje

✅ **Lista ostatnich utworów** (konfigurowalne)
- Każdy wpis z timestampem `[HH:MM]`

✅ **Statystyki sesji**
- `session played` – ile utworów zagrano od uruchomienia
- `total mins` – łączny czas odtwarzania w minutach

✅ **Auto-playlista `> History`**
- Pełna historia (także duplikaty)
- Limit: 200 pozycji (konfigurowalne)
- Najstarsze usuwane automatycznie

✅ **Czysty minimalizm**
- Brak klików, brak nagłówków
- Lekki i szybki

✅ **Niezależny od Media Library**
- Działa z Media Library lub bez niej
- Bazuje wyłącznie na `on_playback_new_track`

---

## ❓ Dlaczego bez Media Library?

Działa od razu po instalacji
Lżejszy i szybszy
Niezależny od indeksu biblioteki
Kompatybilny z każdą konfiguracją

---

## 📚 Wymagania

- 🎶 **foobar2000** [(pobierz)](https://www.foobar2000.org/) – wersja 1.6.x lub 2.x
- 🕷️ **[Spider Monkey Panel](https://github.com/TheQwertiest/foo_spider_monkey_panel/releases/tag/v1.6.1)** v1.6.1+

---

## 📦 Instalacja

1. Utwórz nowy panel SMP
   - Otwórz foobar2000
   - PPM → *Configure* → *Spider Monkey Panel*

2. Wklej zawartość pliku `history_panel.js`

3. Zapisz layout

---

## ⚙️ Konfiguracja

Edytuj stałe na początku pliku `history_panel.js`:

```javascript
const MAX_DISPLAY = 40;           // 📊 Liczba utworów wyświetlanych w panelu
const MAX_PLAYLIST_ITEMS = 200;   // 📋 Limit utworów w playliście > History
```

<img width="1687" height="923" alt="screenshot" src="https://github.com/user-attachments/assets/b8287101-9087-4569-86fe-7df22ac5151d" />

