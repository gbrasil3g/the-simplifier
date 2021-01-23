export type Formatter = '.' | ',' | '-' | ' ';

const NumberFormatter = async (
  input: number,
  formatter: Formatter
): Promise<string> => {
  const n = String(input),
    p = n.indexOf('.');

  const result = n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
    p < 0 || i < p ? `${m}${formatter}` : m
  );

  return result;
};

export default NumberFormatter;
