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
  }
];

const gameParams = {
  timer: 0,
  lives: 3
};

const gameStats = Array.from({length: questions.length}, () => 'unknown');

export {questions, gameParams, gameStats};
