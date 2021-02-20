import { gameData, startGame } from '../cli.js';
import generateNumber from '../lib/generateNumber.js';

const description = 'Answer "yes" if number prime otherwise answer "no".';
const question = generateNumber(1, 100);
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return 'no';
  return 'yes';
}
const questionAnswer = isPrime(question); 
  return gameData(question, answer);
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;

