export { compareNumbers };



function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return 0;
    return guess > correctNumber ? 1 : -1;
}
