import {initialData, setLives, setTimer} from './game-params';
import {gameLevels, gameStats} from './game-data';
import gameTypeOne from './template-modules/game-type-1';
import gameTypeTwo from './template-modules/game-type-2';
import gameTypeThree from './template-modules/game-type-3';
import stats from './template-modules/stats';

let userData = JSON.parse(JSON.stringify(initialData));

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
  if (userData.lives < 1) {
    stats(gameStats);
  }
  userData = setLives(userData, userData.lives - 1);
};

let gameDataValues = gameLevels.values();

export const getNextLevel = () => {
  let currentData = gameDataValues.next().value;
  return () => {
    if (!currentData) {
      stats(gameStats);
      return;
    }
    switch (currentData.type) {
      case 'gameTypeOne':
        gameTypeOne(currentData, livesCount);
        break;
      case 'gameTypeTwo':
        gameTypeTwo(currentData, livesCount);
        break;
      case 'gameTypeThree':
        gameTypeThree(currentData, livesCount);
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
