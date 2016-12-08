import game from '../game-engine.js';
import {content, stats} from '../template-modules/question-2.js';
import {gameTwo, indicators} from '../game-data';
import nextScreen from './level-3.js';

export default game(gameTwo, indicators, content, stats, nextScreen);
