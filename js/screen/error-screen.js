import AbstractView from '../view';

class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  getMarkup() {
    return `\
      <div>
        <h1 style="text-align: center">Упс!</h1>
        <h1>${this.error}</h1>
      </div>`;
  }
}

export default (error) => new ErrorView(error).element;
