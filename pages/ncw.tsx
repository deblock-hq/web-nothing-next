import React from "react";
import Lottie from "lottie-react";
import styled from "styled-components";

import Emergency from "../src/assets/lottie/ncw/Emergency.json";
import MultiPartyAnimation from "../src/assets/lottie/ncw/MultiParty.json";
import WarningIcone from "../public/warning-icone.svg";
import Image from "next/image";
import { devices } from "../src/utils/devices";
import Blob from "../src/views/Blob";

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
  gap: 72px;
  margin: auto;
  max-width: 796px;
  font-size: 21px;
  line-height: 41px;
  font-family: "Georgia";
  padding: 40px 24px 24px 24px;

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
  max-width: 724px;
  padding-left: 48px;

  h1 {
    font-size: 48px;
    line-height: 57px;
    padding-bottom: 16px;
    font-family: "Inter";
  }

  span {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
  }

  @media ${devices.tabletMax} {
    padding-left: 0;
  }
`;
const KeyTakeway = styled.div`
  background-color: #f7f2ea;
  border-radius: 30px;
  height: fit-content;
  padding: 48px;
  font-family: "Georgia";
  font-size: 21px;
  line-height: 41px;
  margin-top: -8px;

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
    .header-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
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

  .liste-container {
    div {
      font-family: "Georgia";
      font-weight: 700;
      padding-top: 24px;
    }

    ul {
      padding-left: 16px;
    }

    li {
      list-style: initial;
      line-height: 41px;
      letter-spacing: 0.084px;
    }
  }

  .keys-container {
    > p {
      padding-bottom: 32px;
      max-width: 724px;
      padding-left: 68px;

      @media ${devices.tabletMax} {
        padding-left: 0;
      }
    }
    > div:last-child {
      margin-top: 62px;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  .yellow-border {
    border-left: 3px solid #f59300;
    margin-left: 48px;
    padding-left: 20px;
    @media ${devices.tabletMax} {
      margin: 0;
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
  }

  div {
    padding-top: 90px;
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

const NonCustodialWallet = () => {
  return (
    <Container>
      <NCWContainer>
        <TitleContainer>
          <h1>The best non-custodial wallet in the world</h1>
          <span>
            A highly secured non-custodial wallet where your assets only belong
            to you.
          </span>
        </TitleContainer>
        <KeyTakeway>
          <div className="header-container">
            <h2>Key Takeways</h2>
            <div>
              <div>#ncw</div>
              <div>3 min read</div>
            </div>
          </div>
          <ul>
            <li>
              <h3>More secure than your usual wallet</h3>
              <p>
                MPC (Multi-Party Computation) would require coordinated attacks
                on different and independent systems. Just hacking your phone
                isn&apos;t enough anymore.
              </p>
            </li>
            <li>
              <h3>Human-error tolerant</h3>
              <p>
                No need to remember a seed phrase anymore. Your shard of the key
                is backed up with multiple third-parties.{" "}
              </p>
            </li>
            <li>
              <h3>Always your keys. Always your crypto.</h3>
              <p>
                Export the seed phrase whenever you want. Nobody but you can
                have access to the wallet. Your keys. Your crypto.
              </p>
            </li>
          </ul>
        </KeyTakeway>
        <MultiParty>
          <h2>Multi-Party Computation</h2>
          <Lottie animationData={MultiPartyAnimation} loop={false} />
          <div className="liste-container">
            <div>
              <TextHighlight color="#C7DFFC">Your shard</TextHighlight> of the
              key (2)
            </div>
            <ul>
              <li>Generated upon signup on your device.</li>
              <li>Encrypted and backed-up in case you lose your phone.</li>
            </ul>
            <div>
              <TextHighlight color="#FED54D">
                The Deblock&apos;s shard
              </TextHighlight>{" "}
              of the key (1)
            </div>
            <ul>
              <li>Generated upon signup on Deblock&apos;s server.</li>
              <li>
                Encrypted and backed-up in a cold storage in case a meteorite
                crash on our datacenter.
              </li>
            </ul>
            <div>The 2 shards are required in order to sign a transaction</div>
            <ul>
              <li>
                Only <TextHighlight color="#C7DFFC">your shard</TextHighlight>{" "}
                can initiate a transaction.
              </li>
              <li>
                Only <TextHighlight color="#C7DFFC">your shard</TextHighlight>{" "}
                can request to download the{" "}
                <TextHighlight color="#FED54D">Deblock’s shard</TextHighlight>{" "}
                in order to export the wallet seed phrase.
              </li>
            </ul>
          </div>
          <WarningContainer>
            <Image src={WarningIcone} alt="Warning icone" />
            <p>
              A hacker would need to hack your device AND our servers to access
              your wallet. It&apos;s 2x more secure than just storing your keys
              on your device.
            </p>
          </WarningContainer>
          <div>
            <div className="human-error">
              <h2>Human-error tolerant</h2>
              <p>
                <TextHighlight color="#D5FCC5">
                  Your encrypted shard🔒
                </TextHighlight>{" "}
                is backed-up in multiple locations and yet SAFE because{" "}
                <BoldText>always encrypted.</BoldText>
              </p>
              <div>
                <p>
                  <BoldText>
                    No need to remember a complicated seed phrase
                  </BoldText>
                </p>
                <p>
                  If you lose your phone, delete Deblock or just change
                  device... You only need to retrieve{" "}
                  <TextHighlight color="#D5FCC5">
                    your encrypted shard🔒
                  </TextHighlight>{" "}
                  and then KYC again to decrypt it.
                </p>
              </div>
            </div>
            <div className="keys-container">
              <h2>Always & Still your keys</h2>
              <p>
                Request at{" "}
                <span
                  style={{ fontStyle: "italic", textDecoration: "underline" }}
                >
                  any point in time
                </span>{" "}
                your seed phrase (mnemonic of your private key).
              </p>
              <div className="yellow-border">
                <p>
                  The app will request and download the{" "}
                  <TextHighlight color="#F9DBAF">
                    encrypted Deblock&apos;s shard🔒
                  </TextHighlight>{" "}
                  and then decrypt it into{" "}
                  <TextHighlight color="#FED54D">
                    Deblock&apos;s shard
                  </TextHighlight>{" "}
                  on your device.
                </p>
                <p>
                  The app will use{" "}
                  <TextHighlight color="#C7DFFC">your shard</TextHighlight> and{" "}
                  <TextHighlight color="#FED54D">
                    Deblock&apos;s shard
                  </TextHighlight>{" "}
                  on your device to reconstruct the wallet private key and your
                  seed phrase.
                </p>
              </div>
              <WarningContainer>
                <Image src={WarningIcone} alt="Warning icone" />
                <p>
                  If you decide to export your wallet private key out of
                  Deblock, we will have to close your FIAT account.
                </p>
              </WarningContainer>
            </div>
          </div>
        </MultiParty>
        <DeblockDisappears>
          <h2>What if Deblock disappears?</h2>
          <span>
            And you have <BoldText>NO app</BoldText> and{" "}
            <BoldText>NO backup</BoldText>
          </span>
          <Lottie animationData={Emergency} loop={false} />
          <p style={{ paddingBottom: "40px" }}>
            Both{" "}
            <TextHighlight color="#D5FCC5">
              your encrypted shard🔒
            </TextHighlight>{" "}
            and{" "}
            <TextHighlight color="#F9DBAF">
              Deblock encrypted shard🔒
            </TextHighlight>{" "}
            will be released from cold storage.
          </p>
          <p>
            A trusted third-party will securely release an app to decrypt both
            shards and reconstruct your wallet private key and your seed phrase.
          </p>
        </DeblockDisappears>
      </NCWContainer>
      <Blob className="blob-left" color="#D0D8E4" />
      <Blob className="blob-right" color="#DAEFDA" />
    </Container>
  );
};

export default NonCustodialWallet;
