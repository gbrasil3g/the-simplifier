import { isValidHexColor, isWebsiteUp } from '../src/simplifier';

test('isValidHexColor', () => {
  expect(isValidHexColor('#FF0000')).toBe(true);
  expect(isValidHexColor('#FFFFFF')).toBe(true);
  expect(isValidHexColor('#FF0FF0')).toBe(true);
  expect(isValidHexColor('0')).toBe(false);
  expect(isValidHexColor('#AAAAAAAAAAAAAAAAAA')).toBe(false);
  expect(isValidHexColor('any hex code here')).toBe(false);
});

it('Should return true if provided website is online', async () => {
  expect(await isWebsiteUp('https://www.youtube.com')).toBeTruthy();

  expect(await isWebsiteUp('http://nicebanana.io')).toBeFalsy();
});
