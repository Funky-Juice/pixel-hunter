import createElementDOM from '../create-dom-element';
import {gameStats} from '../game-const';

const header = `\
<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
</header>`;

const tableOne = `\
<table class="result__table">
  <tr>
    <td class="result__number">1.</td>
    <td colspan="2">
      <ul class="stats">
        <li class="stats__result stats__result--${gameStats.wrong}"></li>
        <li class="stats__result stats__result--${gameStats.slow}"></li>
        <li class="stats__result stats__result--${gameStats.fast}"></li>
        <li class="stats__result stats__result--${gameStats.correct}"></li>
        <li class="stats__result stats__result--${gameStats.wrong}"></li>
        <li class="stats__result stats__result--${gameStats.unknown}"></li>
        <li class="stats__result stats__result--${gameStats.slow}"></li>
        <li class="stats__result stats__result--${gameStats.unknown}"></li>
        <li class="stats__result stats__result--${gameStats.fast}"></li>
        <li class="stats__result stats__result--${gameStats.unknown}"></li>
      </ul>
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">900</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">50</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">100</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">-100</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">950</td>
  </tr>
</table>`;

const tableTwo = `\
<table class="result__table">
  <tr>
    <td class="result__number">2.</td>
    <td>
      <ul class="stats">
        <li class="stats__result stats__result--${gameStats.wrong}"></li>
        <li class="stats__result stats__result--${gameStats.slow}"></li>
        <li class="stats__result stats__result--${gameStats.fast}"></li>
        <li class="stats__result stats__result--${gameStats.correct}"></li>
        <li class="stats__result stats__result--${gameStats.wrong}"></li>
        <li class="stats__result stats__result--${gameStats.unknown}"></li>
        <li class="stats__result stats__result--${gameStats.slow}"></li>
        <li class="stats__result stats__result--${gameStats.wrong}"></li>
        <li class="stats__result stats__result--${gameStats.fast}"></li>
        <li class="stats__result stats__result--${gameStats.wrong}"></li>
      </ul>
    </td>
    <td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>
  </tr>
</table>`;

const tableThree = `\
<table class="result__table">
  <tr>
    <td class="result__number">3.</td>
    <td colspan="2">
      <ul class="stats">
        <li class="stats__result stats__result--${gameStats.wrong}"></li>
        <li class="stats__result stats__result--${gameStats.slow}"></li>
        <li class="stats__result stats__result--${gameStats.fast}"></li>
        <li class="stats__result stats__result--${gameStats.correct}"></li>
        <li class="stats__result stats__result--${gameStats.wrong}"></li>
        <li class="stats__result stats__result--${gameStats.unknown}"></li>
        <li class="stats__result stats__result--${gameStats.slow}"></li>
        <li class="stats__result stats__result--${gameStats.unknown}"></li>
        <li class="stats__result stats__result--${gameStats.fast}"></li>
        <li class="stats__result stats__result--${gameStats.unknown}"></li>
      </ul>
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">900</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">100</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">950</td>
  </tr>
</table>`;

const statsTemplate = `\
${header}
<div class="result">
  <h1>Победа!</h1>
  ${tableOne}
  ${tableTwo}
  ${tableThree}
</div>`;

const stats = createElementDOM(statsTemplate);

export default stats;
