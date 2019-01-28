import gameOneElement from './template-modules/game-1';
import gameTwoElement from './template-modules/game-2';
import gameThreeElement from './template-modules/game-3';
import stats from './template-modules/stats';
import {questions} from './game-data';

const mainElement = document.getElementById('main');

const questionsData = questions.values();

const getNextLevel = () => {
  let question = questionsData.next().value;
  if (!question) {
    return renderScreen(stats);
  }

  switch (question.type) {
    case 'single': renderScreen(gameTwoElement(question));
      break;
    case 'double': renderScreen(gameOneElement(question));
      break;
    case 'triple': renderScreen(gameThreeElement(question));
      break;
  }
  return true;
};

const renderScreen = (elem) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(elem);
};

export {renderScreen, getNextLevel};
