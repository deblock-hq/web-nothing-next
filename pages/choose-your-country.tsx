"use client";
import React from "react";
import { useTranslation } from "next-i18next";
import Header from "../src/components/Header";
import UkFlag from "../src/assets/en-flag.svg";
import FrFlag from "../src/assets/fr-flag.svg";
import Arrow from "../src/assets/arrow.svg";
import Blob from "../src/views/Blob";
import Trace from "../src/assets/Trace.svg";
// import "./index.css";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

const CountrySlection = () => {
  const { t } = useTranslation("common");

  return (
    <div className="CountrySelection">
      <div className="CountrySelection-container">
        {/* <Header /> */}
        <span className="titles">{t("only-available-countries")}</span>
        <div className="country-container">
          <span className="choose-country">
            <span>{t("choose-your-country")}</span>
            <Image src={Trace} alt="Trace" />
          </span>
          <ul>
            <Link href="/en-GB">
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
