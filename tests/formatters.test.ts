import { NumberFormatter } from '../src/simplifier';

it('Formatting numbers with spaces', async () => {
  expect(await NumberFormatter(5000, ' ')).toEqual('5 000');
});

it('Formatting numbers with commas', async () => {
  expect(await NumberFormatter(10000, ',')).toBe('10,000');
});

it('Formatting numbers with dots', async () => {
  expect(await NumberFormatter(15000, '.')).toBe('15.000');
});

it('Formatting numbers with traces', async () => {
  expect(await NumberFormatter(20000, '-')).toBe('20-000');
});
