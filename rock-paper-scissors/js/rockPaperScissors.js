// Rock Paper Scissors web console game






let computerRPS = getComputerChoice();
console.log(computerRPS);

let playerRPS = (prompt("Please enter 'rock', 'paper', or 'scissors'."));
playerRPS = playerRPS.toLowerCase();
console.log(getResult(computerRPS, playerRPS))

function getComputerChoice() {
    let compRPS = Math.ceil(Math.random()*3);
    let rps = ""
    switch (compRPS) {
        case 1:
            rps = "rock";
            break;
        case 2:
            rps = "paper";
            break;
        case 3:
            rps = "scissors"
    }
    return rps;
}

function getResult(cRPS, pRPS) {
    if (cRPS === pRPS){
        return "Tie"
    } else if ((cRPS === "scissors" && pRPS === "paper") || (cRPS === "rock" && pRPS === "scissors") || (cRPS === "paper" && pRPS === "rock")) {
        return `${cRPS} beats ${pRPS}, you lose!`;
    } else {
        return `${pRPS} beats ${cRPS}, you win!`;
    }
}
