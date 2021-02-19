import { gameData, startGame } from '../cli.js';
import generateNumber from '../lib/generateNumber.js';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const questionAnswer = () => {
  const question = generateNumber(1, 100);
  const answer = {
  for(let i = 2; i < question; i++)
    if(question % i === 0) return 'no';
  return 'yes';
}
  return gameData(question, answer);
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;

