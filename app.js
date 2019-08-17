const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    let x = playerSelection;
    let y = computerSelection;
    if (x === y) {
        return ["Tie!", 0];
    } else if (x === "Rock" && y === "Scissors") {
        return ["You Win! Rock beats Scissors", 1];
    } else if (x === "Paper" && y === "Rock") {
        return ["You Win! Paper beats Rock", 1];
    } else if (x === "Scissors" && y === "Paper") {
        return ["You Win! Scissors beat Paper", 1];
    } else {
        return ["You Lose! " + y + " beats " + x, 2];
    }
}

function togglePauseGame() {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.classList.toggle("gameON");
    });
}

function btnClick(e) {
    if(/gameON/.test(e.target.className)) {
        
        let playerScore = parseInt(document.getElementById("playerScore").textContent, 10);
        let computerScore = parseInt(document.getElementById("computerScore").textContent, 10);
        let player = e.target.textContent;
        let computer = computerPlay();
        document.getElementById("player").textContent = player;
        document.getElementById("computer").textContent = computer;
        let roundResult = playRound(player, computer);
        
        if (roundResult[1] === 1) {
            document.getElementById("result").textContent = "You WIN!";
            playerScore += 1;
            document.getElementById("playerScore").textContent = playerScore;
        } else if (roundResult[1] === 2) {
            document.getElementById("result").textContent = "You LOSE!";
            computerScore += 1;
            document.getElementById("computerScore").textContent = computerScore;
        } else {
            document.getElementById("result").textContent = "TIE!";
        } 
        
        if (playerScore === 5) {
            document.getElementById("finalCell").style.display = "block";
            document.getElementById("final").textContent = "VICTORY!";
            togglePauseGame();
        } else if (computerScore === 5) {
            document.getElementById("finalCell").style.display = "block";
            document.getElementById("final").textContent = "DEFEAT!";           
            togglePauseGame(); 
        }
              
        console.log(roundResult[0]);

    }

    if(/gameOFF/.test(e.target.className)) {
        document.getElementById("playerScore").textContent = 0;
        document.getElementById("computerScore").textContent = 0;
        document.getElementById("player").textContent = "";
        document.getElementById("computer").textContent = "";
        document.getElementById("result").textContent = "";
        document.getElementById("finalCell").style.display = "none";
        togglePauseGame();
    }
}

document.addEventListener('click', btnClick);  

