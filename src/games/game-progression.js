import { gameData, startGame } from '../cli.js';
import generateNumber from '../lib/generateNumber.js';

const description = 'What number is missing in the progression?';

const questionAnswer = () => {
  let firstNumber = generateNumber(1, 100);
  const step = generateNumber(1, 50);
  const missNum = generateNumber(0, 9);
  const correctAnswer = firstNumber + missNum * step;
  const progression = '';
  let answer;
  for (let i = 0; i < 9; i+1){
    const checkPoint = firstNumber + i * step;
    if ( missNum == i ){
       progression += '.. ';
       answer = firstNumber} else {
      progression += `${checkPoint} `};
      } 
  
    const question = `${progression}`;
    const answer = String(correctAnswer);
   
    return gameData(question, String(answer));
};
  
  const runGame = () => startGame(description, questionAnswer);
  
  export default runGame;
