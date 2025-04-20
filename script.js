let cell = document.querySelectorAll(".cell");
console.log(cell[2].mydata)
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

    const newplayer = () => {
        gameBoard.board[boardNum][id] = symbol;
    }
    return { newplayer }

}

let turn = false;

function checkwin(){
    
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
    for(const w of winCondition){
        const [a,b,c] = w;
        if (gameBoard.board[0][a] === "X" && gameBoard.board[0][b] === "X" && gameBoard.board[0][c] === "X") {
            console.log("X wins");
        }
        if (gameBoard.board[1][a] === "X" && gameBoard.board[1][b] === "X" && gameBoard.board[1][c] === "X") {
            console.log("X wins");
        }  if (gameBoard.board[2][a] === "X" && gameBoard.board[2][b] === "X" && gameBoard.board[2][c] === "X") {
            console.log("X wins");
        }  if (gameBoard.board[0][a] === "X" && gameBoard.board[1][b] === "X" && gameBoard.board[1][c] === "X") {
            console.log("X wins");
        }  if (gameBoard.board[0][a] === "X" && gameBoard.board[0][b] === "X" && gameBoard.board[0][c] === "X") {
            console.log("X wins");
        }
    }
}

function screenControl(){
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click",(e)=>{
            if((turn == false) &&  cell[i].innerHTML != "X" ){
                cell[i].innerHTML = "X";
                gamelogic(cell[i].getAttribute("mydata"),i,player.X).newplayer();
                console.log(gameBoard.board)
                checkwin()
            }
        })
    }
}
screenControl();