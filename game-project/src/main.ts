import './style.css'


const myTTTArr = new Array(9).fill([""])


// Selecting HTML element from our page
const boxBtns = document.querySelectorAll<HTMLButtonElement>(".box")
const statusDisplay = document.querySelector<HTMLHeadingElement>("#statusDisplay")
const startBtn = document.querySelector<HTMLButtonElement>("#startBtn")
const resetBtn = document.querySelector<HTMLButtonElement>("#resetBtn")

const handleBoxClick = (event: Event, player: any) => {


    const box = event.currentTarget as HTMLButtonElement
    if (box) {
        box.innerHTML = player
    }

}

const playGame = (e: Event) => {
    let currentPlayer = ""

    // Decide rules on who is starting
    currentPlayer = "O"

    if ((currentPlayer === "O")) {
        handleBoxClick(e, currentPlayer)
        // After player O finished reassigned currentplayer
        // currentPlayer = 
    }
    if (currentPlayer === "X") {

    }
}


boxBtns.forEach((box) => {
    box.addEventListener('click', (event: Event) => {
        handleBoxClick(event, "X")
    })
})