export { compareNumbers, clearInput, displayWin, displayLose, displayReset, displayVictories, displayDefeats, evaluateDecrement, displayGuessesRemaining };

const outcomeEl = document.querySelector('#outcome');
const evaluationEl = document.querySelector('#display-evaluation');
const guessesRemainingEl = document.querySelector('#guesses-remaining');
const victoriesEl = document.querySelector('#victories');
const defeatsEl = document.querySelector('#defeats');
const inputEl = document.querySelector('#user-guess');

function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return 0;
    return guess > correctNumber ? 1 : -1;
}

function clearInput() {
    inputEl.value = '';
}
function displayWin() {
    outcomeEl.textContent = 'Congratulations! You guessed correctly!';
    outcomeEl.classList.remove('hidden');
}

function displayLose() {
    outcomeEl.textContent = 'Game Over!';
    outcomeEl.classList.remove('hidden');
}

function displayReset() {
    outcomeEl.classList.add('hidden');
}

function displayVictories(victoryCount) {
    victoriesEl.textContent = victoryCount;
    // console.log(typeof victoryCount);
}

function displayDefeats(defeatCount) {
    defeatsEl.textContent = defeatCount;
}

function evaluateDecrement(evalNum, counter) {
    let highOrLow;
    evalNum === 1 ? highOrLow = 'high' : highOrLow = 'low';
    evaluationEl.textContent = `Your guess is too ${highOrLow}!`;
    counter--;
    return counter;
}

function displayGuessesRemaining(count) {
    guessesRemainingEl.textContent = count;
}