import {gameScores, gameState} from './display-screens';

export const changeLive = () => {
  gameState.lives--;
  gameScores[gameState.level] = 'wrong';
};
