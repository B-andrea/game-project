import './style.css'

/* Need to define the winning set of combinations
Before a player is able to take their turn, need to check if they are able to.
Meaning
- The current state of the game doesn't yet have a winning combination
- The current state of the game isn't tied (all boxes filled with no winning combination)
*/

let gameState = new Array(9).fill([""]);
let currentPlayer = "X";

// Selecting HTML element from our page
const boxBtns = document.querySelectorAll<HTMLButtonElement>(".box")
const statusDisplay = document.querySelector<HTMLHeadingElement>("#statusDisplay")
const startBtn = document.querySelector<HTMLButtonElement>("#startBtn")
const resetBtn = document.querySelector<HTMLButtonElement>("#resetBtn")


const handleBoxClick = (event: Event) => {
    const box = event.currentTarget as HTMLButtonElement
    const index = Array.from(boxBtns).indexOf(box);
    // convert boxBtns into an array to use array methods and find the index of clicked cell
    if (gameState[index] === "") {
        // update the sameState array with the current player's symbol
        gameState[index] === currentPlayer;
    }
    if (box) {
        box.innerHTML = currentPlayer
        // display the current players symbol on the clicked cell
        box.classList.add("played");
        currentPlayer = currentPlayer === "X" ? "O" : "X"
        statusDisplay.textContent = `${currentPlayer}'s turn`;
    }
}

boxBtns.forEach((box) => {
    box.addEventListener('click', handleBoxClick)
})

const checkWinner = () => {
    const winCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    // Loop through each win combination
    for (let i = 0; i < winCombination.length; i++) {
        // destructure the current combination into a, b, and c
        const [a, b, c] = winCombination[i];

        if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            statusDisplay.textContent = `${currentPlayer} wins!`;
            return;
            // exit function after a winner is found

        }
    }

    if (!gameState.includes("")) {
        statusDisplay.textContent = "It's a draw!";
    }

};




// const playGame = (e: Event) => {
//     let currentPlayer = ""
