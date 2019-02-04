import gameOneElement from './template-modules/game-1';
import gameTwoElement from './template-modules/game-2';
import gameThreeElement from './template-modules/game-3';
import stats from './template-modules/stats';
import {questions, INIT_STATE, initScores} from './game-data';

const mainElement = document.getElementById('main');

let questionsData = questions.values();
let gameState = Object.assign({}, INIT_STATE);
let gameScores = initScores.slice(0);

const initGame = () => {
  questionsData = questions.values();
  gameState = Object.assign({}, INIT_STATE);
  gameScores = initScores.slice(0);
};

const renderScreen = (elem) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(elem);
};

const getNextLevel = () => {
  let question = questionsData.next().value;
  if (!question || gameState.lives < 0) {
    return renderScreen(stats(gameScores));
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

export {initGame, renderScreen, getNextLevel, gameState, gameScores};
