import { compareNumbers, clearInput, displayWin, displayLose, displayReset, displayVictories, displayDefeats, evaluateDecrement, displayGuessesRemaining } from './util.js';

const subButton = document.querySelector('#sub-btn');
const resetButton = document.querySelector('#reset-btn');
const userGuess = document.querySelector('#user-guess');

let correctAnswer = randomNumber();
let numOfGuesses = 4;
let totalVictories = 0;
let totalDefeats = 0;

subButton.addEventListener('click', () => {
    
    let newGuess = Number(userGuess.value);
    let correctHighOrLow = compareNumbers(newGuess, correctAnswer); //evaluate if guess is correct, high or low

    if (correctHighOrLow === 0) { //do this if guess is correct
        subButton.disabled = true;
        displayWin();
        totalVictories++;
        displayVictories(totalVictories);
        clearInput();
        return;
    }

    numOfGuesses = evaluateDecrement(correctHighOrLow, numOfGuesses); //if guess is high or low, let user know which, decrement then return guesses remaining
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
    numOfGuesses = 4;
    displayGuessesRemaining(numOfGuesses);
    subButton.disabled = false;
    displayReset();
});

function randomNumber() {
    return Math.ceil(Math.random() * 20);
}