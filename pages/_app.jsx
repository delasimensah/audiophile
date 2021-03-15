import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audiophile ecommerce website" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
