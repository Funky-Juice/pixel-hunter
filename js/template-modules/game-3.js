import createElementDOM from '../create-dom-element';
import slidesDisplay from '../display-slides';
import headerTemplate from './header';
import {gameThree, gameStats, indicators} from '../game-const';

const content = (data) =>`\
<p class="game__task">${data.task}</p>
<form class="game__content  game__content--triple">

  ${data.answer.map((it) =>`
  <div class="game__option ${it.class}">
    <img src="${it.image}" alt="${it.alt}" width="304" height="455">
  </div>`).join('')}  
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
${headerTemplate(indicators)}
<div class="game">
  ${content(gameThree)}
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
