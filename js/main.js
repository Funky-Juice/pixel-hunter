import intro from './template-modules/intro';
import greeting from './template-modules/greeting';
import rulesElement from './template-modules/rules';
import gameOneElement from './template-modules/game-1';
import gameTwoElement from './template-modules/game-2';
import gameThreeElement from './template-modules/game-3';
import stats from './template-modules/stats';

// Rules
let rulesSubmit = rulesElement.querySelector('.rules__button');

rulesElement.querySelector('.rules__input').oninput = (evt) => {
  if (evt.target.value) {
    rulesSubmit.removeAttribute('disabled');
  } else {
    rulesSubmit.setAttribute('disabled', '');
  }
};

// Slides changer
let mainElement = document.getElementById('main');

let switcher = document.createElement('div');
switcher.innerHTML = '' +
  '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
  '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
switcher.style.cssText = 'text-align: center';
mainElement.after(switcher);

let slides = [
  intro,
  greeting,
  rulesElement,
  gameOneElement,
  gameTwoElement,
  gameThreeElement,
  stats
];
let current = -1;

let select = (index) => {
  current = index;
  mainElement.innerHTML = '';
  mainElement.appendChild(slides[index]);
};

document.querySelector('.next').onclick = (e) => {
  e.preventDefault();

  select(current + 1);
};

document.querySelector('.prev').onclick = (e) => {
  e.preventDefault();

  select(current - 1);
};

select(0);
