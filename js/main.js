import 'whatwg-fetch';
import Application from './application';

const mockData = [
  {
    type: 'single',
    content: ['http://placehold.it/705x455'],
    answer: ['paint'],
    description: 'Угадай, фото или рисунок?'
  },
  {
    type: 'double',
    content: ['http://placehold.it/468x458', 'http://placehold.it/468x458'],
    answer: ['paint', 'photo'],
    description: 'Угадайте для каждого изображения фото или рисунок?'
  },
  {
    type: 'triple',
    content: ['http://placehold.it/304x455', 'http://placehold.it/304x455', 'http://placehold.it/304x455'],
    answer: ['2'],
    description: 'Найдите рисунок среди изображений'
  },
  {
    type: 'single',
    content: ['http://placehold.it/705x455'],
    answer: ['paint'],
    description: 'Угадай, фото или рисунок?'
  },
  {
    type: 'triple',
    content: ['http://placehold.it/304x455', 'http://placehold.it/304x455', 'http://placehold.it/304x455'],
    answer: ['2'],
    description: 'Найдите рисунок среди изображений'
  },
  {
    type: 'double',
    content: ['http://placehold.it/468x458', 'http://placehold.it/468x458'],
    answer: ['paint', 'photo'],
    description: 'Угадайте для каждого изображения фото или рисунок?'
  },
  {
    type: 'triple',
    content: ['http://placehold.it/304x455', 'http://placehold.it/304x455', 'http://placehold.it/304x455'],
    answer: ['2'],
    description: 'Найдите рисунок среди изображений'
  },
  {
    type: 'single',
    content: ['http://placehold.it/705x455'],
    answer: ['paint'],
    description: 'Угадай, фото или рисунок?'
  },
  {
    type: 'triple',
    content: ['http://placehold.it/304x455', 'http://placehold.it/304x455', 'http://placehold.it/304x455'],
    answer: ['2'],
    description: 'Найдите рисунок среди изображений'
  },
  {
    type: 'single',
    content: ['http://placehold.it/705x455'],
    answer: ['paint'],
    description: 'Угадай, фото или рисунок?'
  }
];


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
    .then(() => {
      Application.data = mockData;
    })
    .then(() => Application.showIntro())
    .catch((err) => Application.showError(err));
