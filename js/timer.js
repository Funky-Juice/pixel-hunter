import {gameState, getNextLevel} from './display-screens';
import {gameScores} from './display-screens';

let timerId = null;
export let timer = null;

export const setTimer = (state, elem) => {
  timer = state.timer;
  elem.innerHTML = timer;

  timerId = setInterval(() => {
    if (timer < 1) {
      gameState.lives--;
      gameScores[state.level] = 'wrong';
      resetTimer();
      getNextLevel();
      state.level++;
      return;
    }
    --timer;
    elem.innerHTML = timer;
  }, 1000);
};

export const resetTimer = () => {
  clearInterval(timerId);
};
