import AbstractView from '../view';

export default class ScoresView extends AbstractView {

  constructor(scores) {
    super();
    this.scores = scores;
  }

  getMarkup() {
    return `\
      <div class="stats">
        <ul class="stats">
        ${this.scores.map((val) => `\
          <li class="stats__result stats__result--${val}"></li>
        `).join('')}
        </ul>
      </div>`;
  }
}
