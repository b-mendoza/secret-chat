import * as trpcNext from '@trpc/server/adapters/next';

import { appRouter } from '@/backend/routers/app';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      console.error('Something Went Wrong', error);
    }
  },
  batching: {
    enabled: true,
  },
});
