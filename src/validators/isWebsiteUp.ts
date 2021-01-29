import got from 'got';
import { URL } from 'url';

import { InternalError } from '../errors';

const statusCodes = {
  isUp: 1,
  isDown: 2,
  invalidDomain: 3,
};

const isWebsiteUp = async (websiteUrl: string): Promise<boolean> => {
  const hostname = encodeURIComponent(new URL(websiteUrl).hostname);

  const { status_code: statusCode } = await got(
    `https://isitup.org/${hostname}.json`,
    {
      headers: {
        'user-agent': 'https://github.com/gbrasil3g/the-simplifier',
      },
    }
  ).json();

  if (statusCode === statusCodes.invalidDomain) {
    throw new InternalError('Invalid domain provided');
  }

  return statusCode === statusCodes.isUp;
};

export default isWebsiteUp;
