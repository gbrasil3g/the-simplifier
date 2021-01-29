const getRandomFromArray = (
  arrayParam: string[] | number[] | boolean[] | unknown[]
): string | boolean | number | unknown => {
  const result = arrayParam[Math.floor(Math.random() * arrayParam.length)];

  return result;
};

export default getRandomFromArray;
