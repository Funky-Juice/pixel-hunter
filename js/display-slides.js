import intro from './template-modules/intro';
import greeting from './template-modules/greeting';
import rulesElement from './template-modules/rules';
import gameOneElement from './template-modules/game-1';
import gameTwoElement from './template-modules/game-2';
import gameThreeElement from './template-modules/game-3';
import stats from './template-modules/stats';
import {questions} from './game-data';

let mainElement = document.getElementById('main');

let slides = [
  intro,
  greeting,
  rulesElement,
  gameOneElement(questions[1]),
  gameTwoElement(questions[0]),
  gameThreeElement(questions[2]),
  stats
];

let slideDisplay = (index) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(slides[index]);
};

export default slideDisplay;
