

const gameBoard = document.querySelector('#gameboard')
const display = document.querySelector('#info')

const startCells = [
    "","","","","","","","","",
]
let move = "circle"

display.textContent = " Circle goes first "
function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addMove)
        gameBoard.append(cellElement)
    })
}
createBoard()

function addMove(e){
   const goDisplay = document.createElement('div')
   goDisplay.classList.add(move)
   e.target.append(goDisplay)
   move = move === "circle" ? "x" : "circle"
   display.textContent = "it is now " + move + "'s move."
   e.target.removeEventListener('click', addMove)
}
function declareWinner() {
    const allSquares = document.querySelectorAll(".square")
    const winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    winningCombinations.forEach(array => {
        const circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("circle"))
        if (circleWins) {
            display.textContent = 'Circle Wins!'
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
    })
    winningCombinations.forEach(array => {
        const xWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('x'))
        if (xWins) {
            display.textContent = 'X Wins!'
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
    })
}
