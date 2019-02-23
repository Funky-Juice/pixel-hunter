import {points, speed} from './data/game-params';


export const initScores = (questions) => {
  return Array.from({length: questions.length}, () => 'unknown');
};

export const setLives = (game, lives) => {
  return Object.assign({}, game, {
    lives: lives
  });
};

export const setCurrentLevel = (game, level) => {
  return Object.assign({}, game, {
    level: level
  });
};

export const hasLevel = (questions, num) => {
  return typeof questions[num] !== 'undefined';
};

export const getLevel = (questions, num) => {
  return questions[num];
};

export const setTime = (game, time) => {
  return Object.assign({}, game, {time: time});
};

export const setScores = (game, scores, isWrong) => {
  let scoresResult = scores.slice(0);

  if (isWrong) {
    scoresResult[game.level] = 'wrong';
    return scoresResult;
  }

  switch (true) {
    case game.time < speed.timeOver:
      scoresResult[game.level] = 'wrong';
      break;
    case game.time >= speed.fast:
      scoresResult[game.level] = 'fast';
      break;
    case game.time <= speed.slow:
      scoresResult[game.level] = 'slow';
      break;
    default:
      scoresResult[game.level] = 'correct';
  }
  return scoresResult;
};

export const getResult = (game, scores) => {
  if (game.lives < 0) {
    return {};
  } else {
    const correctAnswers = scores.filter((it) => (it !== 'wrong' && it !== 'unknown')).length;
    const fastAnswers = scores.filter((it) => it === 'fast').length;
    const slowAnswers = scores.filter((it) => it === 'slow').length;

    return {
      fastAnswers,
      slowAnswers,
      lives: game.lives,
      scores: correctAnswers * points.correct,
      speedBonus: fastAnswers * points.bonus,
      livesBonus: game.lives * points.bonus,
      penalty: slowAnswers * -points.penalty,
      total: (correctAnswers * points.correct) + (fastAnswers * points.bonus) + (game.lives * points.bonus) + (slowAnswers * -points.penalty)
    };
  }
};
