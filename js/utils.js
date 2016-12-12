import {gameLevels, gameStats} from './game-data';
import gameTypeOne from './template-modules/game-type-1';
import gameTypeTwo from './template-modules/game-type-2';
import gameTypeThree from './template-modules/game-type-3';
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
      case 'gameTypeOne':
        gameTypeOne(currentQues);
        break;
      case 'gameTypeTwo':
        gameTypeTwo(currentQues);
        break;
      case 'gameTypeThree':
        gameTypeThree(currentQues);
        break;
      default:
        return;
    }
  };
};

export {createElementDOM, renderPage, questionHandler};
