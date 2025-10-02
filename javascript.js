function getGridSize() {
  // Ask user for number
  let num = prompt('How many squares per side?');
  num = parseInt(num);

  // Validate input
  if (isNaN(num) || num < 1 || num > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  // Create grid with the user's input
  createGrid(num);
}

// -- DOM ref --
const btn = document.querySelector('button');

// -- Button Event Listener --
btn.addEventListener('click', getGridSize);

function createGrid(squaresPerSide) {
  // -- DOM refs --
  const grid = document.querySelector('.grid');

  // -- Clear content --
  grid.textContent = '';

  // Grid styles
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
  grid.style.gap = '1px';
  grid.style.width = '960px';
  grid.style.height = '960px';

  // Squared Math - calculate total number of squares
  const totalSquares = squaresPerSide * squaresPerSide;

  // Create 16 x 16 grid
  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = '#ffffff';
    div.style.border = '1px solid #ccc';
    div.style.aspectRatio = '1';
    div.style.transition = 'background-color, 0.1s ease';

    // -- Hover event listener --
    div.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#333333';
    });

    grid.appendChild(div);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  createGrid(16);

  // Reset button inside DOMContentLoaded to ensure it exists
  const reset = document.getElementById("reset");
  reset.addEventListener('click', () => {
    createGrid(totalSquares);
  });
});













