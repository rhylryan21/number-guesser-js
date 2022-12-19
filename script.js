let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// function to return integer between 0 and 9
function generateTarget() {
    return Math.floor(Math.random()*9)
}

// function to compare guesses
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
}

// function to update scores
function updateScore(winner) {
    if (winner === 'human') {
        humanScore ++
    }
    else if (winner==='computer'){
        computerScore ++
    }
}

// function to advance the round
const advanceRound = () => {
    currentRoundNumber++
}