const myArray = ["Rock", "Paper", "Scissors"];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    let x = capitalizeFirstLetter(playerSelection.toLowerCase());
    let y = computerSelection;
    if (x === y) {
        return ["Tie!", 0];
    } else if (x === "rock" && y === "scissors") {
        return ["You Win! Rock beats Scissors", 1];
    } else if (x === "paper" && y === "rock") {
        return ["You Win! Paper beats Rock", 1];
    } else if (x === "scissors" && y === "paper") {
        return ["You Win! Scissors beat Paper", 1];
    } else {
        return ["You Lose! " + y + " beats " + x, 2];
    }
}

function game() {
    let score = 0;
    let playerWins = 0;
    let compWins = 0;
    while (score <= 4) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection)[1];
        if (result === 1) {
            playerWins += 1;
            score += 1;
        } else if (result === 2) {
            compWins += 1;
            score += 1;
        } else {
            score += 1;
        }       
    }
    if (playerWins > compWins) {
        return "You WIN!";
    } else {
        return "You LOSE!"
    }
}

console.log(game());