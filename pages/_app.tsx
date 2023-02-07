import "../styles/globals.css";

import type { AppProps } from "next/app";
// import "../i18n/i18n";
import { appWithTranslation } from "next-i18next";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head";
import { GlobalContextProvider } from "../context/globalContext";
import { ScrollContainer } from "react-scroll-motion";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Current account x Non-custodial Wallet | Deblock</title>
        <meta
          name="description"
          content="Take control of your money. Receive your salary or pay your rent from your current account with £ or your crypto assets. Everything in one non custodial wallet.g"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>

      <GlobalContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default appWithTranslation(App);
