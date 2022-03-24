import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import { lightTheme, darkTheme, defaultTheme, GlobalStyles } from '../Theme';
import '../styles/globals.css';
import Hero from '../components/Hero';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <button onClick={toggleTheme}>Switch Theme</button>
    </ThemeProvider>
  );
}

export default MyApp;
