import colorsConvert from 'color-convert';

import { converColorsOptions, convertColors } from '../@types/index';
import { InternalError } from '../errors';

const RGBToHex = (
  firstRGBvalue: any,
) => {
  return colorsConvert.rgb.hex(firstRGBvalue);
};

const HexToRGB = (hexColor: string) => {
  return colorsConvert.hex.rgb(hexColor);
};
const convertColors = async(forWhat: convertColors, { hexCode, rgbCode }: converColorsOptions = {}): Promise<any> => {
  try {
    if(forWhat === 'HexToRGB' && hexCode) {
      return HexToRGB(hexCode.valueOf())
    }
  
    if(forWhat === 'HexToRGB' && rgbCode) {
      throw new InternalError('RGB code is not expected with "HexToRGB" param!')
    }
  
    const mapRgbCodes = rgbCode?.map(x => x)
  
    if(forWhat === 'RGBToHex' && rgbCode) {
      if(rgbCode.length > 3) {
        throw new InternalError('The RGB code array must be only 3 items!')
      }
      
      return RGBToHex(`#${mapRgbCodes}`)
    }
  
    if(forWhat === 'RGBToHex' && hexCode) {
      throw new InternalError('HEX code is not expected with "RGBToHex" param!')
    }
  } catch(error) {
    throw new InternalError(`An error occurred! \n Error: \n\n ${error}`)
  }
}

export default convertColors;
