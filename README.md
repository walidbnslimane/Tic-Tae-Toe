# Tic-Tac-Toe with Unbeatable Bot

This project is a web-based **Tic-Tac-Toe** game that includes two gameplay modes:
- **Player vs Player** (Two players take turns to play)
- **Player vs Bot** (Play against an unbeatable bot using the Minimax algorithm)

## Features
- **Two Modes**: 
  - **Player Mode**: Two players can play against each other.
  - **Bot Mode**: Play against an AI bot that uses the Minimax algorithm to ensure it never loses.
  
- **Dynamic Role Management**: Each player (X or O) can only place up to 3 marks on the board at a time. If a player places a fourth mark, the first one they placed will be removed.
  
- **Bot Delay**: The bot will wait 1 second before playing its move, making the game feel more natural and interactive.

- **Responsive UI**: The game is playable on both desktop and mobile devices.

## How to Play
### Player vs Player Mode:
1. Click the "Player Mode" button to start a two-player game.
2. Player X makes the first move by clicking on any empty cell.
3. Player O then takes their turn by clicking on another empty cell.
4. The game ends when one player wins or there is a draw.

### Player vs Bot Mode:
1. Click the "Bot Mode" button to start a game against the bot.
2. Player X (you) makes the first move by clicking on any empty cell.
3. After 1 second, the bot (O) will place its move on the board.
4. The game ends when either player wins or there is a draw.

## Installation
1. Clone this repository or download the files as a ZIP archive.
    ```bash
    git clone https://github.com/your-username/tic-tac-toe-bot.git
    ```
2. Open the `index.html` file in your web browser to start the game.

## Project Structure
```plaintext
tic-tac-toe-bot/
│
├── index.html       # The main HTML file
├── style.css        # Styling for the game board and layout
├── script.js        # JavaScript logic for game mechanics and AI bot
└── README.md        # This file
