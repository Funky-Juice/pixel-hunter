const gameData = {
  gameLevels: new Set([
    {
      type: 'gameTypeOne',
      task: 'Угадайте для каждого изображения фото или рисунок?',
      gameOption: [
        {
          image: 'img/paint/paint_1.jpg',
          alt: 'Option 1',
          correctAnswer: 'paint',
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
          image: 'img/photo/photo_1.jpg',
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
          image: 'img/paint/paint_2.jpg',
          alt: 'Option 1',
          correctAnswer: 'paint',
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
      correctAnswer: 2,
      gameOption: [
        {
          image: 'img/photo/photo_2.jpg',
          alt: 'Option 1'
        },
        {
          image: 'img/photo/photo_3.jpg',
          alt: 'Option 1'
        },
        {
          image: 'img/paint/paint_3.jpg',
          alt: 'Option 1'
        }
      ]
    },
    {
      type: 'gameTypeOne',
      task: 'Угадайте для каждого изображения фото или рисунок?',
      gameOption: [
        {
          image: 'img/paint/paint_4.jpg',
          alt: 'Option 1',
          correctAnswer: 'paint',
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
          image: 'img/photo/photo_4.jpg',
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
          image: 'img/paint/paint_5.jpg',
          alt: 'Option 1',
          correctAnswer: 'paint',
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
          image: 'img/paint/paint_6.jpg',
          alt: 'Option 1'
        },
        {
          image: 'img/photo/photo_5.jpg',
          alt: 'Option 1'
        },
        {
          image: 'img/photo/photo_6.jpg',
          alt: 'Option 1'
        }
      ]
    },
    {
      type: 'gameTypeOne',
      task: 'Угадайте для каждого изображения фото или рисунок?',
      gameOption: [
        {
          image: 'img/photo/photo_7.jpg',
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
          image: 'img/paint/paint_7.jpg',
          alt: 'Option 2',
          correctAnswer: 'paint',
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
          image: 'img/photo/photo_8.jpg',
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
      correctAnswer: 2,
      gameOption: [
        {
          image: 'img/photo/photo_9.jpg',
          alt: 'Option 1'
        },
        {
          image: 'img/photo/photo_10.jpg',
          alt: 'Option 1'
        },
        {
          image: 'img/paint/paint_8.jpg',
          alt: 'Option 1'
        }
      ]
    },
    {
      type: 'gameTypeOne',
      task: 'Угадайте для каждого изображения фото или рисунок?',
      gameOption: [
        {
          image: 'img/paint/paint_9.jpg',
          alt: 'Option 1',
          correctAnswer: 'paint',
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
          image: 'img/paint/paint_10.jpg',
          alt: 'Option 2',
          correctAnswer: 'paint',
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
