import 'whatwg-fetch';
import Application from './application';


const status = (response) => {
  if (response.status >= '200' && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status} ${response.statusText}`);
  }
};

window.fetch('https://es.dump.academy/pixel-hunter/questions')
    .then(status)
    .then((response) => response.json())
    .then((data) => {
      Application.data = data;
    })
    .then(() => Application.showIntro())
    .catch((err) => Application.showError(err));
