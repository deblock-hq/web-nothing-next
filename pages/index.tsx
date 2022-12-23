import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Suspense } from "react";
import { GetStaticProps } from "next";
import SplashPage_v2 from "../src/views/SplashPage_v2";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>Current account x Non-custodial Wallet | Deblock</title>
        <meta
          name="description"
          content="Take control of your money. Receive your salary or pay your rent from your current account with £ or your crypto assets. Everything in one non custodial wallet.g"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <main>
        <Suspense fallback="loading">
          <SplashPage_v2
            h1="deblock"
            h2={t("non-custodial-wallet")}
            span={t("coming-soon")}
          />
        </Suspense>
      </main>
    </div>
  );
}
