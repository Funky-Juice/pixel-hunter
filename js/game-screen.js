import HeaderView from './view/header-view';
import LevelView from './view/level-view';
import StatsView from './view/stats-view';
import intro from './view/intro-view';
import gameModel from './data/game-model';
import emitter from './emitter';
import renderScreen from './render-screens';

const root = document.createElement('div');

const game = {
  header: new HeaderView(gameModel.state),
  content: new LevelView(gameModel.getCurrentLevel(), gameModel.scores),
  interval: '',

  startGame() {
    gameModel.resetTime();
    game.changeLevel();

    game.interval = setInterval(() => {
      gameModel.tick();
      game.updateHeader();

      if (gameModel.state.time < 0) {
        game.stopGame();
        gameModel.decreaseLive();
        gameModel.calcScores(true);
        game.nextGame();
      }
    }, 1000);
  },

  stopGame() {
    clearInterval(game.interval);
  },

  nextGame() {
    if (gameModel.isDead() || !gameModel.hasNextLevel()) {
      game.endGame();
    } else {
      gameModel.nextLevel();
      game.startGame();
    }
  },

  restartGame() {
    game.stopGame();
    gameModel.restart();
    renderScreen(intro);
  },

  endGame() {
    const element = document.createElement('div');
    element.appendChild(new HeaderView().element);
    element.appendChild(new StatsView(gameModel.scores, gameModel.result()).element);

    renderScreen(element);
  },

  updateHeader() {
    const header = new HeaderView(gameModel.state);
    root.replaceChild(header.element, game.header.element);
    game.header = header;
  },

  changeLevel() {
    game.updateHeader();
    const level = new LevelView(gameModel.getCurrentLevel(), gameModel.scores);

    game.changeContentView(level);
  },

  onAnswer(answer) {
    game.stopGame();

    if (answer) {
      gameModel.calcScores();
    } else {
      gameModel.decreaseLive();
      gameModel.calcScores(true);
    }
    game.nextGame();
  },

  changeContentView(view) {
    root.replaceChild(view.element, game.content.element);
    game.content = view;
  }
};

emitter.on('answer', (answer) => game.onAnswer(answer));
emitter.on('restart', () => game.restartGame());

root.appendChild(game.header.element);
root.appendChild(game.content.element);

export default () => {
  gameModel.restart();
  game.startGame();
  renderScreen(root);
};
