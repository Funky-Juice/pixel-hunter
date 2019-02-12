import AbstractView from '../view';

export default class StatsView extends AbstractView {

  constructor(scores, result) {
    super();
    this.scores = scores;
    this.result = result;
  }

  getMarkup() {
    const fastResultsRow = `\
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${this.result.fastAnswers}<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.result.speedBonus}</td>
      </tr>`;

    const livesResultsRow = `\
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.result.lives}<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.result.livesBonus}</td>
      </tr>`;

    const slowResultsRow = `\
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${this.result.slowAnswers}<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.result.penalty}</td>
      </tr>`;

    const totalResultsRow = `\
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.result.total}</td>
      </tr>`;

    return `
      <div>
        <div class="result">
          <h1>${this.result.total ? 'Победа!' : 'Поражение'}</h1>          
          <table class="result__table">
            <tr>
              <td class="result__number">1.</td>
              <td colspan="2">
                <ul class="stats">
                  ${this.scores.map((score) =>`\
                  <li class="stats__result stats__result--${score}"></li>`).join('')}
                </ul>
              </td>
              <td class="result__points">${this.result.scores ? '×&nbsp;100' : ''}</td>
              <td class="result__total">${this.result.scores ? this.result.scores : 'FAIL'}</td>
            </tr>
            ${this.result.fastAnswers > 0 ? fastResultsRow : ''}
            ${this.result.lives > 0 ? livesResultsRow : ''}
            ${this.result.slowAnswers > 0 ? slowResultsRow : ''}
            ${this.result.total ? totalResultsRow : ''}
          </table>
        </div>
      </div>`;
  }
}
