function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionLower = playerSelection.toLowerCase();
    const isTie = playerSelectionLower === computerSelection.toLowerCase();

    if (isTie) {
        return "It's a Tie";
    }

    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    const playerWins = winConditions[playerSelectionLower] === computerSelection.toLowerCase();
    return playerWins
        ? `You Win! ${playerSelection} beats ${computerSelection}`
        : `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt("Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();

        console.log("ROUND: " + (round + 1));
        console.log(playerSelection);
        console.log(computerSelection);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (!result.includes("Tie")) {
            result.includes("Win") ? playerScore++ : computerScore++;
        }

        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("PLAYER WINS!");
    } else if (playerScore < computerScore) {
        console.log("COMPUTER WINS!");
    } else {
        console.log("IT'S A TIE!");
    }

    const playAgain = prompt("Play Again?");
    if (playAgain.toLowerCase() === "yes") {
        playGame();
    }
}

playGame();