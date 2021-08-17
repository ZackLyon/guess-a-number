// import functions and grab DOM elements
import { compareNumbers, clearInput, displayWin, displayLose, displayReset, displayVictories, displayDefeats, evaluateDecrement, displayGuessesRemaining } from './util.js';
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const subButton = document.querySelector('#sub-btn');
const resetButton = document.querySelector('#reset-btn');
const userGuess = document.querySelector('#user-guess');

let correctAnswer = randomNumber();
let numOfGuesses = 4;
let totalVictories = 0;
let totalDefeats = 0;

console.log(correctAnswer);

subButton.addEventListener('click', () => {
    
    let newGuess = Number(userGuess.value);
    let correctHighOrLow = compareNumbers(newGuess, correctAnswer); //will guess be correct, high or low
    if (correctHighOrLow === 0) { //guess is correct
        subButton.disabled = true;
        displayWin();
        totalVictories++;
        displayVictories(totalVictories);
        clearInput();
        return;
    }

    numOfGuesses = evaluateDecrement(correctHighOrLow, numOfGuesses); //guess is high or low, decrement guesses
    displayGuessesRemaining(numOfGuesses);

    if (numOfGuesses <= 0) { //out of guesses
        subButton.disabled = true;
        displayLose();
        totalDefeats++;
        displayDefeats(totalDefeats);
    }
    clearInput();
});

resetButton.addEventListener('click', () => {
    clearInput();
    correctAnswer = randomNumber();
    console.log(correctAnswer);
    numOfGuesses = 4;
    displayGuessesRemaining(numOfGuesses);
    subButton.disabled = false;
    displayReset();
});

function randomNumber() {
    return Math.ceil(Math.random() * 20);
}