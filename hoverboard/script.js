const container = document.getElementById('container')
const colors = ['#ffd700', '#ff8000', '#c83200', '#ff70a6', '#dfb2f4', '#f49097', '#f2f5ff']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#000080'
    element.style.boxShadow = `0 0 2px #3d59ab`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}