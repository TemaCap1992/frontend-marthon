const board = document.querySelector('#board')
const SQUARES_NUMBER = 600
const colors = ['#1c6714', '#1a5312', '#a9e956', '#a6fa05', '#12f507', '#7dd012', '#dfff00', '#ffa900', '#ffd300', '#fbfdb9', '#fbfd73', '#fbfd00',]

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square)
    )

    square.addEventListener('mouseleave', () =>
        removeColor(square)
    )

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.borderRadius = '50%'
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
    element.style.borderRadius = '0%'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}