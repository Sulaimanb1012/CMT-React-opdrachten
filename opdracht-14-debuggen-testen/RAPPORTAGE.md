# RAPPORTAGE - Favorite Movies List (Debuggen en Testen)

## Wat was de opdracht?
Ik kreeg een React app waarin je favoriete films kan opslaan.
Maar de app werkte niet goed.  
Ik moest de fouten vinden, oplossen en daarna testen of alles werkt volgens de user stories.

---

## 🐞 Bugs die ik heb gevonden en opgelost

### Bug 1: useState werkte niet
- **Probleem:** De app crashte.
- **Oorzaak:** `useState` was niet geïmporteerd.
- **Oplossing:** `import { useState } from 'react';` toegevoegd.

### Bug 2: Dubbele films check was verkeerd
- **Probleem:** De app zei dat elke film al bestond, terwijl dat niet zo was.
- **Oorzaak:** De if-statement stond omgedraaid.
- **Oplossing:** Veranderd naar: `if (movies.includes(newMovie)) { ... }`.

### Bug 3: Film werd niet toegevoegd
- **Probleem:** Film verscheen niet in de lijst.
- **Oorzaak:** Typfout → er stond `setMovie` in plaats van `setMovies`.
- **Oplossing:** Veranderd naar `setMovies([...movies, newMovie])`.

### Bug 4: Invoerveld werkte niet goed
- **Probleem:** Het input veld werd direct leeggemaakt en je kon niet typen.
- **Oorzaak:** `setMovie('')` stond buiten `handleSubmit`.
- **Oplossing:** `setMovie('')` verplaatst naar binnen `handleSubmit`.

### Bug 5: React gaf warning bij de lijst
- **Probleem:** Er was geen `key` bij `.map()`.
- **Oplossing:** `key={movie}` toegevoegd aan `MovieItem`.

---

## ✅ Test Resultaten (Acceptatiecriteria)

### User Story 1: Film toevoegen → ✅ Geslaagd
- Invoerveld aanwezig → ✅
- Knop om toe te voegen → ✅
- Film komt in de lijst → ✅
- Lege film geeft foutmelding → ✅
- Input wordt leeggemaakt → ✅

### User Story 2: Film verwijderen → ✅ Geslaagd
- Elke film heeft een verwijderknop → ✅
- Film verdwijnt direct uit lijst → ✅

### User Story 3: Geen dubbele films → ✅ Geslaagd
- Dubbele film geeft melding → ✅
- Dubbele film wordt niet toegevoegd → ✅

### User Story 4: Lege lijst melding → ✅ Geslaagd
- Bij lege lijst: “No favorite movies yet. Add some!” → ✅
- Na toevoegen verdwijnt de melding → ✅
- Bij laatste film verwijderen komt melding terug → ✅

---

## 🎉 Eindconclusie
Alle bugs zijn opgelost.  
De app werkt nu helemaal goed volgens de opdracht en alle user stories zijn gehaald.
