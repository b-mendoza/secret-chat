import { trpc } from '@/utils/trpc';

const IndexPage = () => {
  const helloWorld = trpc.useQuery(['helloWorld', { text: 'bryan' }]);

  const { data } = helloWorld;

  return <h1>{JSON.stringify(data, null, 2)}</h1>;
};

export default IndexPage;
