import ThemeContainer from '../context/theme/ThemeContainer';

const App = ({ Component, pageProps }) => (
  <ThemeContainer>
    <Component {...pageProps} />
  </ThemeContainer>
);

export default App
