const DOUBLE = {width: 468, height: 458};
const WIDE = {width: 705, height: 455};
const TRIPLE = {width: 304, height: 455};

const answer = (folder, file, size, type) => ({
  image: {
    url: `img/${folder}/${file}`,
    width: size.width,
    height: size.height
  },
  type
});

const questions = [
  {
    type: 'two-of-two',
    question: 'Угадайте для каждого изображения фото или рисунок?',
    answers: [
      answer('paint', 'paint_1.jpg', DOUBLE, 'painting'),
      answer('photo', 'photo_1.jpg', DOUBLE, 'photo')
    ]
  },
  {
    type: 'tinder-like',
    question: 'Угадай, фото или рисунок?',
    answers: [
      answer('paint', 'paint_2.jpg', WIDE, 'painting')
    ]
  },
  {
    type: 'one-of-three',
    question: 'Найдите рисунок среди изображений',
    answers: [
      answer('photo', 'photo_2.jpg', TRIPLE, 'photo'),
      answer('photo', 'photo_3.jpg', TRIPLE, 'photo'),
      answer('paint', 'paint_3.jpg', TRIPLE, 'painting')
    ]
  },
  {
    type: 'two-of-two',
    question: 'Угадайте для каждого изображения фото или рисунок?',
    answers: [
      answer('paint', 'paint_4.jpg', DOUBLE, 'painting'),
      answer('photo', 'photo_4.jpg', DOUBLE, 'photo')
    ]
  },
  {
    type: 'tinder-like',
    question: 'Угадай, фото или рисунок?',
    answers: [
      answer('paint', 'paint_5.jpg', WIDE, 'painting')
    ]
  },
  {
    type: 'one-of-three',
    question: 'Найдите рисунок среди изображений',
    answers: [
      answer('paint', 'paint_6.jpg', TRIPLE, 'painting'),
      answer('photo', 'photo_5.jpg', TRIPLE, 'photo'),
      answer('photo', 'photo_6.jpg', TRIPLE, 'photo')
    ]
  },
  {
    type: 'two-of-two',
    question: 'Угадайте для каждого изображения фото или рисунок?',
    answers: [
      answer('photo', 'photo_7.jpg', DOUBLE, 'photo'),
      answer('paint', 'paint_7.jpg', DOUBLE, 'painting')
    ]
  },
  {
    type: 'tinder-like',
    question: 'Угадай, фото или рисунок?',
    answers: [
      answer('photo', 'photo_8.jpg', WIDE, 'photo')
    ]
  },
  {
    type: 'one-of-three',
    question: 'Найдите рисунок среди изображений',
    answers: [
      answer('photo', 'photo_9.jpg', TRIPLE, 'photo'),
      answer('photo', 'photo_10.jpg', TRIPLE, 'photo'),
      answer('paint', 'paint_8.jpg', TRIPLE, 'painting')
    ]
  },
  {
    type: 'two-of-two',
    question: 'Угадайте для каждого изображения фото или рисунок?',
    answers: [
      answer('paint', 'paint_9.jpg', DOUBLE, 'painting'),
      answer('paint', 'paint_10.jpg', DOUBLE, 'painting')
    ]
  }
];

export default questions;
