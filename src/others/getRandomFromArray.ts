const getRandomFromArray = (
  arrayParam: string[] | number[] | boolean[] | any[]
): string | boolean | number | any => {
  const result = arrayParam[Math.floor(Math.random() * arrayParam.length)];

  return result;
};

export default getRandomFromArray;
