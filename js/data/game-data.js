const questions = [
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

const INIT_STATE = Object.freeze({
  level: 0,
  time: 30,
  lives: 3
});

const initScores = Array.from({length: questions.length}, () => 'unknown');

const speed = {
  fast: 20,
  slow: 10,
  timeOver: 0
};

const points = {
  correct: 100,
  bonus: 50,
  penalty: 50
};

export {questions, INIT_STATE, initScores, speed, points};
