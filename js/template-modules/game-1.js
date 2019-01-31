import createElementDOM from '../create-dom-element';
import {getNextLevel} from '../display-screens';
import headerTemplate from './header';
import scoresTemplate from './scores';
import {setTimer} from '../timer';
import {setScores} from '../scoring';

export default (data, state, scores) => {

  const form = `\
    <form class="game__content">
      ${data.content.map((img, i) => `\
        <div class="game__option">
          <img src="${img}" alt="Option ${i + 1}" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question${i + 1}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question${i + 1}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      `).join('')}
    </form>`;

  const gameTemplate = `\
    ${headerTemplate}
    <div class="game">
      <p class="game__task">${data.description}</p>
      ${form}
      ${scoresTemplate(scores)}
    </div>`;

  const gameElement = createElementDOM(gameTemplate);

  const gameAnswers = gameElement.querySelectorAll('.game__answer');
  const timerElem = gameElement.querySelector('.game__timer');

  const timerId = setTimer(state, timerElem);

  for (const answer of gameAnswers) {
    answer.onclick = (evt) => {
      evt.preventDefault();
      setScores(timerElem.textContent, state);
      clearInterval(timerId);
      getNextLevel();
      state.level++;
    };
  }

  return gameElement;
};
