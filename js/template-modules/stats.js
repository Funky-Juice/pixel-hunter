import {createElementDOM, renderPage} from '../utils';

const header = `\
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>`;

const getWrongAnswers = (data) => {
  const arrAnswers = data.stats;
  let wrongAnswers = 0;

  for (let i = 0; i < arrAnswers.length; i++) {
    if (arrAnswers[i] === 'wrong') {
      wrongAnswers++;
    }
  }
  return wrongAnswers;
};

const getCorrectAnswers = (data) => {
  const arrAnswers = data.stats;
  let correctAnswers = 0;

  for (let i = 0; i < arrAnswers.length; i++) {
    if (arrAnswers[i] !== 'wrong' && arrAnswers[i] !== 'unknown') {
      correctAnswers++;
    }
  }
  return correctAnswers;
};

const getFastAnswers = (data) => {
  const arrAnswers = data.stats;
  let fastAnswers = 0;

  for (let i = 0; i < arrAnswers.length; i++) {
    if (arrAnswers[i] === 'fast' ) {
      fastAnswers++;
    }
  }
  return fastAnswers;
};

const getSlowAnswers = (data) => {
  const arrAnswers = data.stats;
  let slowAnswers = 0;

  for (let i = 0; i < arrAnswers.length; i++) {
    if (arrAnswers[i] === 'slow' ) {
      slowAnswers++;
    }
  }
  return slowAnswers;
};

const getGameResults = (data) => {
  const wrongAnswers = getWrongAnswers(data);
  const correctAnswers = getCorrectAnswers(data);
  const fastAnswers = getFastAnswers(data);
  const slowAnswers = getSlowAnswers(data);

  const resultsTitle = () => {
    if (wrongAnswers > 3) {
      return 'FAIL';
    } else {
      return 'Победа!';
    }
  };

  const resultsGameScores = () => {
    const resultsScores = (correctAnswers * 100);
    return resultsScores;
  };

  const resultsFastScores = () => {
    const resultsScores = (fastAnswers * 50);
    return resultsScores;
  };

  const resultsHeartsScores = () => {
    const resultsScores = (data.lives * 50);
    return resultsScores;
  };

  const resultsSlowScores = () => {
    const resultsScores = (slowAnswers * -50);
    return resultsScores;
  };

  const resultsTotalScores = () => {
    const resultsScores = (resultsGameScores() + resultsFastScores() + resultsHeartsScores() + resultsSlowScores());
    return resultsScores;
  };

const gameResults = `\
  <h1>${resultsTitle()}</h1>
  
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">
        <ul class="stats">
          ${data.stats.map((stats) =>`\
          <li class="stats__result stats__result--${stats}"></li>`).join('')} 
        </ul>
      </td>
      <td class="result__points">×&nbsp;100</td>
      <td class="result__total">${resultsGameScores()}</td>
    </tr>
    
    <tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">${fastAnswers}<span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${resultsFastScores()}</td>
    </tr>
    
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${data.lives}<span class="stats__result stats__result--heart"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${resultsHeartsScores()}</td>
    </tr>
    
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${slowAnswers}<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${resultsSlowScores()}</td>
    </tr>   
     
    <tr>
      <td colspan="5" class="result__total  result__total--final">${resultsTotalScores()}</td>
    </tr>
  </table>
`;

  return gameResults;
}

export default (data) => {
  const statsTemplate = `\
    ${header}        
    <div class="result">
      ${getGameResults(data)}
    </div>`;

  const statsElement = createElementDOM(statsTemplate);

  renderPage(statsElement);
  return statsElement;
};
