
const singleGameForm = (data) => `\
    <form class="game__content game__content--wide">
      ${data.content.map((img, i) => `
        <div class="game__option">
          <img src="${img}" alt="Option ${i + 1}" width="705" height="455">
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
        <div id="${i}" class="game__option">
          <img src="${img}" alt="Option ${i + 1}" width="304" height="455">
        </div>
      `).join('')}
    </form>`;


export default (question) => {
  let result;

  switch (question.type) {
    case 'single': result = singleGameForm(question);
      break;
    case 'double': result = doubleGameForm(question);
      break;
    case 'triple': result = tripleGameForm(question);
      break;
  }
  return result;
};
