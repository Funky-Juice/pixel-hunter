import {sendGameResult, getGameStats} from '../actions';
import GameModel from '../data/game-model';
import emitter from '../emitter';
import HeaderView from '../view/header-view';
import LevelView from '../view/level-view';
import Application from '../application';


class GamePresenter {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = new LevelView(this.model.getCurrentLevel(), this.model.scores);

    this.root = document.createElement('div');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    emitter.on('answer', (answer) => this.onAnswer(answer));
    emitter.on('restart', () => this.exitGame());

    this._interval = null;
  }

  startGame() {
    this.model.resetTime();
    this.changeLevel();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();

      if (this.model.state.time < 0) {
        this.stopGame();
        this.model.decreaseLive();
        this.model.calcScores(true);
        this.nextGame();
      }
    }, 1000);
  }

  stopGame() {
    clearInterval(this._interval);
  }

  nextGame() {
    if (this.model.isDead() || !this.model.hasNextLevel()) {
      this.endGame();
    } else {
      this.model.nextLevel();
      this.startGame();
    }
  }

  exitGame() {
    this.stopGame();
    this.model.restart();
    Application.showIntro();
  }

  restartGame() {
    this.model.restart();
  }

  endGame() {
    this.sendResults()
        .then(() => this.getStats())
        .then((res) => {
          res.sort((a, b) => {
            return b.date - a.date;
          });
          res.shift();
          return res;
        })
        .then((data) => {
          Application.showStats(this.model.scores, this.model.result(), data);
        })
        .catch((err) => {
          console.log(err);
          Application.showError(err);
        });
  }

  sendResults() {
    return sendGameResult(this.model.name, this.model.scores, this.model.result());
  }

  getStats() {
    return getGameStats(this.model.name);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeLevel() {
    this.updateHeader();
    const level = new LevelView(this.model.getCurrentLevel(), this.model.scores);

    this.changeContentView(level);
  }

  onAnswer(answer) {
    this.stopGame();

    if (answer) {
      this.model.calcScores();
    } else {
      this.model.decreaseLive();
      this.model.calcScores(true);
    }
    this.nextGame();
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}

export default (data, userName) => {
  const gameModel = new GameModel(data, userName);
  const game = new GamePresenter(gameModel);

  game.restartGame();
  game.startGame();

  return game.root;
};
