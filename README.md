# Tic Tac Toe

---

## Project Breakdown

---

A classic game of Tic Tac Toe, a two-player game that is played on a 3x3 grid. The objective is to take turns placing your mark (either "X" or "O") on the grid, and the first player to get three of their marks in a row - horizontally, vertically, or diagonally - wins the game. An ideal game for casual play or a fun way to pass the time.

---

## HTML/SCSS

-   [x] The title of the game above the game board
-   [x] Add a font and font sizing to the title
-   [x] A div that will contain a 3x3 grid of 9 buttons that will serve as the game board
-   [x] Styling the gameboard - add hover effect
-   [x] Each button is a clickable cell in the grid
-   [x] A button to restart the game
-   [x] A heading that will contain a display of the current player's turn or the game result (win or draw)
-   [x] Center the body using flexbox
-   [x] "X" and "O" markers styled
-   [x] Styling for the restart button, with hover effect
-   [x] Colours to fonts, background and game board

---

## Basic flow of the game

-   [x] Players take turns clicking on the empty cells
-   [x] The game should alternate between "X" and "O", placing the player's mark on the cell
-   [x] After the 5th move and so on, the game should check if a player has won (three marks in a row)
-   [x] If a player wins, it should prompt the display showing the game result
-   [x] If the board is full without a winner, the game ends in a draw
-   [x] Restart button at the end of the game

---

## TypeScript Logic

-   [x] Declare a variable with an empty array representing the start state of the game board

    -   [x] Create a function that updates the empty game board array

-   [x] Declare a variable where the first player is always 'X'
-   [x] Add query selector for all buttons in the grid
-   [x] Declare a variable for the state of the game

    -   [x] Create function that will handle game over

-   [x] Modify HTML element with new class when each button is clicked
-   [x] Add a query selector for restart button
-   [x] Create a function to handle the reset of the game
-   [x] eventListeners should look out for clicks
    -   [x]Listen for click on restart game
    -   [x] Listen for click on each grid cell that will call the function keeping track of the game state
-   [x] Function to handle player moves and alternate turns between player X and player O
-   [x] Function to check for the winner (rows, columns, diagonals)
    -   [x] A function that is responsible for keeping track of the status of the game
    -   [x] Declare a variable with a 2D array of the winning combinations
    -   [x] Add a loop to iterate through the winning combinations
    -   [x] Function should also check for a draw
-   [x] Update status display with result of the game
-   [x] Create ID's and classes for DOM elements

---
