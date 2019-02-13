import AbstractView from '../view';

export default class FormView extends AbstractView {

  constructor(question) {
    super();
    this.question = question;
  }

  getMarkup() {
    const singleGameForm = (data) => `\
    <form class="game__content game__content--wide">
      ${data.content.map((img, i) => `\
        <div class="game__option">
          <img src="${img}" alt="Option ${i + 1}" width="705" height="455">
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

    const doubleGameForm = (data) => `\
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

    const tripleGameForm = (data) => `\
    <form class="game__content game__content--triple">
      ${data.content.map((img, i) => `\
        <div class="game__option" data-id="0" value="${i}">
          <img src="${img}" alt="Option ${i + 1}" width="304" height="455">
        </div>
      `).join('')}
    </form>`;

    let result;

    switch (this.question.type) {
      case 'single':
        result = singleGameForm(this.question);
        break;
      case 'double':
        result = doubleGameForm(this.question);
        break;
      case 'triple':
        result = tripleGameForm(this.question);
        break;
    }
    return result;
  }
}
