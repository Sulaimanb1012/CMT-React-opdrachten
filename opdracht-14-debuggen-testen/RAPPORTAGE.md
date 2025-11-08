# RAPPORTAGE - Favorite Movies List

## Wat was de opdracht?
Ik kreeg een film-app die niet goed werkte.  
Mijn taak was om de fouten te vinden, ze te fixen en daarna te checken of alles goed werkt.

---

## Bugs die ik heb opgelost

### Bug 1: useState werkte niet
- De app stopte met werken.
- Dat kwam omdat `useState` niet was geïmporteerd.
- Ik heb bovenaan de code gezet: `import { useState } from 'react';`

### Bug 2: Dubbele films check klopte niet
- De app zei dat een film al bestond, terwijl dat niet zo was.
- De if-statement stond verkeerd om.
- Ik heb hem goed gezet zodat dubbele films nu wél worden herkend.

### Bug 3: Film werd niet toegevoegd
- De film kwam niet in de lijst.
- Er stond per ongeluk `setMovie` in plaats van `setMovies`.
- Ik heb dat aangepast zodat films weer toegevoegd worden.

### Bug 4: Input werkte niet goed
- Het input veld werd meteen leeggemaakt, je kon niet typen.
- `setMovie('')` stond op de verkeerde plek.
- Ik heb die regel verplaatst naar binnen `handleSubmit`.

### Bug 5: React gaf een lijst waarschuwing
- React gaf een warning over het missen van een `key`.
- Ik heb bij elke film `key={movie}` toegevoegd.

---

## Test Resultaten

### User Story 1 (Film toevoegen) → ✅
Alles werkt: film toevoegen, lege input melding, input wordt leeggemaakt.

### User Story 2 (Film verwijderen) → ✅
Knop werkt, film verdwijnt meteen.

### User Story 3 (Geen dubbele films) → ✅
Dubbele film geeft melding en wordt niet toegevoegd.

### User Story 4 (Lege lijst tekst) → ✅
Lege lijst toont tekst.  
Zodra je een film toevoegt verdwijnt de tekst.  
Als alles weer weg is komt de tekst terug.

---

## Conclusie
Ik heb alle fouten opgelost.  
De app werkt nu goed en doet precies wat er moet gebeuren.
