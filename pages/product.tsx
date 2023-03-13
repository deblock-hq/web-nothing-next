import Lottie, { useLottie, useLottieInteractivity } from "lottie-react";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import BetterBank from "../src/assets/lottie/product/BetterBank.json";
import CryptoWallet from "../src/assets/lottie/product/CryptoWallet.json";
import Licensed from "../src/assets/lottie/product/Licensed.json";
import MaxSecurity from "../src/assets/lottie/product/MaxSecurity.json";
import UniqueCardImage from "../src/assets/lottie/product/DebitCard.json";
import SafeAnimation from "../src/assets/lottie/product/SelfCustody.json";

import Blob from "../src/views/Blob";
import { devices } from "../src/utils/devices";
import { ScrollAnimation } from "../src/utils/ScrollAnimation";
import { Trans, useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface Props {
  backgroundColor: string;
  height: string;
  padding?: string;
}

const ProductContainer = styled.div`
  max-width: 958px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 40px;
  padding-bottom: 134px;
  /* padding-top: 40px; */
  padding: 72px 12px 134px 12px;

  ul {
    list-style: initial;
    font-size: 16px;
    line-height: 28px;
    padding-left: 16px;

    li {
      ::marker {
        color: #f69d17;
      }
    }
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    text-align: center;
    letter-spacing: 0.16px;
  }

  h2 {
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.084px;
  }

  p {
    text-align: center;
    line-height: 32px;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
  }

  .image-container {
    z-index: 2;
  }

  .texte-container {
    width: 45%;
    z-index: 2;
  }

  .bold-text {
    font-weight: 700;
  }

  .Blob {
    position: absolute;
    z-index: 1;
  }

  @media ${devices.tabletMax} {
    gap: 54px;

    > div {
      width: 100%;
    }

    h1 {
      font-size: 30px;
      line-height: 57px;
      padding: 0;
    }
    h2 {
      font-size: 28px;
      line-height: 34px;
    }
    p {
      text-align: center;
      font-size: 18px;
    }
    .Blob {
      display: none;
    }
    .image-container {
      height: 368px;
      width: 100%;
      max-width: 100% !important;
      align-self: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff9f3;
  border-radius: 30px;
  height: 508px;
  gap: 80px;
  position: relative;
  overflow: hidden;

  .image-container {
    max-width: 364px;
  }

  .texte-container {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    z-index: 2;
  }

  .blob-left {
    top: 0;
    left: -400px;
  }

  .blob-bot {
    top: 300px;
    left: -500px;
  }

  @media ${devices.tabletMax} {
    flex-direction: column;
    height: auto;
    background-color: transparent;
    gap: 34px;
    align-items: flex-start;

    .image-container {
      background: url("/mobile-background/product/FirstcontainerBackground.svg")
        no-repeat center;
      background-size: 100%;
      border-radius: 30px;

      svg {
        max-width: 280px;
      }
    }

    .texte-container {
      width: auto;
      padding: 8px 18px 32px 18px;
      gap: 16px;
    }
  }
`;

const DoubleContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || "#f2f2f9"};
  border-radius: 30px;
  height: ${(props) => props.height};
  justify-content: space-between;
  gap: 112px;
  padding: ${(props) => props.padding || "72px 98px 72px 88px"};
  position: relative;
  overflow: hidden;
  max-width: 1152px;

  .blob-left {
    top: 700px;
  }

  .blob-right {
    top: -300px;
  }

  .blob-bot {
    top: 800px;
    left: 400px;
  }

  .texte-container {
    width: 49%;

    ul {
      padding-top: 32px;
    }
  }

  @media ${devices.tabletMax} {
    background-color: transparent;
    height: auto;
    padding: 0;
    border-radius: 0;
    width: 100%;
    gap: 54px;

    ul {
      padding-top: 16px !important;
    }
  }
