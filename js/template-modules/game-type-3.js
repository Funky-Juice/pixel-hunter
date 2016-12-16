import {createElementDOM, renderPage, getNextLevel, changeLive, getStats, startTimer, timerId} from '../utils';
import headerTemplate from './header';

const content = (data) =>`\
  <p class="game__task">${data.task}</p>
  <form class="game__content  game__content--triple">
  
    ${data.answer.map((answer) =>`\
    <div class="game__option">
      <img src="${answer.image}" alt="${answer.alt}" width="304" height="455">
    </div>`).join('')}  
  </form>`;

const stats = (data) =>`\
  <div class="stats">
    <ul class="stats">
      ${data.stats.map((result) =>`\
      <li class="stats__result stats__result--${result}"></li>`).join('')}
    </ul>
  </div>`;

export default (data, callback) => {
  const gameTemplate = `\
  ${headerTemplate(callback)}
  <div class="game">
    ${content(data)}
    ${stats(data)}
  </div>`;

  const gameElement = createElementDOM(gameTemplate);

  const gameContent = gameElement.querySelector('.game__content');

  let gameOptionArr = gameContent.querySelectorAll('.game__option');

  const gameTimer = gameElement.querySelector('.game__timer');

  startTimer(gameTimer);

  gameContent.onclick = (evt) => {
    if (evt.target.classList.contains('game__option')) {
      (evt.target.classList.add('game__option--selected'));

      for (let i = 0; i < gameOptionArr.length; i++) {
        if (gameOptionArr[i].classList.contains('game__option--selected')) {
          let answer = (i === data.correctAnswer);

          if (answer) {
            clearInterval(timerId);
            getStats();
            getNextLevel()();
          } else {
            clearInterval(timerId);
            changeLive();
            getNextLevel()();
          }
        }
      }
    }
  };

  renderPage(gameElement);
  return gameElement;
};
