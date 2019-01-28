import createElementDOM from '../create-dom-element';
import {getNextLevel} from '../display-screens';
import headerTemplate from './header';
import gameStats from './gameStats';
import {setTimer} from '../utils';
import {INIT_STATE} from '../game-data';

export default (data) => {

  const form = `\
    <form class="game__content game__content--triple">
      ${data.content.map((img, i) => `\
        <div class="game__option">
          <img src="${img}" alt="Option ${i + 1}" width="304" height="455">
        </div>
      `).join('')}
    </form>`;

  const gameTemplate = `\
    ${headerTemplate}
    <div class="game">
      <p class="game__task">${data.description}</p>
      ${form}
      ${gameStats}
    </div>`;

  const gameElement = createElementDOM(gameTemplate);

  const gameAnswers = gameElement.querySelectorAll('.game__option');
  const timerElem = gameElement.querySelector('.game__timer');

  setTimer(INIT_STATE, timerElem);

  for (const answer of gameAnswers) {
    answer.onclick = (evt) => {
      evt.preventDefault();
      getNextLevel();
    };
  }

  return gameElement;
};
