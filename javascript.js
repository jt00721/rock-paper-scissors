function computerPlay(){
    let randomPlay = Math.floor(Math.random() * 3) + 1;
    console.log(randomPlay);
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
    console.log('Player ' + playerOption)
    let computerOption = computerSelection.toLowerCase();
    console.log('Computer ' + computerOption)
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
  
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));