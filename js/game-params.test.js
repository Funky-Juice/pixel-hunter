import assert from 'assert';
import {initialData, setLives, setTimer, setStats} from './game-params.js';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe('Game parametrs', () => {
  describe('Character lives', () => {
    it('changes number of lives', () => {
      assert.equal(setLives({}, 3).lives, 3);
    });
    it('if lives > 3', () => {
      assert.throws(() => setLives({}, 4));
    });
    it('if lives < 0', () => {
      assert.throws(() => setLives({}, -1));
    });
  });

  describe('Timer', () => {
    it('changes timer', () => {
      assert.equal(setTimer({}, 1).timer, 1);
    });
    it('if timer > 30', () => {
      assert.throws(() => setLives({}, 40));
    });
    it('if timer < 0', () => {
      assert.throws(() => setLives({}, -1));
    });
  });

  describe('stats', () => {
    it('changes stats', () => {
      assert.equal(setStats(initialData, 'slow', 3).stats[3], 'slow');
    });
    it('changes stats', () => {
      assert.equal(setStats(initialData, 'fast', 4).stats[4], 'fast');
    });
    it('changes stats', () => {
      assert.equal(setStats(initialData, 'correct', 5).stats[5], 'correct');
    });
    it('changes stats', () => {
      assert.equal(setStats(initialData, 'wrong', 6).stats[6], 'wrong');
    });
    it('changes stats', () => {
      assert.equal(setStats(initialData, 'unknown', 6).stats[6], 'unknown');
    });
    it('if stats has another values', () => {
      assert.throws(() => setStats(initialData, 'super', 7));
    });
  });
});
