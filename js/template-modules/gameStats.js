import {gameStats} from '../game-data';

export default `\
  <div class="stats">
    <ul class="stats">
    ${gameStats.map((val) => `\
      <li class="stats__result stats__result--${val}"></li>
    `).join('')}
    </ul>
  </div>`;
