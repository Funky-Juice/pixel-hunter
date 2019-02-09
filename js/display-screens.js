import emitter from './emitter';
import {setCorrectAnswer, setWrongAnswer} from './utils';
import {questions, INIT_STATE, initScores} from './game-data';
import stats from './template-modules/stats';
import LevelView from './view/level-view';
import HeaderView from './view/header-view';
import {timer} from './timer';

emitter.on('answer', (answer) => {
  if (answer) {
    setCorrectAnswer(timer);
  } else {
    setWrongAnswer();
  }
});

const mainElement = document.getElementById('main');

let questionsData = questions.values();
let gameState = Object.assign({}, INIT_STATE);
let gameScores = initScores.slice(0);

const initGame = () => {
  questionsData = questions.values();
  gameState = Object.assign({}, INIT_STATE);
  gameScores = initScores.slice(0);
};

const renderScreen = (...elem) => {
  mainElement.innerHTML = '';
  // юзаем lastChild, т.к. firstChild возвращает пустую строку из-за отступов в шаблоне
  elem.forEach((it) => mainElement.appendChild(it.lastChild));
};

const getNextLevel = () => {

  let question = questionsData.next().value;
  if (!question || gameState.lives < 0) {
    renderScreen(stats(gameScores));
    return;
  }

  renderScreen(new HeaderView(gameState).element, new LevelView(question, gameState, gameScores).element);
  return;
};

export {initGame, renderScreen, getNextLevel, gameState, gameScores};
