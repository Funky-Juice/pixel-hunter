import {initialData, setLives, setTimer} from './game-params';
import {gameLevels, gameStats} from './game-data';
import gameTypeOne from './template-modules/game-type-1';
import gameTypeTwo from './template-modules/game-type-2';
import gameTypeThree from './template-modules/game-type-3';
import stats from './template-modules/stats';

// export let userData = Object.assign({}, initialData);
export let userData = JSON.parse(JSON.stringify(initialData));

const createElementDOM = (templateContent) => {
  let container = document.createElement('div');
  container.innerHTML = templateContent;
  return container;
};

let renderPage = (element) => {
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
  }, 1000 );
};

export const changeLive = () => {
  if (userData.lives < 1) {
    stats(gameStats);
  }

  userData = setLives(userData, userData.lives - 1);
};

let gameDataValues = gameLevels.values();

const getNextLevel = () => {
  let currentData = gameDataValues.next().value;
  return () => {
    if (!currentData) {
      stats(gameStats);
      return;
    }
    switch (currentData.type) {
      case 'gameTypeOne':
        gameTypeOne(currentData);
        break;
      case 'gameTypeTwo':
        gameTypeTwo(currentData);
        break;
      case 'gameTypeThree':
        gameTypeThree(currentData);
        break;
      default:
        return;
    }
  };
};

export {createElementDOM, renderPage, getNextLevel};
