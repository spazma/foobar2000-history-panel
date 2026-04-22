# foobar2000 Playback History Panel (SMP 1.6.1)

Minimalistyczny panel historii odtwarzania dla **foobar2000 + Spider Monkey Panel 1.6.1**.

> **⭐ KLUCZOWA ZALETA:** Ten panel **NIE wymaga Media Library** – w odróżnieniu od większości rozwiązań do historii, ten panel opiera się wyłącznie na zdarzeniach odtwarzania. Możesz go używać niezależnie od konfiguracji Media Library!

Projekt zawiera:

- panel wyświetlający **ostatnie 40 odtworzonych utworów**
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

Większość paneli historii dostępnych dla foobar2000 wymaga skonfigurowanej i działającej **Media Library**. Ten panel działa inaczej:

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

4. Ustaw caption panelu, np.: "Playback History"

5. Zapisz layout.

---

## 📝 Funkcje panelu

### ✔ Lista ostatnich 40 utworów
Każdy wpis zawiera timestamp:

[12:41] track.mp3
[12:45] another.flac

### ✔ Statyczny blok informacji na dole panelu

session played: 18
total mins: 42


Blok jest przyklejony do dołu panelu i nie przesuwa się.

### ✔ Pełna historia w playliście

Panel automatycznie tworzy playlistę:

> History


i dodaje do niej **każdy odtworzony utwór**, bez filtrów i bez usuwania duplikatów.

Limit playlisty: 200 pozycji (najstarsze są usuwane).

---

## 📂 Pliki w repozytorium

- `history_panel.js` – główny skrypt panelu SMP
- `README.md` – dokumentacja
- `LICENSE` – opcjonalnie MIT, jeśli chcesz udostępnić projekt open‑source

---

## 📜 Licencja

Możesz użyć MIT, WTFPL lub dowolnej innej licencji.  
Jeśli nie wiesz którą wybrać — MIT jest najbezpieczniejsza.
