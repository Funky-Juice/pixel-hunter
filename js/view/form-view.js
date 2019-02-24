import AbstractView from '../view';

export default class FormView extends AbstractView {

  constructor(question) {
    super();
    this.question = question;
  }

  getMarkup() {
    const singleGameForm = (data) => `\
    <form class="game__content game__content--wide">
      ${data.answers.map((answer, i) => `\
        <div class="game__option">
          <img src="${answer.image.url}" alt="Option ${i + 1}" width="${answer.image.width}" height="${answer.image.height}">
          <label class="game__answer game__answer--photo">
            <input data-id="${i}" name="question${i + 1}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input data-id="${i}" name="question${i + 1}" type="radio" value="painting">
            <span>Рисунок</span>
          </label>
        </div>
      `).join('')}
    </form>`;

    const doubleGameForm = (data) => `\
    <form class="game__content">
      ${data.answers.map((answer, i) => `\
        <div class="game__option">
          <img src="${answer.image.url}" alt="Option${i}" width="${answer.image.width}" height="${answer.image.height}">
          <label class="game__answer game__answer--photo">
            <input data-id="${i}" name="question${i + 1}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input data-id="${i}" name="question${i + 1}" type="radio" value="painting">
            <span>Рисунок</span>
          </label>
        </div>
      `).join('')}
    </form>`;

    const tripleGameForm = (data) => `\
    <form class="game__content game__content--triple">
      ${data.answers.map((answer, i) => `\
        <div class="game__option" data-id="0" value="${answer.type}">
          <img src="${answer.image.url}" alt="Option ${i + 1}" width="${answer.image.width}" height="${answer.image.height}">
        </div>
      `).join('')}
    </form>`;

    let result;

    switch (this.question.type) {
      case 'tinder-like':
        result = singleGameForm(this.question);
        break;
      case 'two-of-two':
        result = doubleGameForm(this.question);
        break;
      case 'one-of-three':
        result = tripleGameForm(this.question);
        break;
    }
    return result;
  }
}
