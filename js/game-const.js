// export const gameStats = {
//   wrong: 'wrong',
//   slow: 'slow',
//   fast: 'fast',
//   correct: 'correct',
//   unknown: 'unknown'
// };

export const indicators = {
  timer: 0,
  lives: ['empty', 'full', 'full']
};

export const gameOne = {
  task: 'Угадайте для каждого изображения фото или рисунок?',
  questions: [
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
  ],
  stats: ['wrong', 'slow', 'fast', 'correct', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown']
};

export const gameTwo = {
  task: 'Угадай, фото или рисунок?',
  questions: [
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
  ],
  stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown']
};

export const gameThree = {
  task: 'Найдите рисунок среди изображений',
  answers: [
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
  ],
  stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown']
};

export const gameStats = {
  title: 'Победа!',
  results: [
    {
      number: '1.',
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      multiplier: '×&nbsp;100',
      scores: 900,
      total: 950,
      extras: [
        {
          title: 'Бонус за скорость:',
          type: 'fast',
          amount: '1&nbsp;',
          multiplier: '×&nbsp;50',
          scores: 50
        },
        {
          title: 'Бонус за жизни:',
          type: 'heart',
          amount: '2&nbsp;',
          multiplier: '×&nbsp;50',
          scores: 100
        },
        {
          title: 'Штраф за медлительность:',
          type: 'slow',
          amount: '2&nbsp;',
          multiplier: '×&nbsp;50',
          scores: -100
        }
      ]
    },
    {
      number: '2.',
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'wrong', 'fast', 'wrong'],
      multiplier: '',
      scores: '',
      total: 'fail',
      extras: []
    },
    {
      number: '3.',
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      multiplier: '×&nbsp;100',
      scores: 900,
      total: 950,
      extras: [
        {
          title: 'Бонус за жизни:',
          type: 'heart',
          amount: '2&nbsp;',
          multiplier: '×&nbsp;50',
          scores: 100
        }
      ]
    }
  ]
};
