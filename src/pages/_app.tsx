import type { AppProps } from 'next/app';

const App = (props: AppProps) => <props.Component {...props.pageProps} />;

export default App;
