function computerPlay(num) {
    num = Math.floor(Math.random() * 3);
    if (num <= 1) {
        return "Rock";
    } else if (num >= 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        return `You lose! Paper covers Rock. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return `You lose! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        computerScore++;
        return `You win! Scissors cuts Paper. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return `You lose! Scissors cuts Paper. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        computerScore++;
        return `You win! Paper covers Rock. Score: ${playerScore} to ${computerScore}`;
    } else {
        return `Tie! Try again! Score: ${playerScore} to ${computerScore}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Type: Rock, Paper or Scissors");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You're the loser! Final Score: ${playerScore} to ${computerScore}`);
    } else {
        console.log(`I don't know how you did it, but you tied. Final Score: ${playerScore} to ${computerScore}`);
    }
}

game();