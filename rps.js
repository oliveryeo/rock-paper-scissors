
const roundsToPlay = 5;
let playerScore = 0;
let computerScore = 0;

game();

function getComputerChoice() {
    // Create options for computer to choose from using array.
    let computerOptions = ['rock', 'paper', 'scissors'];
    
    // Randomize the integer value from 0-3 which indexes the array, which depicts the computer's choice.
    // This is done by multiplying the random number (0-1) by 3, which gets us a random number from 0-3 instead. CODE: (Math.random() * 3)
    // Then we round the random number by the nearest LOWER integer. Example, 2.9 rounds to 2. CODE: (Math.floor())
    let computerInteger = Math.floor(Math.random() * 3);

    // Extract the computer's choice by indexing.
    let computerChoice = computerOptions[computerInteger];
    console.log(`The computer's choice is: ${computerChoice}`);

    // Return the computer's choice.
    return computerChoice;

}

function playRound(playerSelection, computerSelection) {
    // Make playerSelection case insensitive by converting to lower case.
    playerSelection = playerSelection.toLowerCase();

    // Create logic to choose who wins the rock paper scissors game.
    // For each victory, add the points to the respective player.
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "It's a tie! Both players chose Rock!";
        } else if (computerSelection === 'scissors') {
            playerScore++;
            return "You win! Rock beats Scissors!";
        } else if (computerSelection === 'paper') {
            computerScore++;
            return "You lose... Paper beats Rock!";
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return "You lose... Rock beats Scissors!";
        } else if (computerSelection === 'scissors') {
            return "It's a tie! Both players chose Scissors!";
        } else if (computerSelection === 'paper') {
            playerScore++;
            return "You win! Scissors beat Paper!";
        }
    }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return "You win! Paper beats Rock!";
        } else if (computerSelection === 'scissors') {
            return "You lose... Scissors beat Paper!";
        } else if (computerSelection === 'paper') {
            computerScore++;
            return "It's a tie! Both players chose Paper!";
        }
    }
}

// Function that simulate a game of a specified number of rounds.
function game() {
    // Loop through the specified number of rounds.
    for(let i=0; i<roundsToPlay; i++){
        // Get player's selection.
        const playerSelection = 'rock';
        console.log(`The player's choice is ${playerSelection}`)
        // Get computer's selection.
        const computerSelection = getComputerChoice();
        // Simulate a round.
        console.log(playRound(playerSelection, computerSelection));
        // Report the scores for each player.
        console.log(`The player's score is ${playerScore}`);
        console.log(`The computer's score is ${computerScore}`);
        // To add an empty line to see things clearer in console.
        console.log('');
    }
    // At the end of the rounds simulation, report the winner.
    if (playerScore > computerScore){
        console.log('Congratulations! The player is the winner!');
    } else {
        console.log('Oh no... the computer is the winner!');
    }
}