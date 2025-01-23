const gridContainer = document.getElementById('grid-container');
const changeGridButton = document.getElementById('changeGrid');
const clearGridButton = document.getElementById('clearGrid');

// Function to create the grid
function createGrid(gridSize) {
  gridContainer.innerHTML = ''; // Clear the grid

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    // Add random color on hover
    gridItem.addEventListener('mouseover', () => {
      gridItem.style.backgroundColor = getRandomColor();
    });

    gridContainer.appendChild(gridItem);
  }
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for changing grid size
changeGridButton.addEventListener('click', () => {
  let gridSize = parseInt(prompt("Enter grid size (max 100):"));

  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }

  createGrid(gridSize);
});

// Event listener for clearing the grid
clearGridButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => (item.style.backgroundColor = 'white'));
});

// Initial grid creation with default size 20
createGrid(20);
