# Top10Games 🎮

Een Nederlandstalige website die elke maand een top 10 toont van de meest gespeelde games (PC, console en mobiel).

**Student:** Ahmed Borghol  
**Project:** Schoolopdracht – Frontend Development  
**Technologie:** React + HTML + CSS + JavaScript

---

## 📁 Projectstructuur

```
top10games/
├── index.html              ← HTML ingang (React mount point)
├── src/
│   ├── main.jsx            ← React opstartpunt
│   ├── App.jsx             ← Router: welke pagina wordt getoond
│   ├── index.css           ← Alle globale CSS (zelfde design als voorheen)
│   ├── data/
│   │   └── games.js        ← Alle game-data en archief-data
│   ├── components/
│   │   ├── Header.jsx      ← Navigatie + hamburger menu
│   │   ├── Footer.jsx      ← Footer
│   │   ├── GameCard.jsx    ← Één game-kaart in de top 10
│   │   └── FilterBar.jsx   ← Filterknoppen (Alle / PC / Console / Mobiel)
│   └── pages/
│       ├── Home.jsx        ← Homepage met hero + top 10 lijst
│       ├── Archief.jsx     ← Archiefpagina
│       └── Over.jsx        ← Over-pagina
└── package.json
```

## 🚀 Functionaliteiten

- ✅ Top 10 lijst met rang, platformtags en trendpijlen
- ✅ Filterknoppen (Alle / PC / Console / Mobiel)
- ✅ Archiefpagina met eerdere maanden
- ✅ Responsive design (mobiel, tablet, desktop)
- ✅ Hamburger menu op mobiel
- ✅ Animaties (fadeUp, slideIn)
- ✅ Over-pagina met projectinfo
- ✅ React Router voor navigatie tussen pagina's

## 🛠️ Installatie & Opstarten

```bash
# 1. Installeer dependencies
npm install

# 2. Start de ontwikkelserver
npm run dev

# 3. Open http://localhost:5173 in je browser
```

## 📦 Dependencies

- react
- react-dom
- react-router-dom (navigatie)
- vite (build tool)

---

*Gemaakt als schoolproject · Ahmed Borghol*
