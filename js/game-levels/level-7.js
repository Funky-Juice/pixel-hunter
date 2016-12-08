import game from '../game-engine.js';
import {content, stats} from '../template-modules/question-1.js';
import {gameOne, indicators} from '../game-data';
import nextScreen from './level-8.js';

export default game(gameOne, indicators, content, stats, nextScreen);
