import {initScores, setTime, setLives, setScores, getLevel, hasLevel, setCurrentLevel, getResult} from '../utils';
import {INIT_STATE} from './game-params';


export default class GameModel {
  constructor(data, name) {
    this._data = data;
    this._name = name;
    this._state = INIT_STATE;
    this._scores = this.initScores();
  }

  get state() {
    return this._state;
  }

  get scores() {
    return this._scores;
  }

  get name() {
    return this._name;
  }

  restart() {
    this._state = INIT_STATE;
    this._scores = this.initScores();
  }

  initScores() {
    return initScores(this._data);
  }

  hasNextLevel() {
    return hasLevel(this._data, this._state.level + 1);
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
    return getLevel(this._data, this._state.level);
  }

  calcScores(isWrong) {
    this._scores = setScores(this._state, this._scores, isWrong);
  }

  result() {
    return getResult(this._state, this._scores);
  }
}
