import React from "react";
import Lottie from "lottie-react";
import styled from "styled-components";

import Emergency from "../src/assets/lottie/ncw/Emergency.json";
import MultiPartyAnimation from "../src/assets/lottie/ncw/MultiParty.json";

interface Props {
  color: string;
}

const NCWContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin: auto;
  max-width: 650px;
`;
const TitleContainer = styled.div`
  h1 {
    font-size: 48px;
    line-height: 57px;
  }
  span {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
  }
`;
const KeyTakeway = styled.div`
  background-color: #f7f2ea;
  border-radius: 30px;
  height: 772px;
  padding: 48px;

  .header-container {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      font-size: 34px;
      line-height: 41px;
    }
    > div {
      display: flex;
      gap: 34px;
      font-size: 18px;
      line-height: 28px;

      > div:first-child {
        background: #eee4ce;
        border-radius: 50px;
      }
    }
  }
`;
const MultiParty = styled.div``;
const DeblockDisappears = styled.div``;

const TextHighlight = styled.span<Props>`
  background-color: ${(props) => props.color};
`;
const WarningContainer = styled.div``;

const NonCustodialWallet = () => {
  return (
    <div>
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
            <ul>
              <TextHighlight color="#C7DFFC">Your shard</TextHighlight> of the
              key (2)
              <li>Generated upon signup on your device.</li>
              <li>Encrypted and backed-up in case you lose your phone.</li>
            </ul>
            <ul>
              <TextHighlight color="#FED54D">
                The Deblock&apos;s shard
              </TextHighlight>{" "}
              of the key (1)
              <li>Generated upon signup on Deblock&apos;s server.</li>
              <li>
                Encrypted and backed-up in a cold storage in case a meteorite
                crash on our datacenter.
              </li>
            </ul>
            <ul>
              The 2 shards are required in order to sign a transaction
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
            A hacker would need to hack your device AND our servers to access
            your wallet. It&apos;s 2x more secure than just storing your keys on
            your device.
          </WarningContainer>
          <div>
            <h2>Human-error tolerant</h2>
            <div>
              <p>
                <TextHighlight color="#D5FCC5">
                  Your encrypted shard🔒
                </TextHighlight>{" "}
                is backed-up in multiple locations and yet SAFE because always
                encrypted.
              </p>
              <div>
                <p> No need to remember a complicated seed phrase </p>
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
            <div>
              <h2>Always & Still your keys</h2>
              <span>
                Request at any point in time your seed phrase (mnemonic of your
                private key).
              </span>
              <div>
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
                  <TextHighlight color="#C7DFFC">your shard</TextHighlight> and
                  <TextHighlight color="#FED54D">
                    Deblock&apos;s shard
                  </TextHighlight>{" "}
                  on your device to reconstruct the wallet private key and your
                  seed phrase.
                </p>
              </div>
              <WarningContainer>
                If you decide to export your wallet private key out of Deblock,
                we will have to close your FIAT account.
              </WarningContainer>
            </div>
          </div>
        </MultiParty>
        <DeblockDisappears>
          <h2>What if Deblock disappears?</h2>
          <span>And you have NO app and NO backup</span>
          <Lottie animationData={Emergency} loop={false} />
          <p>
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
    </div>
  );
};

export default NonCustodialWallet;
