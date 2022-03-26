//Create a function that will return either rock, paper or scissors
function computerPlay() {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2: 
            return "scissors";
    }
}
//console.log(computerPlay());

//create a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "it's a tie";
    }
      else if(playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock";
    }  else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! rock beats scissors";
    } else return "choose either rock, paper or scissors";
}

//const playerSelection = "Rock";
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));*/

//Create a function called game
function game() {
    playerSelection = window.prompt("enter rock, paper or scissors");
    // call the playRound function to play a 5 round game that keeps score and reports
    //winner or loser at the end
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}


console.log(game());
