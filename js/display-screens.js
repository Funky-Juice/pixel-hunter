import gameOneElement from './template-modules/game-1';
import gameTwoElement from './template-modules/game-2';
import gameThreeElement from './template-modules/game-3';
import stats from './template-modules/stats';
import {questions, INIT_STATE, initScores} from './game-data';

let gameState = Object.assign({}, INIT_STATE);
let gameScores = initScores.slice(0);

const mainElement = document.getElementById('main');

const questionsData = questions.values();

const getNextLevel = () => {
  let question = questionsData.next().value;
  if (!question || gameState.lives < 0) {
    return renderScreen(stats);
  }

  switch (question.type) {
    case 'single': renderScreen(gameTwoElement(question, gameState, gameScores));
      break;
    case 'double': renderScreen(gameOneElement(question, gameState, gameScores));
      break;
    case 'triple': renderScreen(gameThreeElement(question, gameState, gameScores));
      break;
  }
  return true;
};

const renderScreen = (elem) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(elem);
};

export {renderScreen, getNextLevel, gameState, gameScores};
