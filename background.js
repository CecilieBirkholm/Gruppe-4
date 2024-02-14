let currentPlayer = 'X';
let cells = Array.from(document.querySelectorAll('.cell'));
let message = document.getElementById('message');
let gameActive = true;

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }

    return null;
}

function checkDraw() {
    return cells.every(cell => cell.textContent !== '');
}

function handleResult(result) {
    gameActive = false;
    if (result) {
        message.textContent = `${result} wins!`;
    } else {
        message.textContent = 'Draw!';
    }
}

function cellClicked(index) {
    if (!gameActive || cells[index].textContent !== '') return;

    cells[index].textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        handleResult(winner);
    } else if (checkDraw()) {
        handleResult(null);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame() {
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
    });
    message.textContent = '';
    gameActive = true;
}
