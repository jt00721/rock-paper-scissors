function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

    const body = document.querySelector('body');
    const gameTitle = document.createElement('h1');
    const displayDiv = document.createElement('div');
    const buttonsContainer = document.createElement('div');

    body.appendChild(displayDiv);
    displayDiv.appendChild(gameTitle);
    displayDiv.appendChild(buttonsContainer);

    gameTitle.textContent = "ROCK-PAPER-SCISSORS";

    body.setAttribute('style', 'background-color: #656565; display: flex; justify-content: center; align-items: center; height: 800px;');
    displayDiv.setAttribute('style', 'text-align: center;')

    gameTitle.setAttribute('style', 'font-family: sans-serif; color: #FFFFFF;');
    buttonsContainer.setAttribute('style', 'width: 700px; height: 100px; background-color: #808782; display: flex; justify-content: center; align-items: center; gap: 20px; border-radius: 0px 0px 15px 15px;');

    const buttonsList = ['rock', 'paper', 'scissors'];
    buttonsList.forEach((choice) => {
        const button = document.createElement('button');
        button.textContent = capitalizeFirstLetter(choice);
        button.dataset.choice = choice;
        button.addEventListener('click', () => handleButtonClick(choice));
        buttonsContainer.appendChild(button);
        button.setAttribute('style', 'width: 200px; padding: 8px 16px; font-weight: bold; color: #FFFFFF; background-color: #A6D3A0; border: 3px solid #FFFFFF; border-radius: 10px; box-shadow: inset 5px 5px 5px #D1FFD7;');
    });

    function handleButtonClick(userChoice) {
        result = playRound(userChoice, getComputerChoice());
        if (!result.includes("Tie")) {
            result.includes("Win") ? playerScore++ : computerScore++;
        }
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log("PLAYER WINS!");
    } else if (playerScore < computerScore) {
        console.log("COMPUTER WINS!");
    } else {
        console.log("IT'S A TIE!");
    }

}

playGame();