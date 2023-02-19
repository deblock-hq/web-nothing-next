import "../styles/globals.css";

import type { AppProps } from "next/app";
// import "../i18n/i18n";
import { appWithTranslation } from "next-i18next";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head";
import { GlobalContextProvider } from "../context/globalContext";
import { useCallback, useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [whitelistEmail, setWhitelistEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const displayModal = useCallback(() => {
    if (!openModal && whitelistEmail) {
      setOpenModal(true);
    }
  }, [openModal, whitelistEmail]);

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
        <Header displayModal={displayModal} />
        <Component
          {...pageProps}
          displayModal={displayModal}
          whitelistEmail={whitelistEmail}
          setWhitelistEmail={setWhitelistEmail}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default appWithTranslation(App);
