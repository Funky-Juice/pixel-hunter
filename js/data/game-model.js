import {INIT_STATE, initScores} from './game-data';
import {setTime, setLives, setScores, getLevel, hasLevel, setCurrentLevel, getResult} from '../utils';

class GameModel {
  constructor(state = INIT_STATE, scores = initScores) {
    this._state = state;
    this._scores = scores;
  }

  get state() {
    return this._state;
  }

  get scores() {
    return this._scores;
  }

  restart() {
    this._state = INIT_STATE;
    this._scores = initScores;
  }

  hasNextLevel() {
    return hasLevel(this._state.level + 1);
  }

  nextLevel() {
    this._state = setCurrentLevel(this._state, this._state.level + 1);
  }

  decreaseLive() {
    this._state = setLives(this._state, this._state.lives - 1);
  }

  tick() {
    this._state = setTime(this._state, this._state.time - 1);
  }

  resetTime() {
    this._state = setTime(this._state, INIT_STATE.time);
  }

  isDead() {
    return this._state.lives < 0;
  }

  getCurrentLevel() {
    return getLevel(this._state.level);
  }

  calcScores(isWrong) {
    this._scores = setScores(this._state, this._scores, isWrong);
  }

  result() {
    return getResult(this._state, this._scores);
  }
}

export default new GameModel();
