import './style.css'

/* Need to define the winning set of combinations
Before a player is able to take their turn, need to check if they are able to.
Meaning
- The current state of the game doesn't yet have a winning combination
- The current state of the game isn't tied (all boxes filled with no winning combination)
*/

let gameState = new Array(9).fill("");
let currentPlayer = "X";
let isGameOver = false;

// Selecting HTML element from our page
const boxBtns = document.querySelectorAll<HTMLButtonElement>(".box")
const statusDisplay = document.querySelector<HTMLHeadingElement>("#statusDisplay")!
const resetBtn = document.querySelector<HTMLButtonElement>("#resetBtn")


const handleBoxClick = (event: Event) => {
    if (isGameOver) {
        return;
    }

    const box = event.currentTarget as HTMLButtonElement
    const index = Array.from(boxBtns).indexOf(box);
    // convert boxBtns into an array to use array methods and find the index of clicked cell
    if (gameState[index] === "") {
        // update the sameState array with the current player's symbol
        gameState[index] = currentPlayer;
    }

    if (box) {
        box.innerHTML = currentPlayer
        // display the current players symbol on the clicked cell
        box.classList.add("played");

        isGameOver = checkWinner();

        if (!isGameOver) {
            currentPlayer = currentPlayer === "X" ? "O" : "X"
            statusDisplay.textContent = `${currentPlayer}'s turn`;
        }
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

        if (gameState[a] !== '' && gameState[a] === currentPlayer && gameState[b] === currentPlayer && gameState[c] === currentPlayer) {
            statusDisplay.textContent = `${currentPlayer} wins!`;
            // exit function after a winner is found
            return true;
        }
    }

    if (!gameState.includes("")) {
        statusDisplay.textContent = "It's a draw!";
        return true
    }

    return false
};

const resetGame = () => {
    gameState = new Array(9).fill("");
    boxBtns.forEach(box => {
        box.innerHTML = "";
        box.classList.remove("played");
    });
    currentPlayer = "X";
    statusDisplay.textContent = `${currentPlayer} begins!`;
    isGameOver = false;

}

resetBtn?.addEventListener("click", resetGame);




