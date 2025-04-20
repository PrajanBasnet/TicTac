let cell = document.querySelectorAll(".cell");
let msg = document.getElementById("message");
let playerOne = document.getElementById("p1");
let playerTwo = document.getElementById("p2");

const short = document.getElementById("short");
console.log(playerOne.value)
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

function checkwin() {

    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
        

    ]
    for (const w of winCondition) {
        const [a, b, c] = w;
        for (let k = 0; k < 3; k++) {
            if (gameBoard.board[k][a] === "X" && gameBoard.board[k][b] === "X" && gameBoard.board[k][c] === "X") {
                msg.innerHTML = "X";
                console.log("X wins");
            }
            else if (gameBoard.board[k][a] === "O" && gameBoard.board[k][b] === "O" && gameBoard.board[k][c] === "O") {
                msg.innerHTML = "Draw";
                console.log("O wins");
            }
      
        }

        for (let j = 0; j < 3; j++) {
            if (gameBoard.board[0][j] === "X" && gameBoard.board[1][j] === "X" && gameBoard.board[2][j] === "X") {
                msg.innerHTML = "Draw";
                console.log("X wins");
            }
          
            if (gameBoard.board[0][j] === "O" && gameBoard.board[1][j] === "O" && gameBoard.board[2][j] === "O") {
                msg.innerHTML = "Draw";
                console.log("O Wins");
            }
      
        }

        if (gameBoard.board[0][a] === "X" && gameBoard.board[1][b] === "X" && gameBoard.board[2][c] === "X") {
            console.log("This Winsss wins");
        }
        if (gameBoard.board[0][a] === "O" && gameBoard.board[1][b] === "O" && gameBoard.board[2][c] === "O") {
            console.log("O wins");
        }
      
    }
}
let dw =0;
function draw(){
    dw += 1;
    if(dw == 9){
        console.log("Draw ");
        msg.innerHTML = "Draw";
    }
    return
}

function playerToggle(){
    console.log(playerOne.value);

}
function screenControl() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click", (e) => {
            if ((turn == false) && cell[i].innerHTML != "X") {
                turn = true;
                short.innerHTML = `Turn: ${playerOne.value} `;                cell[i].innerHTML = "X";
                gamelogic(cell[i].getAttribute("mydata"), cell[i].getAttribute("cellNum"), player.X).newplayer();
                console.log(gameBoard.board)
                draw()
                checkwin()
            }
            else if ((turn == true) && (cell[i].innerHTML != "O")) {
                turn = false;
                cell[i].innerHTML = "O";
                short.innerHTML = `Turn: ${playerTwo.value} `;

                gamelogic(cell[i].getAttribute("mydata"), cell[i].getAttribute("cellNum"), player.O).newplayer();
                console.log(gameBoard.board)
                draw()

                checkwin()
            }
        })
    }
}
screenControl();

let open = document.querySelector("#btn");
let dialog = document.querySelector("dialog");
open.addEventListener("click",()=>{
    dialog.showModal()
})

