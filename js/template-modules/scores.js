export default (scores) => `\
  <div class="stats">
    <ul class="stats">
    ${scores.map((val) => `\
      <li class="stats__result stats__result--${val}"></li>
    `).join('')}
    </ul>
  </div>`;
