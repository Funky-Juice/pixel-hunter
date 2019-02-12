import {gameScores, gameState} from './display-screens';

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

export const resultScores = () => {
  if (gameState.lives < 0) {
    return {};
  } else {
    const correctAnswers = gameScores.filter((it) => (it !== 'wrong' && it !== 'unknown')).length;
    const fastAnswers = gameScores.filter((it) => it === 'fast').length;
    const slowAnswers = gameScores.filter((it) => it === 'slow').length;

    return {
      fastAnswers,
      slowAnswers,
      lives: gameState.lives,
      scores: correctAnswers * scores.correct,
      speedBonus: fastAnswers * scores.bonus,
      livesBonus: gameState.lives * scores.bonus,
      penalty: slowAnswers * -scores.penalty,
      total: (correctAnswers * scores.correct) + (fastAnswers * scores.bonus) + (gameState.lives * scores.bonus) + (slowAnswers * -scores.penalty)
    };
  }
};
