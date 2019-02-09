import emitter from '../emitter';
import AbstractView from '../view';
import FormView from './form-view';
import ScoresView from './scores-view';

export default class LevelView extends AbstractView {
  constructor(levelData, gameState, gameScores) {
    super();
    this.data = levelData;
    this.form = new FormView(levelData);
    this.scores = new ScoresView(gameScores);
  }

  getMarkup() {
    return `\
      <div class="game">
        <p class="game__task">${this.data.description}</p>
        ${this.form.getMarkup()}
        ${this.scores.getMarkup()}
      </div>`;
  }

  bindHandlers() {
    let answerElem = null;

    if (this.data.type === 'triple') {
      answerElem = '.game__option';
    } else {
      answerElem = '.game__answer input';
    }

    const levelAnswers = this.element.querySelectorAll(answerElem);
    const answersList = new Array(this.data.answer.length);

    for (const answer of levelAnswers) {

      answer.onclick = () => {
        answersList[answer.dataset.id] = answer.getAttribute('value');

        if (!answersList.includes(undefined)) {

          const result = answersList.every((it, i) => it === this.data.answer[i]);
          emitter.emit('answer', result);
        }
      };
    }
  }
}
