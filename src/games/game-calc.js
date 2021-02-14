import { gameData, startGame } from '../cli.js';
import generateNumber from '../lib/generateNumber.js';

const description = 'What is the result of the expression?';

const questionAnswer = () => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const operation = generateNumber(1, 3);
  if (operation === 3) {
    const question = `${firstNumber} + ${secondNumber}`;
    const answer = firstNumber + secondNumber;
    return gameData(question, String(answer));
  } else if (operation === 2) {
    const question = `${firstNumber} - ${secondNumber}`;
    const answer = firstNumber - secondNumber;
    return gameData(question, String(answer));
  }
  const question = `${firstNumber} * ${secondNumber}`;
  const answer = firstNumber * secondNumber;
  return gameData(question, String(answer));
};
  
  const runGame = () => startGame(description, questionAnswer);
  
  export default runGame;