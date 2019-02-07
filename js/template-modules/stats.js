import createElementDOM from '../create-dom-element';
import {initGame, renderScreen} from '../display-screens';
import {resultScores} from '../scoring';
import intro from '../view/intro-view';

export default (scores) => {
  const result = resultScores();

  const header = `\
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    </header>`;

  const fastResultsRow = `\
    <tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">${result.fastAnswers}<span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${result.speedBonus}</td>
    </tr>`;

  const livesResultsRow = `\
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${result.lives}<span class="stats__result stats__result--heart"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${result.livesBonus}</td>
    </tr>`;

  const slowResultsRow = `\
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${result.slowAnswers}<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${result.penalty}</td>
    </tr>`;

  const totalResultsRow = `\
    <tr>
      <td colspan="5" class="result__total  result__total--final">${result.total}</td>
    </tr>`;

  const tableTemplate = `\
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${scores.map((score) =>`\
            <li class="stats__result stats__result--${score}"></li>`).join('')}
          </ul>
        </td>
        <td class="result__points">${result.scores ? '×&nbsp;100' : ''}</td>
        <td class="result__total">${result.scores ? result.scores : 'FAIL'}</td>
      </tr>
      ${result.fastAnswers > 0 ? fastResultsRow : ''}
      ${result.lives > 0 ? livesResultsRow : ''}
      ${result.slowAnswers > 0 ? slowResultsRow : ''}
      ${result.total ? totalResultsRow : ''}
    </table>`;

  const statsTemplate = `\
    ${header}
    <div class="result">
      <h1>${result.total ? 'Победа!' : 'Поражение'}</h1>
      ${tableTemplate}
    </div>`;

  const stats = createElementDOM(statsTemplate);

  const backBtn = stats.querySelector('.header__back');

  backBtn.onclick = () => {
    initGame();
    renderScreen(intro());
  };

  return stats;
};
