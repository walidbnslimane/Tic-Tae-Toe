const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('game-board');
const winningMessageTextElement = document.getElementById('winning-message-text');
const winningMessageElement = document.getElementById('winning-message');
const restartButton = document.getElementById('restart-button');
const alternateModeButton = document.getElementById('alternate-mode-button');
const botModeButton = document.getElementById('bot-mode');
const playerModeButton = document.getElementById('player-mode');
let currentPlayer = 'X';
let vsBot = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function initialize() {
    board.classList.add('hidden');
}

function startGame() {
    cells.forEach(cell => {
        cell.classList.remove('X');
        cell.classList.remove('O');
        cell.innerText = '';
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    winningMessageElement.classList.remove('show');
    alternateModeButton.classList.add('hidden');
    currentPlayer = 'X';
    board.classList.remove('hidden');
}

function handleClick(e) {
    const cell = e.target;
    if (cell.classList.contains('X') || cell.classList.contains('O')) {
        return;
    }
    placeMark(cell, currentPlayer);
    if (checkWin(currentPlayer)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        if (vsBot && currentPlayer === 'O') {
            botMove();
        }
    }
}

function placeMark(cell, currentPlayer) {
    cell.classList.add(currentPlayer);
    cell.innerText = currentPlayer;
}

function swapTurns() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(currentPlayer) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentPlayer);
        });
    });
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${currentPlayer} Wins!`;
    }
    winningMessageElement.classList.add('show');
    suggestAlternateMode();
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('X') || cell.classList.contains('O');
    });
}

function botMove() {
    const availableCells = [...cells].filter(cell => !cell.classList.contains('X') && !cell.classList.contains('O'));
    if (availableCells.length > 0) {
        const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        setTimeout(() => {
            placeMark(randomCell, 'O');
            if (checkWin('O')) {
                endGame(false);
            } else if (isDraw()) {
                endGame(true);
            } else {
                swapTurns();
            }
        }, 500);
    }
}

restartButton.addEventListener('click', startGame);

botModeButton.addEventListener('click', () => {
    vsBot = true;
    document.getElementById('mode-selection').classList.add('hidden');
    startGame();
});

playerModeButton.addEventListener('click', () => {
    vsBot = false;
    document.getElementById('mode-selection').classList.add('hidden');
    startGame();
});

function suggestAlternateMode() {
    alternateModeButton.classList.remove('hidden');
    alternateModeButton.innerText = vsBot ? 'Play with 2 Players' : 'Play with Bot';
    alternateModeButton.onclick = () => {
        vsBot = !vsBot;
        alternateModeButton.classList.add('hidden');
        startGame();
    };
}

initialize();
