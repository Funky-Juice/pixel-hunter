const questions = [
  {
    type: 'single',
    content: ['http://placehold.it/705x455'],
    answers: 'painting',
    description: 'Угадай, фото или рисунок?'
  },
  {
    type: 'double',
    content: ['http://placehold.it/468x458', 'http://placehold.it/468x458'],
    answers: ['painting', 'photo'],
    description: 'Угадайте для каждого изображения фото или рисунок?'
  },
  {
    type: 'triple',
    content: ['http://placehold.it/304x455', 'http://placehold.it/304x455', 'http://placehold.it/304x455'],
    answers: 2,
    description: 'Найдите рисунок среди изображений'
  },
  {
    type: 'single',
    content: ['http://placehold.it/705x455'],
    answers: 'painting',
    description: 'Угадай, фото или рисунок?'
  },
  {
    type: 'triple',
    content: ['http://placehold.it/304x455', 'http://placehold.it/304x455', 'http://placehold.it/304x455'],
    answers: 2,
    description: 'Найдите рисунок среди изображений'
  },
  {
    type: 'double',
    content: ['http://placehold.it/468x458', 'http://placehold.it/468x458'],
    answers: ['painting', 'photo'],
    description: 'Угадайте для каждого изображения фото или рисунок?'
  },
  {
    type: 'triple',
    content: ['http://placehold.it/304x455', 'http://placehold.it/304x455', 'http://placehold.it/304x455'],
    answers: 2,
    description: 'Найдите рисунок среди изображений'
  },
  {
    type: 'single',
    content: ['http://placehold.it/705x455'],
    answers: 'painting',
    description: 'Угадай, фото или рисунок?'
  },
  {
    type: 'triple',
    content: ['http://placehold.it/304x455', 'http://placehold.it/304x455', 'http://placehold.it/304x455'],
    answers: 2,
    description: 'Найдите рисунок среди изображений'
  },
  {
    type: 'single',
    content: ['http://placehold.it/705x455'],
    answers: 'painting',
    description: 'Угадай, фото или рисунок?'
  }
];

const INIT_STATE = Object.freeze({
  level: 0,
  timer: 30,
  lives: 3
});

const initScores = Array.from({length: questions.length}, () => 'unknown');

export {questions, INIT_STATE, initScores};
