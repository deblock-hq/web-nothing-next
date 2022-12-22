"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import UkFlag from "../../assets/en-flag.svg";
import FrFlag from "../../assets/fr-flag.svg";
import Arrow from "../../assets/arrow.svg";
import Blob from "../../views/Blob";
import Trace from "../../assets/Trace.svg";
// import "./index.css";
import Image from "next/image";
import Link from "next/link";
import "../../styles/CountrySelection.css";
import "../../styles/Header.css";

import useRouter from "next/router";

const CountrySlection = () => {
  const { t } = useTranslation("translation");
  const router = useRouter;
  console.log("router", router);

  return (
    <div className="CountrySelection">
      <div className="CountrySelection-container">
        <Header />
        <span className="titles">{t("only-available-countries")}</span>
        <div className="country-container">
          <span className="choose-country">
            <span>{t("choose-your-country")}</span>
            <Image src={Trace} alt="Trace" />
          </span>
          <ul>
            <Link href="/">
              <li>
                <div>
                  <Image
                    className="flag"
                    src={UkFlag}
                    alt="United Kingdom flag"
                  />
                  <span>United Kingdom</span>
                </div>
                <Image className="arrow" src={Arrow} alt="Arrow" />
              </li>
            </Link>
            <Link href="/fr-FR">
              <li>
                <div>
                  <Image className="flag" src={FrFlag} alt="France flag" />
                  <span>France</span>
                </div>
                <Image className="arrow" src={Arrow} alt="Arrow" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Blob className="country-blob-left" color="#F9DFE5" />
      <Blob className="country-blob-right" color="#ECE9D3" />
    </div>
  );
};

export default CountrySlection;
