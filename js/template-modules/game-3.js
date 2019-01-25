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
  <form class="game__content game__content--triple">
    ${questions[2].content.map((img, i) => `\
      <div class="game__option">
        <img src="${img}" alt="Option ${i + 1}" width="304" height="455">
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

const gameThreeTemplate = `\
  ${header}
  <div class="game">
    <p class="game__task">${questions[2].description}</p>
    ${form}
    ${stats}
  </div>`;

const gameThreeElement = createElementDOM(gameThreeTemplate);

const gameThreeAnswer = gameThreeElement.querySelectorAll('.game__option');

for (const answer of gameThreeAnswer) {
  answer.onclick = () => {
    slideDisplay(6);
  };
}

export default gameThreeElement;
