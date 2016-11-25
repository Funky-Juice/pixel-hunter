import createElementDOM from '../create-dom-element';
import slidesDisplay from '../display-slides';
import {question, answer, indicators, gameStats} from '../game-const';

const game = {
  task: 'Угадай, фото или рисунок?'
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
<form class="game__content  game__content--wide">
  <div class="game__option">
    <img src="${question.three}" alt="Option 3" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      <input name="question3" type="radio" value="photo">
      <span>${answer.photo}</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="question3" type="radio" value="paint">
      <span>${answer.paint}</span>
    </label>
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

const gameTwoTemplate = `\
${header}
<div class="game">
  ${content}
  ${stats}
</div>`;

const gameTwoElement = createElementDOM(gameTwoTemplate);

const gameTwoAnswer = gameTwoElement.querySelectorAll('.game__answer');

for (let i = 0; i < gameTwoAnswer.length; i++) {
  gameTwoAnswer[i].onclick = (evt) => {
    evt.preventDefault();
    slidesDisplay(5);
  };
}

export default gameTwoElement;
