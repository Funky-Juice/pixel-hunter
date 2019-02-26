import errorScreen from './screen/error-screen';
import introScreen from './screen/intro-screen';
import greetingView from './screen/greeting-screen';
import rulesView from './screen/rules-screen';
import statsScreen from './screen/stats-screen';
import newGame from './screen/game-screen';

const mainElement = document.getElementById('main');

const renderScreen = (elem) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(elem);
};

let gameData;

export default class Application {

  static showIntro() {
    renderScreen(introScreen);
  }

  static showGreeting() {
    renderScreen(greetingView);
  }

  static showRules() {
    renderScreen(rulesView());
  }

  static showGame(userName) {
    renderScreen(newGame(gameData, userName));
  }

  static showStats(scores, result) {
    renderScreen(statsScreen(scores, result));
  }

  static showError(error) {
    renderScreen(errorScreen(error));
  }

  static set data(data) {
    gameData = data;
  }
}
