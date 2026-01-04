# Etch-a-Sketch Drawing App

<img width="1910" height="740" alt="_home_hdurant_repos_etch-a-Sketch_index html" src="https://github.com/user-attachments/assets/2abf5955-4ba7-45d6-ac70-ba1fc8a2643a" />

## 🎨 Live Demo
[Click here to view live demo](https://vercel.com/harold-durants-projects/etch-a-sketch/5RCBdFYMRD9LSMGfPTh1i96ghF1F)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Code Highlights](#code-highlights)
- [Future Improvements](#future-improvements)

## 🚀 Overview
Etch-a-Sketch is an interactive drawing application built with vanilla JavaScript, HTML, and CSS. This project demonstrates modern frontend development skills with a responsive design and smooth user interactions. Create pixel art by hovering over the grid, customize the grid size, and clear your canvas with ease.

## ✨ Features
- **Interactive Drawing**: Hover to draw on the grid with smooth transitions
- **Customizable Grid**: Dynamic grid sizing from 1x1 to 100x100
- **Responsive Design**: Beautiful sidebar layout that adapts to all screen sizes
- **Clean UI**: Modern gradient design with polished buttons and animations
- **Real-time Feedback**: Visual feedback with hover effects and transitions
- **Mobile Optimized**: Fully responsive with mobile-first breakpoints

## 🛠️ Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox, Grid, CSS Animations, Media Queries
- **JavaScript (ES6)**: DOM manipulation, event handling, dynamic grid generation
- **Responsive Design**: vmin units for proportional scaling, mobile-first approach

## 📦 Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/etch-a-sketch.git
```

2. Navigate to the project directory:
```bash
cd etch-a-sketch
```

3. Open `index.html` in your browser:
```bash
open index.html
# or
start index.html
# or simply double-click the file
```

No build process or dependencies required!

## 🎮 Usage
### Basic Drawing
1. **Hover** over any square in the grid to draw
2. Watch as squares change color with smooth transitions
3. Create pixel art by moving your cursor across the grid

### Grid Customization
1. Click **"Squares Per Side"** button
2. Enter a number between 1 and 100
3. The grid will dynamically resize to your specified dimensions

### Clearing the Canvas
- Click **"Clear Drawing"** to reset all squares to white
- Start fresh with a clean canvas

## 📁 Project Structure
```
etch-a-sketch/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── javascript.js       # Grid logic and interactivity
└── README.md           # This documentation
```

## 💡 Code Highlights

### Responsive Grid System
```css
.grid {
    width: 65vmin;          /* Proportional to viewport */
    height: 65vmin;         /* Always square aspect ratio */
    max-width: 550px;       /* Limits on large screens */
    max-height: 550px;
}
```

### Dynamic Grid Generation
```javascript
function createGrid(squaresPerSide) {
    // Dynamically calculates grid size
    const totalSquares = squaresPerSide * squaresPerSide;
    
    // Creates responsive grid template
    grid.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
}
```

### Modern UI Components
- Gradient buttons with hover effects
- Ripple animations on click
- Smooth transitions and loading animations
- Custom scrollbar styling

## 🔮 Future Improvements
Planned enhancements for this project:

1. **Color Picker**: Allow users to choose drawing colors
2. **Drawing Modes**: Toggle between draw, erase, and rainbow modes
3. **Touch Support**: Enable drawing on touchscreen devices
4. **Save & Export**: Download creations as PNG images
5. **Grid Toggle**: Show/hide grid lines for better precision
6. **Undo/Redo**: History of drawing actions
7. **Pattern Library**: Pre-made patterns and templates

## 🏆 Learning Outcomes
This project demonstrates proficiency in:
- **DOM Manipulation**: Dynamic element creation and styling
- **Event Handling**: User interactions and responsive feedback
- **CSS Grid & Flexbox**: Modern layout techniques
- **Responsive Design**: Mobile-first approach with vmin units
- **Clean Code Practices**: Readable, maintainable JavaScript
- **UI/UX Principles**: Intuitive design with visual feedback

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author
**Your Name**  
- Portfolio: [My Website](https://vercel.com/harold-durants-projects/portfolio-web/J92kBWSULG2H7Jfrj4V1nihRBJX7)
- GitHub: [@ROIEngineer](https://github.com/ROIEngineer)

---

*Made with ❤️ and vanilla JavaScript*

---

## 🎯 Portfolio Notes
**Why this project stands out:**
- Demonstrates core JavaScript skills without frameworks
- Shows attention to UI/UX design principles
- Responsive design works flawlessly on all devices
- Clean, readable code with proper comments
- Professional styling that looks portfolio-ready
- Simple concept executed exceptionally well

**Keywords for recruiters:** Frontend Development, JavaScript, DOM Manipulation, Responsive Design, CSS Grid, UI/UX, Portfolio Project, Interactive Web Application

---

*Last Updated: October 2024*
