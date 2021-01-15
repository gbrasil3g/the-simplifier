import { convertColors, convertTime } from '../src/simplifier';

test('convertColors when first param is "HexToRGB"', async () => {
  expect(
    await convertColors('HexToRGB', {
      hexCode: '#FF0000'
    })
  ).toStrictEqual([255, 0 ,0])
});

test('convertColors when first param is "RGBToHex"', async () => {
  expect(
    await convertColors('RGBToHex', {
      rgbCode: [255, 0, 0]
    })
  ).toBe('000205')
});

test('convertTime - 5000 seconds to minutes', async () => {
  expect(
    await convertTime(5000, {
      from: 'seconds',
      to: 'minutes'
    })
  ).toBe(83.33333333333333)
});

test('convertTime - 5 minutes to seconds', async () => {
  expect(
    await convertTime(5, {
      from: 'minutes',
      to: 'seconds'
    })
  ).toBe(300)
});

test('convertTime - 3 hours to minutes', async () => {
  expect(
    await convertTime(3, {
      from: 'hours',
      to: 'minutes'
    })
  ).toBe(180)
});

test('convertTime - 150 minutes to hours', async () => {
  expect(
    await convertTime(150, {
      from: 'minutes',
      to: 'hours'
    })
  ).toBe(2.5)
});

test('convertTime - 3 hours to seconds', async () => {
  expect(
    await convertTime(3, {
      from: 'hours',
      to: 'seconds'
    })
  ).toBe(10800)
});

test('convertTime - 15,000 seconds to hours', async () => {
  expect(
    await convertTime(15000, {
      from: 'seconds',
      to: 'hours'
    })
  ).toBe(4.166666666666667)
});
