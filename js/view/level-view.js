import emitter from '../emitter';
import AbstractView from '../view';
import FormView from './form-view';
import ScoresView from './scores-view';
import imageLoader from '../image-loader/image-loader';

export default class LevelView extends AbstractView {
  constructor(levelData, gameScores) {
    super();
    this.level = levelData;
    this.form = new FormView(levelData);
    this.scores = new ScoresView(gameScores);
  }

  getMarkup() {
    return `\
      <div class="game">
        <p class="game__task">
          ${this.level.question}
        </p>
        ${this.form.getMarkup()}
        ${this.scores.getMarkup()}
      </div>`;
  }

  bindHandlers() {
    let answerElem = null;

    if (this.level.type === 'one-of-three') {
      answerElem = '.game__option';
    } else {
      answerElem = '.game__answer input';
    }

    const elem = this.element.querySelectorAll('.game__option img');
    for (let i = 0; i < elem.length; i++) {
      imageLoader(elem[i]).load(this.level.answers[i].image);
    }

    const levelAnswers = this.element.querySelectorAll(answerElem);
    const answersList = new Array(this.level.answers.length);

    for (const answer of levelAnswers) {
      answer.onclick = () => {

        if (this.level.type === 'one-of-three') {
          let question = '';

          if (this.level.question === 'Найдите рисунок среди изображений') {
            question = 'painting';
          } else {
            question = 'photo';
          }
          const result = answer.getAttribute('value') === question;

          emitter.emit('answer', result);
        } else {
          answersList[answer.dataset.id] = answer.getAttribute('value');

          if (!answersList.includes(undefined)) {
            const result = answersList.every((it, i) => {
              return it === this.level.answers[i].type;
            });

            emitter.emit('answer', result);
          }
        }
      };
    }
  }
}
