import { gameData, startGame } from '../cli.js';
import generateNumber from '../lib/generateNumber.js';

const description = 'What number is missing in the progression?';

const questionAnswer = () => {
  let firstNumber = generateNumber(1, 100);
  const step = generateNumber(1, 50);
  const missNum = generateNumber(0, 9);
  const progression = [];
  let answer;
  for (let i = 0; i < 9; i++){
    if ( missNum == i ){
       progression.push("..");
       answer = firstNumber} else {
      progression.push(firstNumber)};
      firstNumber = firstNumber + step} 
  
    const question = `${progression}`;
    const answer = progression;
   
    return gameData(question, String(answer));
};
  
  const runGame = () => startGame(description, questionAnswer);
  
  export default runGame;
