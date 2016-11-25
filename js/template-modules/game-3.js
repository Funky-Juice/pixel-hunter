import createElementDOM from '../create-dom-element';
import slidesDisplay from '../display-slides';
import {question, indicators, gameStats} from '../game-const';

const game = {
  task: 'Найдите рисунок среди изображений'
};

const header = `\
<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
  <h1 class="game__timer">${indicators.timer}</h1>
  <div class="game__lives">
    <img src="${indicators.lives.emptyHeart}" class="game__heart" alt="Life" width="32" height="32">
    <img src="${indicators.lives.fullHeart}" class="game__heart" alt="Life" width="32" height="32">
    <img src="${indicators.lives.fullHeart}" class="game__heart" alt="Life" width="32" height="32">
  </div>
</header>`;

const content = `\
<p class="game__task">${game.task}</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
    <img src="${question.four}" alt="Option 4" width="304" height="455">
  </div>
  <div class="game__option  game__option--selected">
    <img src="${question.five}" alt="Option 5" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="${question.six}" alt="Option 6" width="304" height="455">
  </div>
</form>`;

const stats = `\
<div class="stats">
  <ul class="stats">
    <li class="stats__result stats__result--${gameStats.wrong}"></li>
    <li class="stats__result stats__result--${gameStats.slow}"></li>
    <li class="stats__result stats__result--${gameStats.fast}"></li>
    <li class="stats__result stats__result--${gameStats.correct}"></li>
    <li class="stats__result stats__result--${gameStats.wrong}"></li>
    <li class="stats__result stats__result--${gameStats.unknown}"></li>
    <li class="stats__result stats__result--${gameStats.slow}"></li>
    <li class="stats__result stats__result--${gameStats.unknown}"></li>
    <li class="stats__result stats__result--${gameStats.fast}"></li>
    <li class="stats__result stats__result--${gameStats.unknown}"></li>
  </ul>
</div>`;

const gameThreeTemplate = `\
${header}
<div class="game">
  ${content}
  ${stats}
</div>`;

const gameThreeElement = createElementDOM(gameThreeTemplate);

const gameThreeAnswer = gameThreeElement.querySelectorAll('.game__option');

for (let i = 0; i < gameThreeAnswer.length; i++) {
  gameThreeAnswer[i].onclick = (evt) => {
    evt.preventDefault();
    slidesDisplay(6);
  };
}

export default gameThreeElement;
