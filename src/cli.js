#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const startGame = () => {
console.log("Welcome to the Brain Games!");
const username = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${username}!\n`);
};
