import {gameScores} from './display-screens';

const timeInterval = {
  fast: 20,
  slow: 10
};

const scores = {
  correct: 100,
  bonus: 50,
  penalty: 50
};

export const setScores = (timer, state) => {
  if (timer >= timeInterval.fast) {
    gameScores[state.level] = 'fast';
  } else if (timer <= timeInterval.slow) {
    gameScores[state.level] = 'slow';
  } else {
    gameScores[state.level] = 'correct';
  }
};
