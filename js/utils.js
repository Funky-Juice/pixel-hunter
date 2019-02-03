import {gameScores, gameState, getNextLevel} from './display-screens';
import {resetTimer} from './timer';
import {setScores} from './scoring';

export const changeLive = () => {
  gameState.lives--;
  gameScores[gameState.level] = 'wrong';
};

export const setCorrectAnswer = (timer) => {
  setScores(timer.textContent, gameState);
  resetTimer();
  getNextLevel();
  gameState.level++;
};

export const setWrongAnswer = () => {
  changeLive();
  resetTimer();
  getNextLevel();
  gameState.level++;
};
