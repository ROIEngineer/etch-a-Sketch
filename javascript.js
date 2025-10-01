// -- DOM refs --
const container = document.querySelector('.container');

function createGrid() {
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = #f0f0f0;
    div.style.border = '1px solid red';
    container.appendChild(div);
  }
}

document.addEventListener('DOMContentLoaded', createGrid);
