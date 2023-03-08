import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { devices } from "../src/utils/devices";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Blob from "../src/views/Blob";
import { useTranslation } from "react-i18next";
import Mail from "../src/assets/support/mail.svg";
import Lottie from "lottie-react";
import SupportAnimation from "../src/assets/lottie/landing/SupportEn.json";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Container = styled.div`
  background-color: #fbfaf9;
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

  * {
    z-index: 2;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    padding-bottom: 16px;
    max-width: 706px;
    padding: 44px 0 16px 0;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    max-width: 724px;
    padding: 44px 0 16px 0;
  }

  p {
    font-size: 21px;
    line-height: 41px;
    letter-spacing: 0.084px;
    padding-bottom: 16px;
  }

  svg {
    max-width: 728px;
  }

  .human-error {
    padding-top: 40px;

    h2 {
      padding-bottom: 20px;
    }
  }

  .human-error p,
  .liste-container {
    max-width: 724px;
    padding-left: 68px;
    @media ${devices.tabletMax} {
      padding-left: 0;
    }
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

interface BlockProps {
  [key: string]: {
    title: string;
    [key: string]: any;
  };
}

const Faq = () => {
  const { t, i18n } = useTranslation("support");

  const [block, setBlock] = useState<BlockProps[]>([]);

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
        <div>
          <h1>Frequently Asked Questions</h1>
          <p>
            New to Deblock and got questions? Hopefully we can answer them
            below!
          </p>
        </div>
        {/* {DisplayBlock} */}
        {/* {block &&
          block.map((b, i) => {
            return (
              <div key={i}>
                <h3>{b.title}</h3>
                {
                    b.map((p,i) => {
                        return(
                            <p>{p}</p>
                        )
                    })
                }
              </div>
            );
          })} */}

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
      </NCWContainer>
      {/* <Blob className="blob-left" color="#F2E1FF" />
        <Blob className="blob-top" color="#FDB281" />
        <Blob className="blob-right" color="#FDE3A3" /> */}
    </Container>
  );
};
// };

export default Faq;
