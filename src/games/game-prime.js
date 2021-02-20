import { gameData, startGame } from '../cli.js';
import generateNumber from '../lib/generateNumber.js';

const description = 'Answer "yes" if number prime otherwise answer "no".';
const question = generateNumber(1, 100);
function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return true;
};

const questionAnswer = () => {
  const question = generateNumber(10, 100);
  const answer = isPrime(question);
  return gameData(question, answer ? 'yes' : 'no');
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;

