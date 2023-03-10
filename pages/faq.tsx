import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { devices } from "../src/utils/devices";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Blob from "../src/views/Blob";
import { useTranslation } from "next-i18next";
import Mail from "../src/assets/support/mail.svg";
import Arrow from "../src/assets/down.svg";
import Lottie from "lottie-react";
import SupportEn from "../src/assets/lottie/landing/SupportEn.json";
import SupportFr from "../src/assets/lottie/landing/SupportFr.json";
import Rocket from "../src/assets/lottie/nft/rocket.json";
import Airdrop from "../src/assets/lottie/nft/airdrop.json";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Container = styled.div`
  background-color: #fbfaf9;
  position: relative;
  overflow: hidden;

  .Blob {
    position: absolute;

    @media ${devices.tabletMax} {
      display: none;
    }
  }

  .blob-top {
    max-width: 614px;
    left: 280px;
  }

  .blob-right {
    top: 0;
    max-width: 514px;
    right: -350px;
  }
`;

const NCWContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 80px; */
  margin: auto;
  max-width: 796px;
  font-size: 21px;
  line-height: 41px;
  padding: 72px 24px 24px 24px;
  position: relative;

  * {
    z-index: 2;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    padding-bottom: 16px;
    max-width: 706px;
    padding: 44px 0 16px 0;
    text-align: center;
    margin: auto;
  }

  h2 {
    font-size: 40px;
    line-height: 57px;

    text-align: center;
    letter-spacing: 0.16px;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #333333;
  }

  .title-container {
    padding-bottom: 130px;

    p {
      font-weight: 500;
      font-size: 22px;
      line-height: 28px;
      text-align: center;
    }
  }
  /* svg {
    max-width: 728px;
  } */

  .animation {
    position: absolute;
    max-width: 200px;
    z-index: 5;
    @media ${devices.tabletMax} {
      display: none;
    }
  }

  .rocket {
    top: 210px;
    left: -180px;
  }

  .airdrop {
    top: 580px;
    right: -130px;
  }

  @media ${devices.tabletMax} {
    h1,
    h2,
    p,
    img {
      padding-left: 22px !important;
    }
  }
`;

const FaqContainer = styled.div`
  max-width: 762px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 40px;

  i {
    font-style: italic;
  }

  b {
    font-weight: 600;
  }

  u {
    text-decoration: underline;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px 30px;
    gap: 18px;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 14px;

    h4 {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p {
      line-height: 30px;
      color: #707070;
    }

    img {
      rotate: -90deg;
    }
  }

  > div.active {
    box-shadow: 2px 2px 0px 0px rgb(0 0 0);

    img {
      rotate: 0deg;
    }
  }
`;

const SupportContainer = styled.div`
  padding: 72px 24px;
  z-index: 2;

  h3 {
    font-weight: 600;
    font-size: 20.3563px;
    line-height: 28px;
    text-align: center;
  }

  > p {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    padding-bottom: 50px;
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

      p {
        text-align: center;
      }

      svg {
        max-height: 108px;
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

const Faq = () => {
  const { t, i18n } = useTranslation("support");
  const frAssets = i18n.language.includes("fr");

  const [block, setBlock] = useState<any[]>([]);

  const detectLanguage =
    i18n.language && i18n.language.includes("fr") ? "fr" : "en";

  useEffect(() => {
    axios
      .get("https://waitlist-staging.deblock.com/v1/faq/page", {
        headers: {
          "Accept-Language": "fr",
          Authorization:
            "Bearer 64726720888b45b06e7f8f22ac2cbb4ece5cefe6016cf31986b80ad47fece262de9bb18db4225f728816d611eb28487fddf9",
          "Content-Type": "application/json",
        },
        params: {
          page: {
            lang: `${detectLanguage}`,
          },
        },
      })
      .then(async (res) => {
        console.log("faq res", res);
        setBlock(res.data.result);
      })
      .catch((err) => {
        console.log("faq err", err);
      });
  }, [detectLanguage]);

  return (
    <Container>
      <NCWContainer>
        <div className="title-container">
          <h1>{t("Frequently Asked Questions")}</h1>
          <p>
            {t(
              "New to Deblock and got questions? Hopefully we can answer them below!"
            )}
          </p>
        </div>

        <Lottie
          className="animation rocket"
          animationData={Rocket}
          loop={false}
        />
        <Lottie
          className="animation airdrop"
          animationData={Airdrop}
          loop={false}
        />

        <FaqContainer>
          {block &&
            block.map((b, i) => {
              return (
                <ToggleItem key={i} question={b.title} answer={b} id={i} />
              );
            })}
        </FaqContainer>

        <SupportContainer>
          <h2>{t("Still need help?")}</h2>
          <p>{t("You can email us or chat with us:")}</p>
          <div>
            <div>
              <Image src={Mail} alt="mail" />
              <div>
                <h3>support@deblock.com</h3>
                <p>{t("mail")}</p>
              </div>
            </div>
            <div>
              <Lottie animationData={frAssets ? SupportFr : SupportEn} />
              <div>
                <h3>{t("chat")}</h3>
                <p>{t("chat-available")}</p>
              </div>
            </div>
          </div>
        </SupportContainer>
      </NCWContainer>
      <Blob className="blob-left" color="#F2E1FF" />
      <Blob className="blob-top" color="#FDB281" />
      <Blob className="blob-right" color="#FDE3A3" />
    </Container>
  );
};
// };

export default Faq;

const ToggleItem = ({
  question,
  answer,
  id,
}: {
  question: string;
  answer: any;
  id: number;
}) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  function parseMarkdown(markdownText: string) {
    const htmlText = markdownText
      .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
      .replace(/\_(.*)\_/gim, "<u>$1</u>")
      .replace(/\*(.*)\*/gim, "<i>$1</i>");
    return htmlText.trim();
  }

  return (
    <div key={id} className={toggleThisElement ? "active" : ""}>
      <h4 onClick={() => setToggleThisElement((prev) => !prev)}>
        {question}
        <Image src={Arrow} alt="Toggle" />
      </h4>
      {toggleThisElement && (
        <>
          {answer.paragraphs.map((p: string, i: number) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{ __html: parseMarkdown(p) }}
            ></p>
          ))}
        </>
      )}
    </div>
  );
};
