import {initialData, setLives, setTimer, setStats} from './game-params';
import gameLevels from './game-data';
import gameTypeOne from './template-modules/game-type-1';
import gameTypeTwo from './template-modules/game-type-2';
import gameTypeThree from './template-modules/game-type-3';
import stats from './template-modules/stats';

let userData = JSON.parse(JSON.stringify(initialData));

export const resetUserData = () => {
  userData = JSON.parse(JSON.stringify(initialData));
};

export const createElementDOM = (templateContent) => {
  let container = document.createElement('div');
  container.innerHTML = templateContent;
  return container;
};

export let renderPage = (element) => {
  let mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  return mainElement.appendChild(element);
};

export let timerId;

export const startTimer = (element) => {
  element.innerHTML = initialData.timer;
  userData.timer = initialData.timer;
  timerId = setInterval(() => {
    userData = setTimer(userData, userData.timer - 1);
    element.innerHTML = userData.timer;
    if (userData.timer <= 0) {
      clearInterval(timerId);
      changeLive();
      getNextLevel()();
    }
  }, 1000);
};

export const changeLive = () => {
  userData = setStats(userData, 'wrong', gameScreen - 1);

  if (userData.lives < 1) {
    stats(userData);
  }
  userData = setLives(userData, userData.lives - 1);
};

export const getStats = () => {
  if (userData.timer > 20) {
    userData = setStats(userData, 'fast', gameScreen - 1);
  } else if (userData.timer < 10) {
    userData = setStats(userData, 'slow', gameScreen - 1);
  } else {
    userData = setStats(userData, 'correct', gameScreen - 1);
  }
};

let gameDataValues = gameLevels.values();

export const resetGameDataValues = () => {
  gameDataValues = gameLevels.values();
};

let gameScreen = 0;

export const getNextLevel = () => {
  let currentData = gameDataValues.next().value;
  return () => {
    if (!currentData) {
      stats(userData);
      return;
    }
    switch (currentData.type) {
      case 'gameTypeOne':
        gameTypeOne(currentData, userData, livesCount);
        gameScreen++;
        break;
      case 'gameTypeTwo':
        gameTypeTwo(currentData, userData, livesCount);
        gameScreen++;
        break;
      case 'gameTypeThree':
        gameTypeThree(currentData, userData, livesCount);
        gameScreen++;
        break;
      default:
        return;
    }
  };
};

export const livesCount = () => {
  const emptyHeartIcon = 'heart__empty.svg';
  const fullHeartIcon = 'heart__full.svg';
  const maxLivesValue = 3;

  let currentLivesValue = userData.lives;

  let hearts = '';

  for (let i = maxLivesValue; i > 0; i--) {
    hearts += `<img src="img/${ currentLivesValue < i ? emptyHeartIcon : fullHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
  }

  return hearts;
};
