# Etch-a-Sketch

A simple browser-based Etch-a-Sketch drawing grid built with HTML, CSS and JavaScript. Click **Squares Per Side** to choose a grid size (1–100), hover over the squares to "draw", and use **Clear Drawing** to reset the colors while keeping the grid size.

---

## Demo / Quick start

1. Clone or download the project files.
2. Open `index.html` in your browser.

Open `index.html` to run the app in any modern browser. 

---

## Features

* Default 16×16 drawing grid on load. 
* Prompt user for custom grid size (1–100). 
* Hover-to-draw interaction for each grid cell. 
* Clear (reset) button that clears cell colors but preserves grid layout. 
* CSS variables for easy theme customization. 

---

## Project structure

```
/ (project root)
├─ index.html         # App shell and buttons. :contentReference[oaicite:6]{index=6}
├─ javascript.js      # Grid creation, event listeners, reset logic. :contentReference[oaicite:7]{index=7}
└─ styles.css         # Visual styles and CSS variables. :contentReference[oaicite:8]{index=8}
```

---

## How it works (brief)

* `index.html` contains the app markup and two buttons (Squares Per Side and Clear Drawing). 
* `javascript.js`:

  * On load, `createGrid(16)` builds a square grid of divs and attaches a `mouseover` listener to each cell to change its background color when hovered. 
  * The **Squares Per Side** button triggers `getGridSize()` which prompts the user and calls `createGrid(n)` with validation. 
  * The **Clear Drawing** button clears the color of all grid cells without changing layout. 
* `styles.css` provides variables and base layout for the UI and grid container. 

---

## Usage

* Click **Squares Per Side** → enter a number between **1** and **100** → the grid updates.
* Move your mouse over the grid to draw (cells turn dark).
* Click **Clear Drawing** to reset colors.

---

## Customization

### Change colors or theme

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #657383;
  --dark-color: #2A3439;
  --background-color: #f0f0f0;
  --white: #ffffff;
}
```

Modify `--primary-color` and `--dark-color` to change button and hover colors. 

### Change default grid size

In `javascript.js` change the `createGrid(16);` call inside the `DOMContentLoaded` handler to your preferred default. 

---

## Future improvements

Planned enhancements and ideas to improve the app:

- Make grid container responsive (replace fixed width with a `max-width`/flexible layout so the grid scales cleanly on smaller screens).
- Improve accessibility:
  - Add keyboard controls for drawing (arrow keys + paint toggle).
  - Replace `prompt()` with an accessible modal and add ARIA attributes.
  - Increase focus outlines and provide high-contrast theme options.
- Touch support and better mobile hit-target sizes for cells.
- Persist grid state (localStorage) so drawings survive page reloads.
- Add an optional color picker and brush modes (gradual shading, random color).
- Add unit / integration tests for grid-generation logic and input validation.

## Contributing

1. Fork the repo.
2. Create a branch (`feature/my-feature`).
3. Commit your changes and open a PR with a clear description of what you changed.

---

## License

MIT License — feel free to reuse and modify. Replace `<YOUR NAME>` and the year as needed.

```
MIT License

Copyright (c) <YEAR> <YOUR NAME>

Permission is hereby granted, free of charge...
```

---

## Credits

Built with plain HTML/CSS/JavaScript. See the source files for implementation details: `index.html`, `javascript.js`, and `styles.css`.   

---
