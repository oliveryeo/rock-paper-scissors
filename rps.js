
getComputerChoice();

function getComputerChoice() {
    // Create options for computer to choose from using array.
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    
    // Randomize the integer value from 0-3 which indexes the array, which depicts the computer's choice.
    // This is done by multiplying the random number (0-1) by 3, which gets us a random number from 0-3 instead. CODE: (Math.random() * 3)
    // Then we round the random number by the nearest LOWER integer. Example, 2.9 rounds to 2. CODE: (Math.floor())
    let computerInteger = Math.floor(Math.random() * 3);

    // Extract the computer's choice by indexing.
    let computerChoice = computerOptions[computerInteger];
    console.log(computerChoice);

}

