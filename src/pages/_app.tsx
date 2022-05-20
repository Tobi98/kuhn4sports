import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@material-ui/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <StyledThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </StyledThemeProvider>
            </ThemeProvider>
        </>
    );
}

export default MyApp;

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        min-height: 100vh;
    }

    p, h1, h2, h3, h4, h5, h6, a {
        font-family: roboto, sans-serif;
    }
`;
