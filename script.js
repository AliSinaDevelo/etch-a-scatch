const container = document.querySelector('.container');
const resetButton = document.getElementById('reset-button');

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', changeColor);
    });
}

function changeColor(event) {
    const randomColor = getRandomColor();
    event.target.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetGrid() {
    let gridSize = prompt('Enter the number of squares per side (1-100):');
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    createGrid(gridSize);
}

resetButton.addEventListener('click', resetGrid);

createGrid(16);
