import './example.test.js';
import { compareNumbers } from '../util.js';

const test = QUnit.test;

test('guess > correct answer', (expect) => {
    expect.equal(compareNumbers(10, 5), 1, '10 > 5, return 1'); //compareNumbers(guess, correctNumber)
});

test('guess === correct answer', (expect) => {
    expect.equal(compareNumbers(10, 10), 0, '10 = 10, return 0');
});

test('guess <correct answer', (expect) => {
    expect.equal(compareNumbers(10, 15), -1, '10 < 15, return -1');
});
