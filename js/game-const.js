export const gameStats = {
  wrong: 'wrong',
  slow: 'slow',
  fast: 'fast',
  correct: 'correct',
  unknown: 'unknown'
};

export const indicators = {
  timer: 0,
  lives: ['empty', 'full', 'full']
};

export const gameOne = {
  task: 'Угадайте для каждого изображения фото или рисунок?',
  question: [
    {
      image: 'http://placehold.it/468x458',
      alt: 'Option 1',
      answer: [
        {
          text: 'Фото',
          value: 'photo',
          name: 'question1',
          class: 'game__answer--photo'
        },
        {
          text: 'Рисунок',
          value: 'paint',
          name: 'question1',
          class: 'game__answer--paint'
        }
      ]
    },
    {
      image: 'http://placehold.it/468x458',
      alt: 'Option 2',
      answer: [
        {
          text: 'Фото',
          value: 'photo',
          name: 'question2',
          class: 'game__answer--photo'
        },
        {
          text: 'Рисунок',
          value: 'paint',
          name: 'question2',
          class: 'game__answer--paint'
        }
      ]
    }
  ]
};

export const gameTwo = {
  task: 'Угадай, фото или рисунок?',
  question: [
    {
      image: 'http://placehold.it/468x458',
      alt: 'Option 1',
      answer: [
        {
          text: 'Фото',
          value: 'photo',
          name: 'question1',
          class: 'game__answer--photo'
        },
        {
          text: 'Рисунок',
          value: 'paint',
          name: 'question1',
          class: 'game__answer--paint  game__answer--wide'
        }
      ]
    }
  ]
};

export const gameThree = {
  task: 'Найдите рисунок среди изображений',
  answer: [
    {
      image: 'http://placehold.it/468x458',
      alt: 'Option 1',
      class: ''
    },
    {
      image: 'http://placehold.it/468x458',
      alt: 'Option 1',
      class: 'game__option--selected'
    },
    {
      image: 'http://placehold.it/468x458',
      alt: 'Option 1',
      class: ''
    }
  ]
};
