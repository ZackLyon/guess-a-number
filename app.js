// import functions and grab DOM elements
import { compareNumbers } from "./util.js";
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const subButton = document.querySelector('#sub-btn');
const resetButton = document.querySelector('#reset-btn');
const userGuess = document.querySelector('#user-guess');

let correctAnswer = randomNumber();
console.log(correctAnswer);

subButton.addEventListener('click', () => {
    let newGuess = Number(userGuess.value);
    console.log(compareNumbers(newGuess, correctAnswer));

});

resetButton.addEventListener('click', () => {
    correctAnswer = randomNumber();
});

function randomNumber() {
    return Math.ceil(Math.random() * 20);
}