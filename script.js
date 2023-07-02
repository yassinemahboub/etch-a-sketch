// GLOBAL SCOPE
const container = document.querySelector('.container');
const resetButton = document.getElementById('resetButton');
const newGridButton = document.getElementById('newGridButton');
let squaresPerSide = 16; // Initial value

// Function to reset the hover effect
function resetHoverEffect() {
  const gridEl = document.querySelectorAll('.square');
  gridEl.forEach(function(square) {
    square.classList.remove('hovered');
  });
}

// Function to create a new grid based on user input or default value
function createNewGrid(newSquaresPerSide = squaresPerSide) {
    squaresPerSide = newSquaresPerSide;
  
    container.innerHTML = '';
  
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      let square = document.createElement('div');
      square.className = 'square';
      container.appendChild(square);
      square.style.flexBasis = `calc(100% / ${squaresPerSide})`; // Set flex-basis directly  
    }
  }
  

// GRID CREATION
window.addEventListener('DOMContentLoaded', function() {
  let container = document.querySelector('.container');
  createNewGrid(); // Create initial grid with default value
});

// HOVER EFFECT
container.addEventListener('mouseover', function(event) {
  const target = event.target;
  if (target.classList.contains('square')) {
    target.classList.add('hovered');
  }
});

// RESET BUTTON
resetButton.addEventListener('click', function() {
  resetHoverEffect();
});

// NEW GRID BUTTON
newGridButton.addEventListener('click', function() {
  const userInput = prompt('Enter the number of squares per side (maximum: 100):');
  const newSquaresPerSide = parseInt(userInput);
  
  if (userInput !== null && !isNaN(newSquaresPerSide) && newSquaresPerSide > 0 && newSquaresPerSide <= 100) {
    createNewGrid(newSquaresPerSide);
  } else {
    alert('Invalid input. Please enter a number between 1 and 100.');
  }
});
