import { NumberFormatter } from '../src/simplifier';

test('NumberFormatter', () => {
  expect(NumberFormatter(5000, ' ')).toBe('5 000')
  expect(NumberFormatter(5000, ',')).toBe('5,000')
  expect(NumberFormatter(5000, '-')).toBe('5-000')
  expect(NumberFormatter(5000, '.')).toBe('5.000')
});
