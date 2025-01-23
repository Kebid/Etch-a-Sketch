const gridContainer = document.querySelector('.grid-container'); 
const grid = document.getElementById('grid'); 
const changeGridButton = document.getElementById('changeGrid');

function createGrid(gridSize) {
  grid.innerHTML = ''; 

  for (let i = 0; i < gridSize * gridSize; i++) { 
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem); 
  }

  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'gray'; 
    });
  });
}

changeGridButton.addEventListener('click', () => {
  let gridSize = parseInt(prompt("Enter grid size (max 100):"));

  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }

  createGrid(gridSize); 
});

// Initial grid creation
createGrid(16);
