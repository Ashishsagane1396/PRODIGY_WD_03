document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Create the tic-tac-toe board dynamically
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("click", function () {
            if (gameBoard[i] === "" && !checkWinner()) {
                gameBoard[i] = currentPlayer;
                cell.textContent = currentPlayer;
                if (checkWinner()) {
                    alert(`${currentPlayer} wins!`);
                } else if (!gameBoard.includes("")) {
                    alert("It's a tie!");
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
        board.appendChild(cell);
    }

    // Function to check for a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }

        return false;
    }
});
