import createElementDOM from '../create-dom-element';
import slidesDisplay from '../display-slides';
import headerTemplate from './header';
import {gameThree, indicators} from '../game-const';

const content = (data) =>`\
<p class="game__task">${data.task}</p>
<form class="game__content  game__content--triple">

  ${data.answers.map((answers) =>`\
  <div class="game__option ${answers.class}">
    <img src="${answers.image}" alt="${answers.alt}" width="304" height="455">
  </div>`).join('')}  
</form>`;

const stats = (data) =>`\
<div class="stats">
  <ul class="stats">
    ${data.stats.map((result) =>`\
    <li class="stats__result stats__result--${result}"></li>`).join('')}
  </ul>
</div>`;

const gameThreeTemplate = `\
${headerTemplate(indicators)}
<div class="game">
  ${content(gameThree)}
  ${stats(gameThree)}
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
