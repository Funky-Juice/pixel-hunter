import game from '../game-engine.js';
import {content, stats} from '../template-modules/question-3.js';
import {gameThree, indicators} from '../game-data';
import nextScreen from './level-7.js';

export default game(gameThree, indicators, content, stats, nextScreen);
