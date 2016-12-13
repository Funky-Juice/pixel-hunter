import {createElementDOM, renderPage, questionHandler} from '../utils';
import headerTemplate from './header';

const content = (data) =>`\
  <p class="game__task">${data.task}</p>
  <form class="game__content">
  
    ${data.questions.map((question) =>`\
    <div class="game__option">
      <img src="${question.image}" alt="${question.alt}" width="468" height="458">
      
      ${question.answer.map((answer) =>`\
      <label class="game__answer  ${answer.class}">
        <input name="${answer.name}" type="radio" value="${answer.value}">
        <span>${answer.text}</span>
      </label>`).join('')}
      
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

  const gameContent = gameElement.querySelector('.game__content');

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
        questionHandler()();
      }
    }
  };

  renderPage(gameElement);
  return gameElement;
};
