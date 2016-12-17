import {createElementDOM, renderPage, getNextLevel, changeLive, getStats, startTimer, resetUserData, resetGameDataValues, timerId} from '../utils';
import headerTemplate from './header';
import introElement from './intro.js';

const content = (data) =>`\
  <p class="game__task">${data.task}</p>
  <form class="game__content  game__content--wide">
  
    ${data.gameOption.map((gameOption) =>`\
    <div class="game__option">
      <img src="${gameOption.image}" alt="${gameOption.alt}" width="705" height="455">    
      
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

  const headerBack = gameElement.querySelector('.header__back');

  const gameContent = gameElement.querySelector('.game__content');

  const gameTimer = gameElement.querySelector('.game__timer');

  startTimer(gameTimer);

  headerBack.onclick = () => {
    clearInterval(timerId);
    resetUserData();
    resetGameDataValues();
    renderPage(introElement);
  };

  let answer;

  gameContent.onclick = (evt) => {
    if (evt.target.checked) {
      answer = evt.target.value;
    }

    if (answer) {
      if (data.gameOption[0].correctAnswer === answer) {
        clearInterval(timerId);
        getStats();
        getNextLevel()();
      } else {
        clearInterval(timerId);
        changeLive();
        getNextLevel()();
      }
    }
  };

  renderPage(gameElement);
  return gameElement;
};
