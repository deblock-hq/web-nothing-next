import "../styles/globals.css";

import type { AppProps } from "next/app";
// import "../i18n/i18n";
import { appWithTranslation } from "next-i18next";
import Header from "../src/components/SiteHeader";
import Footer from "../src/components/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(App);
