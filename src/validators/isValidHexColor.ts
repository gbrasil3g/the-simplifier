import { validateColorRegex } from '../helpers/index';

const isValidHexColor = (hexToValidate: string): boolean => {
  return validateColorRegex(hexToValidate);
};

export default isValidHexColor;
