import slidesDisplay from './display-slides';

slidesDisplay(0);

document.querySelector('.intro__asterisk').onclick = (evt) => {
  evt.preventDefault();
  slidesDisplay(1);
};
