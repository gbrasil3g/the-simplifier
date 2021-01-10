import { Formatter } from './@types/index';
import { formatNum } from './formatters/index';
import { isValidHexColor } from './validators/index';

import loadOcr from './ocr/Ocr';

export default class TheSimplifier {
  public async formatNum(input: number, formatter: Formatter): Promise<string> {
    return formatNum(input, formatter);
  }

  public async readImage(imageUrl: string): Promise<void> {
    return loadOcr(imageUrl).then((result) => {
      console.log(result);
    });
  }

  public async isHex(hexToValidate: string): Promise<boolean> {
    return isValidHexColor(hexToValidate);
  }
}
