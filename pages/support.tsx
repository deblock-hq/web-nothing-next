import React from "react";
import styled from "styled-components";

import Image from "next/image";
import { devices } from "../src/utils/devices";
import Blob from "../src/views/Blob";
import Mail from "../src/assets/support/mail.svg";
import Lottie from "lottie-react";
import SupportAnimation from "../src/assets/lottie/landing/SupportEn.json";
import ContactDeblock from "../src/components/ContactDeblock";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Container = styled.div`
  position: relative;
  overflow: hidden;

  .Blob {
    position: absolute;
  }

  .blob-left {
    max-width: 800px;
    top: 0;
  }

  .blob-right {
    max-width: 800px;
    top: 300px;
  }

  @media ${devices.tabletMax} {
    .Blob {
      display: none;
    }
  }
`;

const SupportContainer = styled.div`
  padding: 72px 24px;
  z-index: 2;

  * {
    z-index: 4;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    text-align: center;
    padding-bottom: 70px;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }

  p {
    font-size: 16px;
    line-height: 38px;
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 60px;
      max-width: 408px;
      max-height: 398px;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
      border-radius: 30px;
      padding: 63px 0px;
      width: 100%;

      svg {
        max-height: 121px;
      }

      @media ${devices.tabletMax} {
        gap: 21px;
      }
    }
  }

  @media ${devices.tabletMax} {
    > div {
      flex-direction: column;
      gap: 16px;
    }
    h1 {
      font-size: 30px;
      padding-bottom: 32px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["support"])),
    },
  };
};

const Support = () => {
  const { t } = useTranslation("support");

  return (
    <Container>
      <SupportContainer>
        <h1>{t("title")}</h1>
        <div>
          <div>
            <Image src={Mail} alt="mail" />
            <div>
              <h2>support@deblock.com</h2>
              <p>{t("mail")}</p>
            </div>
          </div>
          <div>
            <Lottie animationData={SupportAnimation} />
            <div>
              <h2>{t("chat")}</h2>
              <p>{t("chat-available")}</p>
            </div>
          </div>
        </div>
      </SupportContainer>
      <Blob className="blob-left" color="#F9E7CA" />
      <Blob className="blob-right" color="#E3F7F3" />
    </Container>
  );
};

export default Support;
