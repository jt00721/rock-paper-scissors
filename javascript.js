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
    let round = 0;
    let result;

    const body = document.querySelector('body');
    const gameTitle = document.createElement('h1');
    const displayDiv = document.createElement('div');
    const roundDiv = document.createElement('div');
    const roundLabel = document.createElement('h2');
    const buttonsContainer = document.createElement('div');
    const resultsDiv = document.createElement('div');
    const computerScoreDiv = document.createElement('div');
    const playerScoreDiv = document.createElement('div');
    const playerScoreLabel = document.createElement('h2');
    const computerScoreLabel = document.createElement('h2');
    const currentPlayerScore = document.createElement('h2');
    const currentComputerScore = document.createElement('h2');
    const roundWinnerLabel = document.createElement('h3');

    body.appendChild(displayDiv);
    displayDiv.appendChild(gameTitle);
    displayDiv.appendChild(roundDiv);
    displayDiv.appendChild(roundWinnerLabel);
    displayDiv.appendChild(resultsDiv);
    displayDiv.appendChild(buttonsContainer);
    resultsDiv.appendChild(playerScoreDiv);
    resultsDiv.appendChild(computerScoreDiv);
    roundDiv.appendChild(roundLabel);
    playerScoreDiv.appendChild(playerScoreLabel);
    computerScoreDiv.appendChild(computerScoreLabel);
    playerScoreDiv.appendChild(currentPlayerScore);
    computerScoreDiv.appendChild(currentComputerScore);

    gameTitle.textContent = "ROCK-PAPER-SCISSORS";

    roundLabel.textContent = `Round: ${round}`;
    roundWinnerLabel.textContent = result;
    playerScoreLabel.textContent = "Player Score";
    computerScoreLabel.textContent = "Computer Score";

    currentPlayerScore.textContent = playerScore;
    currentComputerScore.textContent = computerScore;

    body.setAttribute('style', 'background-color: #656565; display: flex; justify-content: center; align-items: center; height: 800px;');
    resultsDiv.setAttribute('style', 'width: 700px; height: 150px; background-color: #A6D3A0; display: flex; justify-content: space-around; align-items: center; border-radius: 15px 15px 0px 0px;');
    playerScoreDiv.setAttribute('style', 'width: 300px; height: 100px; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 3px solid #FFFFFF; border-radius: 15px 0px 0px 0px;')
    computerScoreDiv.setAttribute('style', 'width: 300px; height: 100px; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 3px solid #FFFFFF; border-radius: 0px 15px 0px 0px;')
    displayDiv.setAttribute('style', 'text-align: center;')

    gameTitle.setAttribute('style', 'font-family: sans-serif; color: #FFFFFF;');
    roundLabel.setAttribute('style', 'font-family: sans-serif; color: #FFFFFF');
    roundWinnerLabel.setAttribute('style', 'font-family: sans-serif; color: #FFFFFF');
    playerScoreLabel.setAttribute('style', 'margin: 0; font-family: sans-serif;');
    computerScoreLabel.setAttribute('style', 'margin: 0; font-family: sans-serif;');
    currentPlayerScore.setAttribute('style', 'margin: 0; font-family: sans-serif;');
    currentComputerScore.setAttribute('style', 'margin: 0; font-family: sans-serif;');

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
        round++;
        result = playRound(userChoice, getComputerChoice());
        if (!result.includes("Tie")) {
            result.includes("Win") ? playerScore++ : computerScore++;
        }
        updateUI();
        if (round === 5) {
            disableButtons();
            checkWinner();
        }
    }

    function updateUI() {
        roundLabel.textContent = `Round: ${round}`;
        roundWinnerLabel.textContent = result;
        currentPlayerScore.textContent = playerScore;
        currentComputerScore.textContent = computerScore;
    }

    function disableButtons() {
        buttonsList.forEach((choice) => {
            document.querySelector(`button[data-choice="${choice}"]`).disabled = true;
        });
    }

    function enableButtons() {
        buttonsList.forEach((choice) => {
            document.querySelector(`button[data-choice="${choice}"]`).disabled = false;
        });
    }

    function checkWinner() {
        if (playerScore > computerScore) {
            roundWinnerLabel.textContent = "PLAYER WINS!";
            playerScoreDiv.style['background-color'] = '#ABC8C7';
        } else if (playerScore < computerScore) {
            roundWinnerLabel.textContent = "COMPUTER WINS!";
            computerScoreDiv.style['background-color'] = '#ABC8C7';
        } else {
            roundWinnerLabel.textContent = "IT'S A TIE!";
        }
    }

}

playGame();