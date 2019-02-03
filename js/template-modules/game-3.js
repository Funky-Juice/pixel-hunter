import createElementDOM from '../create-dom-element';
import headerTemplate from './header';
import scoresTemplate from './scores';
import {setCorrectAnswer, setWrongAnswer} from '../utils';

export default (data, state, scores) => {

  const form = `\
    <form class="game__content game__content--triple">
      ${data.content.map((img, i) => `\
        <div id="${i}" class="game__option">
          <img src="${img}" alt="Option ${i + 1}" width="304" height="455">
        </div>
      `).join('')}
    </form>`;

  const gameTemplate = `\
    <div class="game">
      <p class="game__task">${data.description}</p>
      ${form}
      ${scoresTemplate(scores)}
    </div>`;

  const gameElement = createElementDOM(gameTemplate);

  gameElement.insertBefore(headerTemplate(state), gameElement.firstChild);

  const gameAnswers = gameElement.querySelectorAll('.game__option');
  const timerElem = gameElement.querySelector('.game__timer');

  for (const answer of gameAnswers) {
    answer.onclick = (evt) => {
      if (+evt.target.id === data.answer) {
        setCorrectAnswer(timerElem);
      } else {
        setWrongAnswer();
      }
    };
  }

  return gameElement;
};
