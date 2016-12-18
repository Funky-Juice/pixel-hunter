const gameData = {
  gameLevels: new Set([
    {
      type: 'gameTypeOne',
      task: 'Угадайте для каждого изображения фото или рисунок?',
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1',
          correctAnswer: 'photo',
          answerParams: [
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
          correctAnswer: 'photo',
          answerParams: [
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
    },
    {
      type: 'gameTypeTwo',
      task: 'Угадай, фото или рисунок?',
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1',
          correctAnswer: 'photo',
          answerParams: [
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
    },
    {
      type: 'gameTypeThree',
      task: 'Найдите рисунок среди изображений',
      correctAnswer: 0,
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1'
        },
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1'
        },
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1'
        }
      ]
    },
    {
      type: 'gameTypeOne',
      task: 'Угадайте для каждого изображения фото или рисунок?',
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1',
          correctAnswer: 'photo',
          answerParams: [
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
          correctAnswer: 'photo',
          answerParams: [
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
    },
    {
      type: 'gameTypeTwo',
      task: 'Угадай, фото или рисунок?',
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1',
          correctAnswer: 'photo',
          answerParams: [
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
    },
    {
      type: 'gameTypeThree',
      task: 'Найдите рисунок среди изображений',
      correctAnswer: 0,
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1'
        },
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1'
        },
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1'
        }
      ]
    },
    {
      type: 'gameTypeOne',
      task: 'Угадайте для каждого изображения фото или рисунок?',
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1',
          correctAnswer: 'photo',
          answerParams: [
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
          correctAnswer: 'photo',
          answerParams: [
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
    },
    {
      type: 'gameTypeTwo',
      task: 'Угадай, фото или рисунок?',
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1',
          correctAnswer: 'photo',
          answerParams: [
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
    },
    {
      type: 'gameTypeThree',
      task: 'Найдите рисунок среди изображений',
      correctAnswer: 0,
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1'
        },
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1'
        },
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1'
        }
      ]
    },
    {
      type: 'gameTypeOne',
      task: 'Угадайте для каждого изображения фото или рисунок?',
      gameOption: [
        {
          image: 'http://placehold.it/468x458',
          alt: 'Option 1',
          correctAnswer: 'photo',
          answerParams: [
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
          correctAnswer: 'photo',
          answerParams: [
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
    }
  ])
};

const gameLevels = gameData.gameLevels;

export default gameLevels;
