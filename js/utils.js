import {gameLevels, gameStats} from './game-data';
import gameScreenOne from './template-modules/game-screen-1';
import gameScreenTwo from './template-modules/game-screen-2';
import gameScreenThree from './template-modules/game-screen-3';
import stats from './template-modules/stats';


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

let ques = gameLevels.values();

const questionHandler = () => {
  let currentQues = ques.next().value;
  return () => {
    if (!currentQues) {
      stats(gameStats);
      return;
    }
    switch (currentQues.type) {
      case 'gameScreenOne':
        gameScreenOne(currentQues);
        break;
      case 'gameScreenTwo':
        gameScreenTwo(currentQues);
        break;
      case 'gameScreenThree':
        gameScreenThree(currentQues);
        break;
      default:
        return;
    }
  };
};

export {createElementDOM, renderPage, questionHandler};
