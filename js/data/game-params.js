
const INIT_STATE = Object.freeze({
  level: 0,
  time: 30,
  lives: 3
});

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

export {INIT_STATE, speed, points};
