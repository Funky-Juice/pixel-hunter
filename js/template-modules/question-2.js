export const content = (data) =>`\
  <p class="game__task">${data.task}</p>
  <form class="game__content  game__content--wide">
  
    ${data.questions.map((question) =>`\
    <div class="game__option">
      <img src="${question.image}" alt="${question.alt}" width="705" height="455">    
      
      ${question.answer.map((answer) =>`\
      <label class="game__answer  ${answer.class}">
        <input name="${answer.name}" type="radio" value="${answer.value}">
        <span>${answer.text}</span>
      </label>`).join('')} 
         
    </div>`).join('')}  
  </form>`;

export const stats = (data) =>`\
  <div class="stats">
    <ul class="stats">
      ${data.stats.map((result) =>`\
      <li class="stats__result stats__result--${result}"></li>`).join('')}    
    </ul>
  </div>`;
