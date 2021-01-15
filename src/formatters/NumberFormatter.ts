import { Formatter } from '../@types/index';

const NumberFormatter = (input: number, formatter: Formatter) => {
  const n = String(input),
    p = n.indexOf('.');

  const result = n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
    p < 0 || i < p ? `${m}${formatter}` : m
  );

  return result;
};

export default NumberFormatter;