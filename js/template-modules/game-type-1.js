import {createElementDOM, renderPage, getNextLevel, changeLive, getStats, startTimer, timerId} from '../utils';
import headerTemplate from './header';

const content = (data) =>`\
  <p class="game__task">${data.task}</p>
  <form class="game__content">
  
    ${data.gameOption.map((gameOption) =>`\
    <div class="game__option">
      <img src="${gameOption.image}" alt="${gameOption.alt}" width="468" height="458">
      
      ${gameOption.answerParams.map((param) =>`\
      <label class="game__answer  ${param.class}">
        <input name="${param.name}" type="radio" value="${param.value}">
        <span>${param.text}</span>
      </label>`).join('')}
      
    </div>`).join('')}
  </form>`;

const stats = (statsdata) =>`\
  <div class="stats">
    <ul class="stats">
      ${statsdata.stats.map((result) =>`\
      <li class="stats__result stats__result--${result}"></li>`).join('')}
    </ul>
  </div>`;

export default (data, statsdata, callback) => {
  const gameTemplate = `\
  ${headerTemplate(callback)}
  <div class="game">
    ${content(data)}
    ${stats(statsdata)}
  </div>`;


  const gameElement = createElementDOM(gameTemplate);

  const gameTimer = gameElement.querySelector('.game__timer');

  const gameContent = gameElement.querySelector('.game__content');

  startTimer(gameTimer);

  let answer1;
  let answer2;

  gameContent.onclick = (evt) => {
    if (evt.target.checked) {

      if (evt.target.name === 'question1') {
        answer1 = evt.target.value;

      } else if (evt.target.name === 'question2') {
        answer2 = evt.target.value;
      }

      if (answer1 && answer2) {

        if ((data.gameOption[0].correctAnswer === answer1)
          && (data.gameOption[1].correctAnswer === answer2)) {
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
  };

  renderPage(gameElement);
  return gameElement;
};
