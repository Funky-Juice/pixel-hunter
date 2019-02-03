import createElementDOM from '../create-dom-element';
import headerTemplate from './header';
import scoresTemplate from './scores';
import {setCorrectAnswer, setWrongAnswer} from '../utils';

export default (data, state, scores) => {

  const form = `\
    <form class="game__content">
      ${data.content.map((img, i) => `\
        <div class="game__option">
          <img src="${img}" alt="Option${i}" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input data-id="${i}" name="question${i + 1}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input data-id="${i}" name="question${i + 1}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
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

  const gameInputs = gameElement.querySelectorAll('.game__answer input');
  const timerElem = gameElement.querySelector('.game__timer');

  const answers = new Array(data.content.length);

  for (const input of gameInputs) {
    input.onclick = () => {
      answers[input.dataset.id] = input.value;

      if (!answers.includes(undefined)) {
        if (answers.every((it, i) => it === data.answer[i])) {
          setCorrectAnswer(timerElem);
        } else {
          setWrongAnswer();
        }
      }
    };
  }

  return gameElement;
};
