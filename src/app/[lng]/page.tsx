"use client";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
// import { useParams, useNavigate } from "react-router-dom";
// import { otherLanguagesAvailable } from "../i18n/i18n";
import SplashPage_v2 from "../../views/SplashPage_v2";
import { languages, fallbackLng } from "../../i18n/settings";

import "../../styles/globals.css";
import "../../styles/SplashPage.css";
import "../../styles/Blob.css";
import "../../styles/Header.css";

export default async function Page({ params }: { params: { lng: string } }) {
  if (languages.indexOf(params.lng) < 0) params.lng = fallbackLng;
  const { t } = await useTranslation(params.lng);
  // const { t, i18n } = useTranslation();
  // const { lng } = useParams();
  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (!otherLanguagesAvailable.includes(lng)) {
  //     navigate("/");
  //   }

  //   if (!lng) i18n.changeLanguage("en");
  // }, []);

  return (
    <Suspense fallback="loading">
      <SplashPage_v2
        h1="deblock"
        // @ts-ignore
        h2={t("non-custodial-wallet")}
        span={t("coming-soon")}
      />
    </Suspense>
  );
}
