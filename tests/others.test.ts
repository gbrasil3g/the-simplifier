import {
  generateChars,
  getRandomInt,
  getRandomFromArray,
} from '../src/simplifier';

it('Should return a random integer between 10 and 100', () => {
  expect(getRandomInt(10, 100)).toBeDefined();
});

it('Should generate 10 random chars', () => {
  expect(generateChars(10)).toBeDefined();
});

it('Should return a random item from the provided array', () => {
  let array = [1, 'two', true];

  expect(getRandomFromArray(array)).toBeDefined();
});
