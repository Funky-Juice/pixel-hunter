/* пока не ясно, как правильно описать структуру данных. сейчас это скорее "заглушки"
 главный вопрос - как связать ответы и вопросы
 статистика явно должна иметь более сложную структуру*/
export const question = {
  one: 'http://placehold.it/468x458',
  two: 'http://placehold.it/468x458',
  three: 'http://placehold.it/468x458',
  four: 'http://placehold.it/468x458',
  five: 'http://placehold.it/468x458',
  six: 'http://placehold.it/468x458'
};

export const answer = {
  photo: 'Фото',
  paint: 'Рисунок'
};

export const verdict = {
  right: 1,
  wrong: 0
};

export const gameStats = {
  wrong: 'wrong',
  slow: 'slow',
  fast: 'fast',
  correct: 'correct',
  unknown: 'unknown'
};

export const indicators = {
  timer: 'NN',
  lives: {
    emptyHeart: 'img/heart__empty.svg',
    fullHeart: 'img/heart__full.svg'
  }
};