`;
const UniqueCard = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  .image-container {
    max-width: 366px;
  }

  @media ${devices.tabletMax} {
    flex-direction: column;
    align-items: flex-start;

    .image-container {
      background: url("/mobile-background/product/SelfcustodyBackground.svg")
        no-repeat center;
      background-size: 100%;
      border-radius: 30px;
      svg {
        max-width: 280px;
      }
    }

    .texte-container {
      width: auto;
      padding: 30px 18px;
    }
  }
`;
const MaximumSecurity = styled.div`
  display: flex;
  justify-content: end;
  gap: 60px;

  .image-container {
    max-width: 320px;
  }

  @media ${devices.tabletMax} {
    align-items: flex-start;
    flex-direction: column;

    .image-container {
      background: url("/mobile-background/product/SelfcustodyBackground.svg")
        no-repeat center;
      background-size: 100%;
      border-radius: 30px;
      svg {
        max-width: 280px;
      }
    }

    .texte-container {
      width: auto;
      padding: 30px 18px;
    }
  }
`;
const CryptoAssets = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

  .image-container {
    max-width: 380px;
  }

  @media ${devices.tabletMax} {
    align-items: flex-start;
    flex-direction: column;

    .image-container {
      background: url("/mobile-background/product/CryptoassetsBackground.svg")
        no-repeat center;
      background-size: 100%;
      border-radius: 30px;
      svg {
        max-width: 326px;
      }
    }

    .texte-container {
      width: auto;
      padding: 30px 18px;
    }
  }
`;
const SelfCustody = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;

  .image-container {
    max-width: 396px;
  }

  .texte-container {
    width: 50% !important;
  }

  @media ${devices.tabletMax} {
    align-items: flex-start;
    flex-direction: column;
    gap: 0;

    .image-container {
      align-self: center;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("/mobile-background/product/SelfcustodyBackground.svg")
        no-repeat center;
      background-size: 100%;
      border-radius: 30px;

      div {
        max-width: 292px;
      }
    }

    .texte-container {
      width: auto;
      padding: 30px 18px;
    }
  }
`;
const LicensedAndRegulated = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 112px;
  padding-bottom: 150px;
  border-radius: 30px;
  width: 100%;
  background-color: white;
  max-height: 500px;
  position: relative;
  overflow: hidden;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: left;
  }

  .image-container {
    position: absolute;
    left: 570px;
    top: 128px;
    svg {
      max-width: 350px;
    }
  }

  .texte-container-licensed {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 94px;
    z-index: 2;

    .italic-texte {
      padding-top: 40px;
      padding-left: 16px;
      font-style: italic;

      @media ${devices.tabletMax} {
        padding-top: 0px;
        padding-left: 12px;
      }
    }
  }

  .blob-top {
    left: 700px;
  }

  .blob-bot {
    top: 300px;
    left: -200px;
  }

  @media ${devices.tabletMax} {
    flex-direction: column;
    height: auto;
    background-color: transparent;
    padding: 0;
    height: auto;
    width: 100%;
    align-items: flex-start;

    .image-container {
      align-self: center;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: unset;
      align-self: center;
      background: url("/mobile-background/product/LicensedBackground.svg")
        no-repeat center;
      background-size: 100%;
      border-radius: 30px;
      height: 368px;
      max-width: 236px;
    }

    .texte-container-licensed {
      padding: 30px 18px;

      p {
        text-align: left;
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["product", "footer"])),
    },
  };
};

