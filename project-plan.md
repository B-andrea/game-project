# Tic Tac Toe

---

## Project Breakdown

---

A classic game of Tic Tac Toe, a two-player game that is played on a 3x3 grid. The objective is to take turns placing your mark (either "X" or "O") on the grid, and the first player to get three of their marks in a row - horizontally, vertically, or diagonally - wins the game. An ideal game for casual play or a fun way to pass the time.

---

## HTML/SCSS

-   [] The title of the game above the game board
-   [] Add a font and font sizing to the title
-   [] A div that will contain a 3x3 grid of 9 buttons that will serve as the game board
-   [] Each button is a clickable cell in the grid
-   [] A start button to begin the game
-   [] A button to restart the game
-   [] A div that will contain a display of the current player's turn or the game result (win or draw)
-   [] Center the body using flexbox
-   [] "X" and "O" markers styled with distinct colours
-   [] Styling for the start and restart button, with hover effect
-   [] Colours to fonts, background and game board

---

## Basic flow of the game

-   [] Players take turns clicking on the empty cells
-   [] The game should alternate between "X" and "O", placing the player's mark on the cell
-   [] After every move, the game should check if a player has won (three marks in a row)
-   [] If a player wins, it should prompt the display showing the game result
-   [] If the board is full without a winner, the game ends in a draw
-   [] Restart button at the end of the game

---

## TypeScript Logic

-   [] eventListeners should look out for clicks
-   [] Listen for click on start game and restart game
-   [] Listen for click on each grid cell that will call the function keeping track of the game state
-   [] Function to handle player moves and alternate turns between player X and player O
-   [] Function to check for the winner (rows, columns, diagonals)
-   [] Create ID's for DOM elements

--

More to be added as I work through the project
