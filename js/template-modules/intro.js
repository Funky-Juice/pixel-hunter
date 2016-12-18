import {createElementDOM, renderPage} from '../utils';
import greeting from './greeting';

const introTemplate = `\
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>`;

const introElement = createElementDOM(introTemplate);

introElement.querySelector('.intro__asterisk').onclick = () => {
  renderPage(greeting);
};

export default introElement;
