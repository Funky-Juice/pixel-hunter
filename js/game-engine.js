import createElementDOM from './create-dom-element';
import headerTemplate from './template-modules/header';
import renderPage from './render-page';

export default (data, indicators, content, stats, nextScreen) => {
  const gameScreen = `\
    ${headerTemplate(indicators)}
    <div class="game">
      ${content(data)}
      ${stats(data)}
    </div>`;

  const gameElement = createElementDOM(gameScreen);

  let targetClass = '';

  if (gameElement.querySelector('.game__answer')) {
    targetClass = 'game__answer';
  } else {
    targetClass = 'game__option';
  }

  gameElement.onclick = (evt) => {
    let target = evt.target;
    if (target.classList.contains(targetClass)) {
      evt.preventDefault();
      renderPage(nextScreen);
    }
  };

  return gameElement;
};
