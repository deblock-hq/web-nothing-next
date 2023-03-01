import React from "react";
import Lottie from "lottie-react";
import styled from "styled-components";

import Emergency from "../src/assets/lottie/ncw/Emergency.json";
import MultiPartyAnimation from "../src/assets/lottie/ncw/MultiParty.json";
import WarningIcone from "../public/warning-icone.svg";
import Image from "next/image";
import { devices } from "../src/utils/devices";
import Blob from "../src/views/Blob";
import { ScrollAnimation } from "../src/utils/ScrollAnimation";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";

interface Props {
  color: string;
}

const Container = styled.div`
  background-color: #fbfaf9;
  position: relative;
  overflow: hidden;

  .blob-left {
    position: absolute;
    top: -100px;
  }

  .blob-right {
    position: absolute;
    top: 200px;
    right: -500px;
  }

  @media ${devices.tabletMax} {
    .Blob {
      display: none;
    }
  }
`;

const NCWContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: auto;
  max-width: 796px;
  font-size: 21px;
  line-height: 41px;
  font-family: "Georgia";
  padding: 72px 24px 24px 24px;

  * {
    z-index: 2;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    max-width: 724px;
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
    gap: 30px;
  }
`;

const TitleContainer = styled.div`
  max-width: 706px;
  padding-left: 48px;

  h1 {
    font-size: 48px;
    line-height: 57px;
    padding-bottom: 16px;
    font-family: "Inter";
  }

  p {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    font-family: "Inter";
  }

  @media ${devices.tabletMax} {
    padding-left: 0;

    h1 {
      font-weight: 400;
      font-size: 24px;
      line-height: 34px;
      letter-spacing: 0.16px;
      padding-bottom: 4px;
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
const KeyTakeway = styled.div`
  background-color: #f7f2ea;
  border-radius: 30px;
  height: fit-content;
  padding: 48px 30px;
  font-family: "Georgia";
  font-size: 21px;
  line-height: 41px;
  margin-top: -8px;
  max-width: 756px;
  width: 83%;
  margin: auto;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;

    > div {
      display: flex;
      gap: 34px;
      font-size: 18px;
      line-height: 28px;

      > div {
        align-self: center;
        :first-child {
          background: #eee4ce;
          border-radius: 50px;
          padding: 8px 16px;
        }
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;

    li {
      h3 {
        font-weight: 700;
      }
    }
  }

  @media ${devices.tabletMax} {
    padding: 24px 24px 32px 24px;
    width: auto;

    .header-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      h2 {
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.0480363px;
      }

      div {
        font-size: 14px;
        line-height: 19px;
      }
    }

    ul {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.084px;
    }
  }
`;
const MultiParty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2 {
    padding-bottom: 16px;
    padding-left: 68px;

    @media ${devices.tabletMax} {
      padding: 0;
      font-weight: 700;
      font-size: 22px;
      line-height: 41px;
    }
  }

  .image-container {
    padding-left: 50px;

    @media ${devices.tabletMax} {
      padding-left: 0;
    }
  }

  .liste-container {
    div {
      font-family: "Georgia";
      font-weight: 700;
      padding-top: 32px;
    }

    li {
      list-style: initial;
      line-height: 41px;
      letter-spacing: 0.084px;
    }

    @media ${devices.tabletMax} {
      div {
        font-size: 18px;
        line-height: 41px;
        padding-bottom: 4px;
        padding-top: 56px;

        :first-child {
          padding-top: 0;
        }
      }
    }

    ul {
      font-size: 18px;
      line-height: 41px;
      letter-spacing: 0.084px;
      padding-left: 20px;
    }
  }

  .keys-container {
    > p {
      padding-bottom: 32px;
      max-width: 724px;
      padding-left: 68px;

      @media ${devices.tabletMax} {
        padding-left: 0;
        padding-bottom: 54px;
      }
    }
    > div:last-child {
      margin-top: 32px;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 80px;
    @media ${devices.tabletMax} {
      gap: 56px;
    }
  }

  .yellow-border {
    border-left: 3px solid #f59300;
    margin-left: 48px;
    padding-left: 20px;

    @media ${devices.tabletMax} {
      margin-left: 0;
      margin-bottom: 40px;

      p:first-child {
        padding-bottom: 40px;
      }
    }
  }
`;
const DeblockDisappears = styled.div`
  max-width: 724px;
  padding-left: 48px;
  padding-bottom: 300px;

  h2 {
    padding-bottom: 16px;
  }

  @media ${devices.tabletMax} {
    padding-left: 0;
    padding-top: 54px;

    h2 {
      font-weight: 700;
      font-size: 22px;
      line-height: 41px;
      letter-spacing: 0.084px;
    }

    span {
      font-size: 18px;
      line-height: 41px;
      letter-spacing: 0.084px;
    }

    p {
      font-size: 18px;
      line-height: 41px;
      letter-spacing: 0.084px;
    }
  }

  div {
    padding-top: 56px;
    padding-bottom: 24px;
    @media ${devices.tabletMax} {
      padding-top: 26px;
    }
  }
`;

const TextHighlight = styled.span<Props>`
  background-color: ${(props) => props.color};
`;
const WarningContainer = styled.div`
  display: flex;
  gap: 24px;

  img {
    align-self: center;
  }

  p {
    background-color: #fce4e4;
    border-left: 3px solid #f52323;
    padding: 8px 20px;
  }

  @media ${devices.tabletMax} {
    flex-direction: column;
  }
`;
const BoldText = styled.span`
  font-weight: 700;
`;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["ncw"])),
    },
  };
};

const NonCustodialWallet = () => {
  const { t } = useTranslation("ncw");

  return (
    <Container>
      <NCWContainer>
        <TitleContainer>
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </TitleContainer>
        <KeyTakeway>
          <div className="header-container">
            <h2>{t("key-takeway")}</h2>
            <div>
              <div>#ncw</div>
              <div>3 min {t("read")}</div>
            </div>
          </div>
          <ul>
            <li>
              <h3>{t("more-secure")}</h3>
              <p>{t("more-secure-text")}</p>
            </li>
            <li>
              <h3>{t("human-error")}</h3>
              <p>{t("human-error-text")}</p>
            </li>
            <li>
              <h3>{t("your-keys")}</h3>
              <p>{t("your-keys-text")}</p>
            </li>
          </ul>
        </KeyTakeway>
        <MultiParty>
          <h2>{t("multi-party")}</h2>
          <ScrollAnimation
            className="image-container"
            lottieFile={MultiPartyAnimation}
            maxFrame={109}
            altText="Multi-Party Computation"
          />
          <div className="liste-container">
            <div>
              <Trans i18nKey="your-shard" t={t}>
                {" "}
                <TextHighlight color="#C7DFFC">Your shard</TextHighlight> of the
                key (2)
              </Trans>
            </div>
            <ul>
              <li>{t("your-shard-list-1")}</li>
              <li>{t("your-shard-list-2")}</li>
            </ul>
            <div>
              <Trans i18nKey="deblocks-shard" t={t}>
                {" "}
                <TextHighlight color="#FED54D">
                  The Deblock&apos;s shard
                </TextHighlight>{" "}
                of the key (1)
              </Trans>
            </div>
            <ul>
              <li>{t("deblocks-shard-list-1")}</li>
              <li>{t("deblocks-shard-list-2")}</li>
            </ul>
            <div>{t("shards-required")}</div>
            <ul>
              <li>
                <Trans i18nKey="shards-required-list-1">
                  Only <TextHighlight color="#C7DFFC">your shard</TextHighlight>{" "}
                  can initiate a transaction.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="shards-required-list-2" t={t}>
                  Only <TextHighlight color="#C7DFFC">your shard</TextHighlight>{" "}
                  can request to download the{" "}
                  <TextHighlight color="#FED54D">Deblock’s shard</TextHighlight>{" "}
                  in order to export the wallet seed phrase.
                </Trans>
              </li>
            </ul>
          </div>
          <WarningContainer>
            <Image src={WarningIcone} alt="Warning icone" />
            <p>{t("warning-1")}</p>
          </WarningContainer>
          <div>
            <div className="human-error">
              <h2>{t("human-error-tolerant")}</h2>
              <p>
                <Trans i18nKey="your-encrypted-shard" t={t}>
                  {" "}
                  <TextHighlight color="#D5FCC5">
                    Your encrypted shard🔒
                  </TextHighlight>{" "}
                  is backed-up in multiple locations and yet SAFE because
                  <BoldText> always encrypted.</BoldText>
                </Trans>
              </p>
              <div>
                <p>
                  <BoldText>{t("no-need-to-remember")}</BoldText>
                </p>
                <p>
                  <Trans i18nKey="if-you-lose-your-phone" t={t}>
                    If you lose your phone, delete Deblock or just change
                    device... You only need to retrieve{" "}
                    <TextHighlight color="#D5FCC5">
                      your encrypted shard🔒
                    </TextHighlight>{" "}
                    and then KYC again to decrypt it.
                  </Trans>
                </p>
              </div>
            </div>
            <div className="keys-container">
              <h2>{t("always-your-keys")}</h2>
              <p>
                <Trans i18nKey="always-your-keys-text" t={t}>
                  Request at
                  <span
                    style={{ fontStyle: "italic", textDecoration: "underline" }}
                  >
                    {" "}
                    any point in time
                  </span>{" "}
                  your seed phrase (mnemonic of your private key).
                </Trans>
              </p>
              <div className="yellow-border">
                <p>
                  <Trans i18nKey="highlight-1" t={t}>
                    The app will request and download the{" "}
                    <TextHighlight color="#F9DBAF">
                      encrypted Deblock&apos;s shard🔒
                    </TextHighlight>{" "}
                    and then decrypt it into{" "}
                    <TextHighlight color="#FED54D">
                      Deblock&apos;s shard
                    </TextHighlight>{" "}
                    on your device.
                  </Trans>
                </p>
                <p>
                  <Trans i18nKey="highlight-2" t={t}>
                    The app will use{" "}
                    <TextHighlight color="#C7DFFC">your shard</TextHighlight>{" "}
                    and{" "}
                    <TextHighlight color="#FED54D">
                      Deblock&apos;s shard
                    </TextHighlight>{" "}
                    on your device to reconstruct the wallet private key and
                    your seed phrase.
                  </Trans>
                </p>
              </div>
              <WarningContainer>
                <Image src={WarningIcone} alt="Warning icone" />
                <p>{t("warning-2")}</p>
              </WarningContainer>
            </div>
          </div>
        </MultiParty>
        <DeblockDisappears>
          <h2>{t("deblock-disappears")}</h2>
          <span>
            <Trans i18nKey="deblock-disappears-text-1" t={t}>
              And you have <BoldText>NO app</BoldText> and{" "}
              <BoldText>NO backup</BoldText>
            </Trans>
          </span>
          <ScrollAnimation
            lottieFile={Emergency}
            maxFrame={252}
            altText="Emergency Recovery Process "
          />
          <p style={{ paddingBottom: "40px" }}>
            <Trans i18nKey="deblock-disappears-text-2" t={t}>
              Both
              <TextHighlight color="#D5FCC5">
                {" "}
                your encrypted shard🔒{" "}
              </TextHighlight>{" "}
              and{" "}
              <TextHighlight color="#F9DBAF">Deblock encrypted shard🔒{" "}</TextHighlight>
              will be released from cold storage.
            </Trans>
          </p>
          <p>{t("deblock-disappears-text-3")}</p>
        </DeblockDisappears>
      </NCWContainer>
      <Blob className="blob-left" color="#D0D8E4" />
      <Blob className="blob-right" color="#DAEFDA" />
    </Container>
  );
};

export default NonCustodialWallet;
