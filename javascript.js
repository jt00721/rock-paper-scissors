function computerPlay(){
    let randomPlay = Math.floor(Math.random() * 3) + 1;
    if(randomPlay == 1){
        return 'Rock'
    } else if(randomPlay == 2){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    let playerOption = playerSelection.toLowerCase();
    let computerOption = computerSelection.toLowerCase();
    if(playerOption == computerOption){
        return 'Draw!'
    } else if(playerOption == 'rock' && computerOption == 'paper'){
        return 'You Lose! Paper beats Rock';
    } else if(playerOption == 'paper' && computerOption == 'scissors'){
        return 'You Lose! Scissors beats Paper';
    } else if(playerOption == 'scissors' && computerOption == 'rock'){
        return 'You Lose! Scissors beats Paper';
    } else {
        return 'You Win!';
    }
}
  
function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt('Rock, Paper or Scissors?');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log('Result: ' + result);
        if(result == 'You Win!'){
            playerScore = playerScore + 1;
            console.log('Player Score for round ' + i +': ' + playerScore);
            console.log('Computer Score for round ' + i +': ' + computerScore);
        } else if(result == 'Draw!'){
            console.log('Player Score for round ' + i +': ' + playerScore);
            console.log('Computer Score for round ' + i +': ' + computerScore);
        } else {
            computerScore = computerScore + 1;
            console.log('Player Score for round ' + i +': ' + playerScore);
            console.log('Computer Score for round ' + i +': ' + computerScore);
        }

     }

     console.log('GAME FINISHED')
     console.log('Player Score: ' + playerScore);
     console.log('Computer Score: ' + computerScore);
     if(playerScore > computerScore){
         console.log('Player Wins!');
     } else if(computerScore > playerScore){
        console.log('Computer Wins!');
     } else {
         console.log('Draw!')
     }
}

game();