import createElementDOM from '../create-dom-element';
import {initGame, renderScreen} from '../display-screens';
import {INIT_STATE} from '../game-data';
import intro from '../view/intro-view';
import {setTimer, resetTimer} from '../timer';

export default (state) => {

  const header = `\
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer"></h1>
    <div class="game__lives">
      ${[...Array(INIT_STATE.lives - state.lives)].map(() => `\
        <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join('')}
      ${[...Array(state.lives)].map(() => `\
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join('')}
    </div>
  </header>`;

  const gameElement = createElementDOM(header);

  const timerElem = gameElement.querySelector('.game__timer');
  const backBtn = gameElement.querySelector('.header__back');

  setTimer(state, timerElem);

  backBtn.onclick = () => {
    resetTimer();
    initGame();
    renderScreen(intro());
  };

  return gameElement;
};
