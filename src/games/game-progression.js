import { gameData, startGame } from '../cli.js';
import generateNumber from '../lib/generateNumber.js';

const description = 'What number is missing in the progression?';

const questionAnswer = () => {
  const firstNumber = generateNumber(1, 20);
  const step = generateNumber(1, 10);
  const missNum = generateNumber(2, 9);
  const correctAnswer = firstNumber + missNum * step;
  let progression = '';

  for (let i = 1; i < 10; i += 1) {
    const checkPoint = firstNumber + i * step;
    if (missNum === i) {
      progression += '.. ';
    } else {
      progression += `${checkPoint} `;
    }
  }

  const question = `${progression}`;
  const answer = String(correctAnswer);

  return gameData(question, String(answer));
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;
