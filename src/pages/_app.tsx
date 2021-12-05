import GlobalStyle, { darkTheme } from "constants/globalStyle";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function AykutSarac({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default AykutSarac;
