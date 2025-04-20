
const gameBoard = {
    board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
}

const player = {
    X: "X",
    O: "O"
}

function gamelogic(boardNum, id, symbol) {

    gameBoard.board[0][0]
    const newplayer = () => {
        gameBoard.board[boardNum][id] = symbol;
    }
    return { newplayer }

}
const test = () => {
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]
    let count = 0;
    
    for (const w of winCondition) {
        let [a, b, c] = w;
        for (let i = 0; i < 3; i++) {
            if (gameBoard.board[i][a] === "X" && gameBoard.board[i][b] === "X" && gameBoard.board[i][c] === "X") {
                console.log("Congratulations for winning X")
                return;
                
            }
            if (gameBoard.board[i][a] === "O" && gameBoard.board[i][b] === "O" && gameBoard.board[i][c] === "O") {
                console.log("Congratulation O for winning");
                return;
            }  if (gameBoard.board[i][a] != 0 && gameBoard.board[i][b] != 0 && gameBoard.board[i][c] != 0) {
                count += 1;
                console.log(count)
                if (count == 3) {
                    count = 0;
                    console.log("Draw")
                    return;
                }

            
        }
    }
}

}
gamelogic(0, 2, player.X).newplayer();
gamelogic(0, 1, player.X).newplayer();
gamelogic(0, 0, player.O).newplayer();

gamelogic(1, 2, player.X).newplayer();
gamelogic(1, 1, player.X).newplayer();
gamelogic(1, 0, player.O).newplayer();

gamelogic(2, 2, player.X).newplayer();
gamelogic(2, 1, player.O).newplayer();
gamelogic(2, 0, player.O).newplayer();
console.log(gameBoard.board)
test();