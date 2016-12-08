const headerTemplate = (data) =>`\
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${data.timer}</h1>
    <div class="game__lives">
      ${data.lives.map((lives) =>`\
      <img src="img/heart__${lives}.svg" class="game__heart" alt="Life" width="32" height="32">`).join('')}
    </div>
  </header>`;

export default headerTemplate;
