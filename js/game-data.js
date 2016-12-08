const gameData = {
  gameLevels: new Set([
    {
      type: 'gameScreenOne',
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
    },
    {
      type: 'gameScreenTwo',
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
    },
    {
      type: 'gameScreenThree',
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
    },
    {
      type: 'gameScreenOne',
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
    },
    {
      type: 'gameScreenTwo',
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
    },
    {
      type: 'gameScreenThree',
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
    },
    {
      type: 'gameScreenOne',
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
    },
    {
      type: 'gameScreenTwo',
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
    },
    {
      type: 'gameScreenThree',
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
    },
    {
      type: 'gameScreenThree',
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
    }
  ]),
  gameStats: {
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
  }
};

const gameLevels = gameData.gameLevels;
const gameStats = gameData.gameStats;

export {gameLevels, gameStats};
