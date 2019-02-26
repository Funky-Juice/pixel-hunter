import 'whatwg-fetch';
import Application from './application';

const BASE_API = 'https://es.dump.academy/pixel-hunter';
const API = 'https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats';

const status = (response) => {
  if (response.status >= '200' && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status} ${response.statusText}`);
  }
};

export const getQuestions = () => {
  window.fetch(`${BASE_API}/questions`)
      .then(status)
      .then((response) => response.json())
      .then((data) => {
        Application.data = data;
      })
      .then(() => Application.showIntro())
      .catch((err) => Application.showError(err));
};

export const sendGameResult = (username, scores, result) => {
  window.fetch(`${API}/${username}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      stats: scores,
      lives: result.lives,
    })
  });
};
