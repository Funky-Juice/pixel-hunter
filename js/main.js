import rulesElement from './template-modules/rules';
import {current, slidesDisplay} from './display-slides';

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

document.querySelector('.next').onclick = (e) => {
  e.preventDefault();

  slidesDisplay(current + 1);
};

document.querySelector('.prev').onclick = (e) => {
  e.preventDefault();

  slidesDisplay(current - 1);
};

slidesDisplay(0);
