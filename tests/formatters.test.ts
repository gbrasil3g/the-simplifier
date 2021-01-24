import { NumberFormatter } from '../src/simplifier';

it('Formatting numbers with spaces', async () => {
  expect(
    await NumberFormatter(5000, {
      formatter: ' ',
    })
  ).toEqual('5 000');
});

it('Formatting numbers with commas', async () => {
  expect(
    await NumberFormatter(10000, {
      formatter: ',',
    })
  ).toBe('10,000');
});

it('Formatting numbers with dots', async () => {
  expect(
    await NumberFormatter(15000, {
      formatter: '.',
    })
  ).toBe('15.000');
});

it('Formatting numbers with traces', async () => {
  expect(
    await NumberFormatter(20000, {
      formatter: '-',
    })
  ).toBe('20-000');
});
