import Application from '../application';
import AbstractView from '../view';
import HeaderView from '../view/header-view';

class RulesView extends AbstractView {
  constructor() {
    super();
    this.header = new HeaderView();
  }

  getMarkup() {
    return `\
      <div>${this.header.getMarkup()}</div>
      <div class="rules central--none">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения фото
          <img src="img/photo_icon.png" width="16" height="16"> или рисунок
          <img src="img/paint_icon.png" width="16" height="16" alt="">.<br>
          Фотографиями или рисунками могут быть оба изображения.<br>
          На каждую попытку отводится 30 секунд.<br>
          Ошибиться можно не более 3 раз.<br>
          <br>
          Готовы?
        </p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>`;
  }

  bindHandlers() {
    const restartBtn = this.element.querySelector('.header__back');
    const rulesSubmit = this.element.querySelector('.rules__button');
    const inputField = this.element.querySelector('.rules__input');

    inputField.oninput = (evt) => {
      rulesSubmit.disabled = (!evt.target.value);
    };

    restartBtn.onclick = () => {
      Application.showIntro();
    };

    rulesSubmit.onclick = () => {
      Application.showGame();
    };
  }
}

export default () => new RulesView().element;
