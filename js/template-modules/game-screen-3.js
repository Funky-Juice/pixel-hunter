import {createElementDOM, renderPage, questionHandler} from '../utils';
import headerTemplate from './header';

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

export default (data) => {
  const gameTemplate = `\
  ${headerTemplate}
  <div class="game">
    ${content(data)}
    ${stats(data)}
  </div>`;

  const gameElement = createElementDOM(gameTemplate);

  const gameAnswer = gameElement.querySelectorAll('.game__option');

  for (let i = 0; i < gameAnswer.length; i++) {
    gameAnswer[i].onclick = (evt) => {
      evt.preventDefault();
      questionHandler()();
    };
  }

  renderPage(gameElement);
  return gameElement;
};