const Product = () => {
  const { t, i18n } = useTranslation("product");
  return (
    <div>
      <ProductContainer>
        <div>
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
        <FirstContainer>
          <div className="image-container">
            <Lottie animationData={BetterBank} alt="Iban and card image" />
          </div>
          <div className="texte-container">
            <h2>{t("better-than-your-bank")}</h2>
            <ul>
              <li>{t("your-iban")}</li>
              <li>{t("different-currencies")}</li>
              <li>{t("free-exchange")}</li>
              <li>{t("instant-transfer")}</li>
              {!i18n.languages.includes("fr") && <li>{t("open-banking")}</li>}
            </ul>
          </div>
          <Blob className="blob-left" color="#D4DAE5" />
          <Blob className="blob-bot" color="#DEF0DC" />
        </FirstContainer>
        <DoubleContainer backgroundColor="#f2f2f9" height="692px">
          <UniqueCard>
            <div className="image-container">
              <ScrollAnimation
                lottieFile={UniqueCardImage}
                maxFrame={36}
                altText="Uniques cards image"
              />
            </div>
            <div className="texte-container">
              <h2>{t("unique-card")}</h2>
              <ul>
                <li>{t("physical-or-virtual-card")}</li>
                <li>{t("personalise-your-card")}</li>
                <li>{t("pay-compatible")}</li>
              </ul>
            </div>
          </UniqueCard>
          <MaximumSecurity>
            <div className="image-container">
              <ScrollAnimation
                lottieFile={MaxSecurity}
                loop={false}
                maxFrame={36}
                altText="Uniques cards image"
              />
            </div>
            <div className="texte-container">
              <h2>{t("maximum-security")}</h2>
              <ul>
                <li>{t("new-number")}</li>
                <li>{t("buy-on-internet")}</li>
              </ul>
            </div>
          </MaximumSecurity>
          <Blob className="blob-left" color="#CADAF7" />
          <Blob className="blob-right" color="#D4E8DA" />
        </DoubleContainer>

        <span id="test-ancre" />
        
        <DoubleContainer
          backgroundColor="#F5F5F4"
          height="722px"
          padding="72px 5px 72px 88px"
        >
          <CryptoAssets>
            <div className="image-container">
              <Lottie
                animationData={CryptoWallet}
                alt="Deposit your crypto-assets"
              />
            </div>
            <div className="texte-container">
              <h2>
                {t("deposit-crypto-assets-1")} <br />
                {t("deposit-crypto-assets-2")}
              </h2>
              <ul>
                <li>{t("deposit-all")}</li>
                <li>{t("exchange-crypto")}</li>
                <li>{t("use-crypto")}</li>
              </ul>
            </div>
          </CryptoAssets>
          <SelfCustody>
            <div className="image-container">
              {/* <Lottie animationData={SafeAnimation} loop={false} /> */}
              <ScrollAnimation
                lottieFile={SafeAnimation}
                maxFrame={68}
                altText="Money dropping out of a suitecase"
              />
            </div>
            <div className="texte-container">
              <h2>{t("in-self-custody")}</h2>
              <ul>
                <li>
                  <span className="bold-text">{t("nobody-can-freeze-1")}</span>{" "}
                  {t("nobody-can-freeze-2")}
                </li>
                <li>
                  <span className="bold-text">{t("fundes-safe-1")}</span>
                  <br />
                  {t("fundes-safe-2")}
                </li>
              </ul>
            </div>
          </SelfCustody>
          <Blob className="blob-top" color="#CCDEDF" />
          <Blob className="blob-bot" color="#F2CDDE" />
        </DoubleContainer>
        {/* <LicensedAndRegulated>
          <div className="image-container">
            <ScrollAnimation
              lottieFile={Licensed}
              maxFrame={61}
              altText="Uniques cards image"
            />
          </div>
          <div className="texte-container-licensed">
            <h2>(Soon) Licensed & Regulated</h2>
            <p>Deblock has applied to:</p>
            <ul>
              <li>
                Be <span className="bold-text">licensed as an EMI*</span> by the
                FCA
              </li>
              <li>
                Receive a <span className="bold-text">crypto registration</span>{" "}
                from the FCA
              </li>
            </ul>
            <span className="italic-texte">*Electronic Money Institution</span>
          </div>
          <Blob className="blob-top" color="#FBF3BF" />
          <Blob className="blob-bot" color="#FCF5DF" />
        </LicensedAndRegulated> */}
      </ProductContainer>
    </div>
  );
};

export default Product;
