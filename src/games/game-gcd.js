import { gameData, startGame } from '../cli.js';
import generateNumber from '../lib/generateNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (x, y) => {
  if (y === 0) {
    return Math.abs(x);
  }
  return greatestCommonDivisor(y, x % y);
};

const questionAnswer = () => {
  const firstNumber = generateNumber(1, 20);
  const secondNumber = generateNumber(1, 20);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = greatestCommonDivisor(firstNumber, secondNumber);
  return gameData(question, String(answer));
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;
