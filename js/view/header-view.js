import AbstractView from '../view';
import {initGame, renderScreen} from '../display-screens';
import {INIT_STATE} from '../game-data';
import intro from '../view/intro-view';
import {setTimer, resetTimer} from '../timer';

export default class HeaderView extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  getMarkup() {
    if (this.state) {
      return `\
        <header class="header">
          <div class="header__back">
            <span class="back">
              <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
              <img src="img/logo_small.png" width="101" height="44">
            </span>
          </div>
          <h1 class="game__timer"></h1>
          <div class="game__lives">
            ${[...Array(INIT_STATE.lives - this.state.lives)].map(() => `\
              <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join('')}
            ${[...Array(this.state.lives)].map(() => `\
              <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join('')}
          </div>
        </header>`;
    } else {
      return `\
        <header class="header">
          <div class="header__back">
            <span class="back">
              <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
              <img src="img/logo_small.png" width="101" height="44">
            </span>
          </div>
        </header>`;
    }
  }

  bindHandlers() {
    const timerElem = this.element.querySelector('.game__timer');
    const backBtn = this.element.querySelector('.header__back');

    if (this.state) {
      setTimer(this.state, timerElem);
    }

    backBtn.onclick = () => {
      resetTimer();
      initGame();
      renderScreen(intro());
    };
  }
}
