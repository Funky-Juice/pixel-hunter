import createElementDOM from '../create-dom-element';
import slideDisplay from '../display-slides';
import {questions, gameStats, gameParams} from '../game-data';

const header = `\
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${gameParams.timer}</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>`;

const form = `\
  <form class="game__content game__content--wide">
    ${questions[0].content.map((img, i) => `\
      <div class="game__option">
        <img src="${img}" alt="Option ${i + 1}" width="705" height="455">
        <label class="game__answer game__answer--photo">
          <input name="question${i + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${i + 1}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    `).join('')}
  </form>`;

const stats = `\
  <div class="stats">
    <ul class="stats">
    ${gameStats.map((val) => `\
      <li class="stats__result stats__result--${val}"></li>
    `).join('')}
    </ul>
  </div>`;

const gameTwoTemplate = `\
  ${header}
  <div class="game">
    <p class="game__task">${questions[0].description}</p>
    ${form}
    ${stats}
  </div>`;

const gameTwoElement = createElementDOM(gameTwoTemplate);

const gameTwoAnswer = gameTwoElement.querySelectorAll('.game__answer');

for (const answer of gameTwoAnswer) {
  answer.onclick = () => {
    slideDisplay(5);
  };
}

export default gameTwoElement;
