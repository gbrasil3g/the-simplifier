import hexRegex from 'hex-color-regex';

const validateColorRegex = (hex: string): boolean => {
  return hexRegex({ strict: true }).test(hex);
};

export default validateColorRegex;
