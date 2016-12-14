export const initialData = {
  timer: 30,
  lives: 3,
  stats: ['unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown'],
};

export const setLives = (data, lives) => {
  if (lives > initialData.lives) {
    throw new RangeError(`lives > ${initialData.lives}`);
  }
  if (lives < 0) {
    throw new RangeError('lives < 0');
  }
  const copiedObject = Object.assign({}, data, {lives: lives});
  if (data === copiedObject) {
    throw new Error('Returned object should not be equal to object in the parametrs of the function');
  }
  return copiedObject;
};

export const setTimer = (data, timer) => {
  if (timer > initialData.timer) {
    throw new RangeError(`timer > ${initialData.timer}`);
  }
  if (timer < 0) {
    throw new RangeError('timer < 0');
  }
  const copiedObject = Object.assign({}, data, {timer: timer});
  if (data === copiedObject) {
    throw new Error('Returned object should not be equal to object in the parametrs of the function');
  }
  return copiedObject;
};
