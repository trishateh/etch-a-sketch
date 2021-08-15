
const defaultMode = 'black';
const defaultSize = 16;


let currentMode = defaultMode;
let currentSize = defaultSize;

function setMode(newMode) {
    currentMode = newMode;
}

function setSize(newSize) {
    currentSize = newSize;
}

const container = document.getElementById('container');
const blackBtn = document.getElementById('blackBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const resetBtn = document.getElementById('resetBtn');

blackBtn.onclick = () => {
    eraseGrid();
    setMode('black');
}
rainbowBtn.onclick = () => {
    eraseGrid();
    setMode('rainbow');
}

eraserBtn.onclick = () => setMode('eraser');
resetBtn.onclick = () => reloadGrid();
clearBtn.onclick = () => eraseGrid();

function reloadGrid() {
    clearGrid();
    let currentSize = prompt("Enter the number of squares per side for the new grid. The number must be less than 100.");
    if (currentSize > 100 || currentSize == null) {
        alert ("Please enter a value less than 100.");
        reloadGrid();
    } else if (currentSize <= 100) {
        makeGrid(currentSize);
    }
}

function clearGrid() {
    container.innerHTML = '';
}


function makeGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        cell.addEventListener('mouseover', colorGrid);
        container.appendChild(cell).className = "gridItem";
    };
};


function colorGrid() {
    switch (currentMode) {
        case 'black':
            this.style.backgroundColor = '#000000';
            break;
        case 'rainbow':
            
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case 'eraser':
            this.style.backgroundColor = '#fefefe';
            break;

    }
}

function eraseGrid() {
    let cells = container.querySelectorAll('div');
    cells.forEach(cell => cell.style.backgroundColor = '#ffffff');
}

window.onload = () => {
    makeGrid(defaultSize);
}




