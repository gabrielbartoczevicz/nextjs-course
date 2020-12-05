import GlobalStyle from '../styles/GlobalStyle';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App
