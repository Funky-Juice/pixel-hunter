import game from './template-modules/game';
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

  return renderScreen(game(question, gameState, gameScores));
};

export {initGame, renderScreen, getNextLevel, gameState, gameScores};
