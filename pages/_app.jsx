import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../utils/muiTheme";
import "../styles/globals.css";
import "react-awesome-lightbox/build/style.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audiophile ecommerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
