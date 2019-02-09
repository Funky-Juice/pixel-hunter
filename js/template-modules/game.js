import createElementDOM from '../create-dom-element';
import headerTemplate from './header';
import scoresTemplate from './scores';
import getForm from './form';
import {setCorrectAnswer, setWrongAnswer} from '../utils';

export default (data, state, scores) => {

  const gameTemplate = `\
    <div class="game">
      <p class="game__task">${data.description}</p>
      ${getForm(data)}
      ${scoresTemplate(scores)}
    </div>`;

  const gameElement = createElementDOM(gameTemplate);

  gameElement.insertBefore(headerTemplate(state), gameElement.firstChild);

  let answerElem;

  if (data.type === 'triple') {
    answerElem = '.game__option';
  } else {
    answerElem = '.game__answer input';
  }

  const gameAnswers = gameElement.querySelectorAll(answerElem);
  const timerElem = gameElement.querySelector('.game__timer');

  const answers = new Array(data.content.length);

  for (const answer of gameAnswers) {
    answer.onclick = (evt) => {

      switch (data.type) {
        case 'single':
          if (evt.target.value === data.answer) {
            setCorrectAnswer(timerElem);
          } else {
            setWrongAnswer();
          }
          break;
        case 'double':
          answers[answer.dataset.id] = answer.value;
          if (!answers.includes(undefined)) {
            if (answers.every((it, i) => it === data.answer[i])) {
              setCorrectAnswer(timerElem);
            } else {
              setWrongAnswer();
            }
          }
          break;
        case 'triple':
          if (+evt.target.id === data.answer) {
            setCorrectAnswer(timerElem);
          } else {
            setWrongAnswer();
          }
          break;
      }
    };
  }

  return gameElement;
};
