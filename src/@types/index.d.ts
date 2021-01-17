export type Formatter = '.' | ',' | '-' | ' ';

export type convertColorsType = 'RGBToHex' | 'HexToRGB';

export interface converColorsOptions {
  hexCode?: string;
  rgbCode?: number[];
}

export interface convertTimeOptions {
  from: 'minutes' | 'hours' | 'seconds';
  to: 'minutes' | 'hours' | 'seconds';
}
