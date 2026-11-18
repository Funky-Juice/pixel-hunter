import Application from './application';
import questions from './data/questions';

const storageKey = (username) => `pixel-hunter:${username}`;

const readStats = (username) => {
  const raw = window.localStorage.getItem(storageKey(username));

  if (!raw) {
    return [];
  }

  const data = JSON.parse(raw);

  if (!Array.isArray(data)) {
    throw new Error('Некорректная статистика в localStorage');
  }

  return data;
};

export const getQuestions = () => {
  Application.data = questions;
  Application.showIntro();
};

export const sendGameResult = (username, scores, result) => {
  try {
    const history = readStats(username);

    history.push({
      stats: scores,
      lives: result.lives,
      date: Date.now()
    });
    window.localStorage.setItem(storageKey(username), JSON.stringify(history));

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getGameStats = (username) => {
  try {
    return Promise.resolve(readStats(username));
  } catch (err) {
    return Promise.reject(err);
  }
};
