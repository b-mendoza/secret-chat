import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';
import superjson from 'superjson';

import type { AppRouter } from '@/backend/routers/app';

import { IS_SSR } from '@/constants';

const SERVER_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/api/trpc`
  : 'http://localhost:3000/api/trpc';

const TOTAL_SECONDS_ON_A_DAY = 60 * 60 * 24;

const App = (props: AppProps) => <props.Component {...props.pageProps} />;

export default withTRPC<AppRouter>({
  config() {
    if (!IS_SSR) {
      return {
        transformer: superjson,
        url: '/api/trpc',
      };
    }

    return {
      headers: {
        'x-ssr': '1',
      },
      queryClientConfig: {
        defaultOptions: {
          queries: { staleTime: 60 },
        },
      },
      transformer: superjson,
      url: SERVER_URL,
    };
  },
  ssr: true,
  responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }

    return {
      headers: {
        'cache-control': `s-maxage=1, stale-while-revalidate=${TOTAL_SECONDS_ON_A_DAY}`,
      },
    };
  },
})(App);
