import {getNextLevel} from './display-screens';
import {gameScores} from './display-screens';

export const setTimer = (state, elem) => {
  let timer = state.timer;
  elem.innerHTML = timer;

  const timerId = setInterval(() => {
    if (timer < 1) {
      gameScores[state.level] = 'wrong';
      clearInterval(timerId);
      getNextLevel();
      state.level++;
      return;
    }
    --timer;
    elem.innerHTML = timer;
  }, 1000);
  return timerId;
};
