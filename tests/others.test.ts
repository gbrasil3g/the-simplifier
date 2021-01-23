import { generateChars, getRandomInt } from '../src/simplifier'

it('Should return a random integer between 10 and 100', () => {

  expect(getRandomInt(10, 100)).toBeDefined()

})

it('Should generate 10 random chars', () => {

  expect(generateChars(10)).toBeDefined()

})