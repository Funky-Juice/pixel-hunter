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

const gameResults = (data) =>`\
  <h1>${data.title}</h1>

  ${data.results.map((results) =>`\
  <table class="result__table">
    <tr>
      <td class="result__number">${results.number}</td>
      <td colspan="2">
        <ul class="stats">
          ${results.stats.map((stats) =>`\
          <li class="stats__result stats__result--${stats}"></li>`).join('')} 
        </ul>
      </td>
      <td class="result__points">${results.multiplier}</td>
      <td class="result__total">${results.scores}</td>
    </tr>
    
    ${results.extras.map((extras) =>`\
    <tr>
      <td></td>
      <td class="result__extra">${extras.title}</td>
      <td class="result__extra">${extras.amount}<span class="stats__result stats__result--${extras.type}"></span></td>
      <td class="result__points">${extras.multiplier}</td>
      <td class="result__total">${extras.scores}</td>
    </tr>`).join('')}    
    
    <!--во второй таблице 'поехала' верстка из-за не соотвествия разметки.-->
    <!--итоговое значение должно быть в первой строке, а не в отдельной.-->
    <!--также не должно быть ячеек result__points и result__total.-->
    <tr>
      <td colspan="5" class="result__total  result__total--final">${results.total}</td>
    </tr>
  </table>`).join('')}
`;

const statsTemplate = `\
${header}
<div class="result">
  ${gameResults(gameStats)}
</div>`;

const stats = createElementDOM(statsTemplate);

export default stats;
