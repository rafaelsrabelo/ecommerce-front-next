import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './../styles/global';
import { defaultTheme } from '@/styles/theme/defaults';

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
}
