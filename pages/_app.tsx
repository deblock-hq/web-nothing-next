import "../styles/globals.css";

import type { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head";
import { GlobalContextProvider } from "../context/globalContext";
import { Suspense, useCallback, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale!, ["footer"])),
//     },
//   };
// };

function App({ Component, pageProps }: AppProps) {
  // const { t } = useTranslation("footer");

  const [whitelistEmail, setWhitelistEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const displayModal = useCallback(() => {
    if (!openModal) {
      setOpenModal(true);
    }
  }, [openModal]);

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
        <Suspense fallback="loading">
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
        </Suspense>
      </GlobalContextProvider>
    </>
  );
}

export default appWithTranslation(App);
