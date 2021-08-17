// import functions and grab DOM elements
import { compareNumbers, displayWin, displayLose, evaluateDecrement, displayGuessesRemaining } from "./util.js";
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
console.log(correctAnswer);

subButton.addEventListener('click', () => {
    let newGuess = Number(userGuess.value);
    let correctHighOrLow = compareNumbers(newGuess, correctAnswer); //will guess be correct, high or low
    if (correctHighOrLow === 0) { //guess is correct
        displayWin();
        subButton.disabled = true;
        return;
    }

    numOfGuesses = evaluateDecrement(correctHighOrLow, numOfGuesses); //guess is high or low, respond accordingly
    displayGuessesRemaining(numOfGuesses);

    if (numOfGuesses <= 0) { //out of guesses
        subButton.disabled = true;
        displayLose();
    }
});

numOfGuesses <= 0 ? subButton.disabled = true : subButton.disabled = false;

resetButton.addEventListener('click', () => {
    correctAnswer = randomNumber();
    console.log(correctAnswer);
    numOfGuesses = 4;
    displayGuessesRemaining(numOfGuesses);
    subButton.disabled = false;
});

function randomNumber() {
    return Math.ceil(Math.random() * 20);
}