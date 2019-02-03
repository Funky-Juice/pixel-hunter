import {INIT_STATE} from '../game-data';

export default (state) => `\
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
