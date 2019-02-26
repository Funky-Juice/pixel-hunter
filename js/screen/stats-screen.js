import emitter from '../emitter';
import AbstractView from '../view';
import HeaderView from '../view/header-view';

class StatsView extends AbstractView {

  constructor(scores, result, stats) {
    super();
    this.scores = scores;
    this.result = result;
    this.playerStats = stats;
    this.header = new HeaderView();
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
        <div>${this.header.getMarkup()}</div>
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
            
            ${this.playerStats.map((item, i) => `
              <tr>
                <td>${i + 2}.</td>
                <td colspan="2">
                  <ul class="stats">
                    ${item.stats.map((stats) =>`\
                    <li class="stats__result stats__result--${stats}"></li>`).join('')}
                  </ul>
                </td>
              </tr>            
            `).join('')}
          </table>
        </div>
      </div>`;
  }

  bindHandlers() {
    const restartBtn = this.element.querySelector('.header__back');

    restartBtn.onclick = () => {
      emitter.emit('restart');
    };
  }
}

export default (scores, result, stats) => new StatsView(scores, result, stats).element;
