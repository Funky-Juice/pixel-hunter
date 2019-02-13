import {INIT_STATE} from '../data/game-data';
import emitter from '../emitter';
import AbstractView from '../view';

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
          <h1 class="game__timer">${this.state.time}</h1>
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
    const restartBtn = this.element.querySelector('.header__back');

    restartBtn.onclick = () => {
      emitter.emit('restart');
    };
  }
}
