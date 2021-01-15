import { convertTimeOptions } from '../@types/index';

//@ts-ignore
const convertTime = async(valueToConvert: number,{ from, to }: convertTimeOptions = {}): Promise<any> => {
  if (from === 'hours' && to === 'minutes') {
    return valueToConvert * 60;
  }

  if (from === 'minutes' && to === 'hours') {
    return valueToConvert / 60;
  }

  if (from === 'hours' && to === 'seconds') {
    return valueToConvert * 3600;
  }

  if (from === 'seconds' && to === 'hours') {
    return valueToConvert / 3600;
  }

  if (from === 'minutes' && to === 'seconds') {
    return valueToConvert * 60;
  }

  if (from === 'seconds' && to === 'minutes') {
    return valueToConvert / 60;
  }
};

export default convertTime;
