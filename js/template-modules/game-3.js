import createElementDOM from '../create-dom-element';
import slideDisplay from '../display-slides';
import header from './header';
import gameStats from './gameStats';

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
    ${header}
    <div class="game">
      <p class="game__task">${data.description}</p>
      ${form}
      ${gameStats}
    </div>`;

  const gameElement = createElementDOM(gameTemplate);

  const gameAnswers = gameElement.querySelectorAll('.game__option');

  for (const answer of gameAnswers) {
    answer.onclick = () => {
      slideDisplay(6);
    };
  }

  return gameElement;
}
