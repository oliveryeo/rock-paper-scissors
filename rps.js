// Initiate the winning points for the game
const maxPoints = 5;

// Set up possible options to choose in the game
const gameOptions = ['rock', 'paper', 'scissors'];

// Initiate scores for the players
let playerScoreInt = 0;
let computerScoreInt = 0;

const scores = document.querySelector('div.scores'); // Select scores class.
const playerScore = document.querySelector('p.player-score'); // Select player score
const computerScore = document.querySelector('p.computer-score'); // Select computer score
const buttons = document.querySelectorAll('button'); // Select all buttons on the page
const results = document.querySelector('div.results'); // Select the results class

// Upon clicking the respective button trigger a round of play
buttons.forEach(triggerRound);


// ------------------------------------ Functions --------------------------------------
function getComputerChoice() {
    // Randomize the integer value from 0-3 which indexes the rock paper scissors options array, which depicts the computer's choice.
    // This is done by multiplying the random number (0-1) by 3, which gets us a random number from 0-3 instead. CODE: (Math.random() * 3)
    // Then we round the random number by the nearest LOWER integer. Example, 2.9 rounds to 2. CODE: (Math.floor())
    let computerInteger = Math.floor(Math.random() * 3);

    // Extract the computer's choice by indexing.
    let computerChoice = gameOptions[computerInteger];

    // Return the computer's choice.
    return computerChoice;

}

function playRound(playerSelection, computerSelection) {
    // Create logic to choose who wins the rock paper scissors game.
    // For each victory, add the points to the respective player.
    // A little bit ugly, but after every integer increment, check if max points and show the winner.
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "TIE! Both players chose Rock!";
        } else if (computerSelection === 'scissors') {
            playerScoreInt++;
            if ((playerScoreInt == maxPoints) || (computerScoreInt == maxPoints)) {
                showWinner();
            }
            return "PLAYER WIN! Rock beats Scissors!";
        } else if (computerSelection === 'paper') {
            computerScoreInt++;
            if ((playerScoreInt == maxPoints) || (computerScoreInt == maxPoints)) {
                showWinner();
            }
            return "COMPUTER WIN! Paper beats Rock!";
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScoreInt++;
            if ((playerScoreInt == maxPoints) || (computerScoreInt == maxPoints)) {
                showWinner();
            }
            return "COMPUTER WIN! Rock beats Scissors!";
        } else if (computerSelection === 'scissors') {
            return "TIE! Both players chose Scissors!";
        } else if (computerSelection === 'paper') {
            playerScoreInt++;
            if ((playerScoreInt == maxPoints) || (computerScoreInt == maxPoints)) {
                showWinner();
            }
            return "PLAYER WIN! Scissors beat Paper!";
        }
    }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScoreInt++;
            if ((playerScoreInt == maxPoints) || (computerScoreInt == maxPoints)) {
                showWinner();
            }
            return "PLAYER WIN! Paper beats Rock!";
        } else if (computerSelection === 'scissors') {
            return "COMPUTER WIN! Scissors beat Paper!";
        } else if (computerSelection === 'paper') {
            computerScoreInt++;
            if ((playerScoreInt == maxPoints) || (computerScoreInt == maxPoints)) {
                showWinner();
            }
            return "TIE! Both players chose Paper!";
        }
    }
}

// Assign the textContent to the playerSelection case-insensitive, assign computerChoice, play a round.
// Created a function name for this one-time-use function for the purpose of removeEventListener.
function triggerRound(button) {
    button.addEventListener('click', function playGame() {
        // Show winner if maxPoints reached. Disable the game.
        if ((playerScoreInt == maxPoints) || (computerScoreInt == maxPoints)) {
            // Remove the click event from ALL buttons once maxPoints is reached
            buttons.forEach((button) => {
                button.removeEventListener('click', playGame);
            })
        } else {
            // Assign player selection → create p element → append to div results.
            const playerSelection = button.textContent.toLowerCase();
            const playerChoice = document.createElement('p');
            playerChoice.textContent = `The player's choice is: ${playerSelection.toUpperCase()}`;
            results.appendChild(playerChoice);

            // Assign computer's choice and append to div results.
            const computerSelection = getComputerChoice();
            const computerChoice = document.createElement('p');
            computerChoice.textContent = `The computer's choice is: ${computerSelection.toUpperCase()}`;;
            results.appendChild(computerChoice);
            
            // Get the round outcome, create a new p element, append to div text.
            outcomeText = playRound(playerSelection, computerSelection);
            const outcome = document.createElement('p');
            outcome.textContent = outcomeText;
            results.appendChild(outcome);

            // Update the score board
            playerScore.textContent = `Player's Score: ${playerScoreInt}`;
            computerScore.textContent = `Computer's Score: ${computerScoreInt}`;
        }
    })
}

// Show the winner after all rounds have been played
function showWinner() {
    let winnerText = '';
    if (playerScoreInt > computerScoreInt){
        winnerText = 'Congratulations! The PLAYER is the winner! Game is now disabled.';
    } else {
        winnerText = 'Oh no... the COMPUTER is the winner! Game is now disabled.';
    }

    const winner = document.createElement('p');
    winner.classList.add('winner');
    winner.textContent = winnerText;
    scores.appendChild(winner);
}

// Function that simulate a game of a specified number of rounds.
// function playGame() {
//     // Loop through the specified number of rounds.
//     for (let i=0; i<roundsToPlay; i++) {
//         // Declare player selection variable
//         let playerSelection;

//         // do-while loop to capture player's selection and rectify any invalid inputs.
//         do {
//             // Get player's selection and make it case insensitive.
//             playerSelection = prompt('What is your choice? (rock, paper or scissors only)', 'rock');
//             playerSelection = playerSelection.toLowerCase();
//             // Ensure proper input by the player. If the playerSelection is NOT IN the gameOptions, initiate the while loop.
//         } while (!gameOptions.includes(playerSelection))

//         // Print out player's choice.
//         console.log(`The player's choice is ${playerSelection}`)
//         // Get computer's selection and also print out their choice (part of the function)
//         const computerSelection = getComputerChoice();
//         // Simulate a round.
//         console.log(playRound(playerSelection, computerSelection));
//         // Report the scores for each player.
//         console.log(`The player's score is ${playerScore}`);
//         console.log(`The computer's score is ${computerScore}`);
//         // To add an empty line to see things clearer in console.
//         console.log('');
//     }
//     // At the end of the rounds simulation, report the winner.
//     if (playerScore > computerScore){
//         console.log('Congratulations! The player is the winner!');
//     } else {
//         console.log('Oh no... the computer is the winner!');
//     }
// }