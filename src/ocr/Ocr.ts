import isUrl from 'valid-url';

import { createOcrWorker } from '../helpers/index';
import InternalError from '../errors/InternalError';

const loadOcr = async (imageUrl: string): Promise<string> => {
  if (isUrl.isUri(imageUrl)) {
    return createOcrWorker(imageUrl);
  } else {
    throw new InternalError('The first argument provided is not a valid URL!');
  }
};

export default loadOcr;
