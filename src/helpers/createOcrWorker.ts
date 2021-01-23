import { createWorker } from 'tesseract.js';
import isUrl from 'valid-url';

import InternalError from '../errors/InternalError';

const worker = createWorker();

const createOcrWorker = async (imageUrl: string): Promise<string> => {
  if (isUrl.isUri(imageUrl)) {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const {
      data: { text },
    } = await worker.recognize(imageUrl);
    await worker.terminate();

    return text;
  } else {
    throw new InternalError('The first argument provided is not a valid URL!');
  }
};

export default createOcrWorker;
