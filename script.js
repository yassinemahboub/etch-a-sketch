// GLOBAL SCOPE
const container = document.querySelector('.container');
const resetButton = document.getElementById('resetButton');
const rangeInput = document.getElementById('rangeInput');
const newGridButton = document.getElementById('newGridButton');
let squaresPerSide = 16; // Initial value


// Update the range value display
rangeInput.addEventListener('input', function() {
    rangeValue.textContent = rangeInput.value;
  });

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


// Event listener for the new grid button
newGridButton.addEventListener('click', function() {
    const newSquaresPerSide = parseInt(rangeInput.value);
  
    if (!isNaN(newSquaresPerSide) && newSquaresPerSide >= 1 && newSquaresPerSide <= 100) {
      createNewGrid(newSquaresPerSide);
    } else {
      alert('Invalid input. Please select a number between 1 and 100.');
    }
  });
