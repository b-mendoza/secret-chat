import { createServer } from '@graphql-yoga/node';
import type { NextApiHandler, PageConfig } from 'next';

import { schema } from '@/backend/schema';

const server = createServer<NextApiHandler<unknown>>({
  schema,
});

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

export default server;
