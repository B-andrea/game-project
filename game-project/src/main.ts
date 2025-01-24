import './style.css'

/* Need to define the winning set of combinations
Before a player is able to take their turn, need to check if they are able to.
Meaning
- The current state of the game doesn't yet have a winning combination
- The current state of the game isn't tied (all boxes filled with no winning combination)
*/



const gameState = new Array(9).fill([""]);
let currentPlayer = "X";

// Selecting HTML element from our page
const boxBtns = document.querySelectorAll<HTMLButtonElement>(".box")
const statusDisplay = document.querySelector<HTMLHeadingElement>("#statusDisplay")
const startBtn = document.querySelector<HTMLButtonElement>("#startBtn")
const resetBtn = document.querySelector<HTMLButtonElement>("#resetBtn")


const handleBoxClick = (event: Event) => {
    const box = event.currentTarget as HTMLButtonElement
    if (box) {
        box.innerHTML = currentPlayer
        box.classList.add("played");
        currentPlayer = currentPlayer === "X" ? "O" : "X"
    }
}

boxBtns.forEach((box) => {
    box.addEventListener('click', handleBoxClick)
})


const playGame = (e: Event) => {
    let currentPlayer = ""

    // Decide rules on who is starting
    currentPlayer = "O"

    if ((currentPlayer === "O")) {
        handleBoxClick(e)
        // After player O finished reassigned currentplayer
        // currentPlayer =
    }
    if (currentPlayer === "X") {

    }
}
