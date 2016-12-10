import livesScale from '../lives.js';

const timer = 'NN';

const headerTemplate = `\
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${timer}</h1>
    ${livesScale}
  </header>`;

export default headerTemplate;
