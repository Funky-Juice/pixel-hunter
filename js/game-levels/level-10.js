import game from '../game-engine.js';
import {content, stats} from '../template-modules/question-1.js';
import {gameOne, indicators} from '../game-data';
import nextScreen from '../template-modules/stats';

export default game(gameOne, indicators, content, stats, nextScreen);
