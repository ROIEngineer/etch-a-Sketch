
function createGrid() {
  // -- DOM refs --
  const container = document.querySelector('.container');

  // -- Clear content --
  container.textContent = '';

  // Set grid styles
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(16, 1fr)';
  container.style.gridTemplateRows = 'repeat(16, 1fr)';
  container.style.gap = '1px';
  container.style.width = '400px';
  container.style.height = '400px';

  // Create 16 x 16 grid
  for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = '#f0f0f0';
    div.style.border = '1px solid red';
    div.style.aspectRatio = '1';
    container.appendChild(div);
  }
}

document.addEventListener('DOMContentLoaded', createGrid);
