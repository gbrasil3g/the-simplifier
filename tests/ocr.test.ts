import { readImage } from '../src/simplifier';

it('Should return "PURE TEXT"', async () => {
  let imageUrl =
    'https://store-images.s-microsoft.com/image/apps.54739.14266069062940839.0386a7c7-7a53-4e48-b184-3c1b8af04617.60917b6c-f77d-4aef-baf4-b8aa891c5889?mode=scale&q=90&h=720&w=1280';

  expect(await readImage(imageUrl)).toBeDefined();
});
