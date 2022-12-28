import React from "react";
import styled from "styled-components";

import test from "../src/assets/lottie/test.json";
import safe from "../src/assets/lottie/safe.json";
import Blob from "../src/views/Blob";

const FirstContainer = styled.div``;
const BackedByContainer = styled.div`
  background-color: rgba(229, 212, 174, 0.2);
`;
const BestAccount = styled.div`
  background-color: rgba(162, 167, 245, 0.1);
`;
const Nft = styled.div`
  background-color: rgba(229, 212, 174, 0.2);
`;
const Deposit = styled.div`
  background-color: rgba(248, 242, 244, 1);
`;
const CashOrCrypto = styled.div``;
const SafestAccount = styled.div`
  background-color: rgba(172, 172, 172, 0.07);
`;

const Home = () => {
  return (
    <div>
      <header>Header</header>
      <div>
        <FirstContainer>
          <div>
            <img src="" alt="" />
            <Blob color="#E5E0EA" />
            <Blob color="#F9D6BE" />
            <Blob color="#F5EAD2" />
          </div>
          <div>A current account merged with a non-custodial wallet*</div>
          <div>
            Own, spend, transfer and exchange your GBP, EUR, USD or any of your
            crypto indifferently
          </div>
          <form action="">
            <input type="email" />
            <button type="submit">Request access</button>
          </form>
          <div>
            *Un non-custodial wallet est un portefeuille dont vous possedez et
            contrôlez les fonds. Contrairement à un échange, personne ne peut
            geler vos actifs ou vos transferts.{" "}
          </div>
        </FirstContainer>
        <BackedByContainer>
          <div>Backed by the best</div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </BackedByContainer>
        <BestAccount>
          <div>
            <img src="" alt="" />
            <Blob color="#D4E8DA" />
            <Blob color="#CAD2E3" />
          </div>
          <div>
            <div>One of the best sterling accounts</div>
            <div>
              Your own current account (Local & IBAN) Instant transfers (Local &
              International) Debit cards (Physical & Virtual) Over 40+
              Currencies (Hold & Exchange) but also...
            </div>
          </div>
        </BestAccount>
        <Nft>
          <div>
            <img src="" alt="" />
          </div>
          <div>Brand your card with your own NFT</div>
        </Nft>
        <Deposit>
          <div>
            <img src="" alt="" />
            <Blob color="#EEE89F" />
            <Blob color="#F7DFC5" />
          </div>
          <div>
            <div>Where you can also deposit all your crypto and NFT</div>
            <div>
              This is self-custody. Nobody can freeze your assets/withdrawals,
              block them or take them away.
            </div>
            <div>
              Deposit all your crypto-assets
              <button>-{">"}</button>
            </div>
          </div>
        </Deposit>
        <CashOrCrypto>
          <div>
            <div>In Cash or in Crypto It&apos;s up to you!</div>
            <div>
              We&apos;ll handle the exchange of Crypto and FIAT under the hood
              depending on your needs and without any limit.
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <div>
                <span>Get your salary </span>
                in Crypto or GBP
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <span>Buy a car</span>
                in Crypto or GBP
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <span>Pay your rent</span>
                in Crypto or GBP
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <span>Buy your coffee</span>
                in Crypto or GBP
              </div>
            </div>
          </div>
        </CashOrCrypto>
        <SafestAccount>
          <div>
            <img src="" alt="" />
            <Blob color="#F2C5A8" />
            <Blob color="#F5D299" />
          </div>
          <div>
            <div>The safest account in the world</div>
            <div>
              This is self-custody. Even if Deblock disappears, 100% of your
              wallet is protected. Your wealth is safe and nobody can take it
              away, block it or freeze it. Your money is your money.
              <button>learn more -{">"}</button>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <div>
                <div>Buy commission-free</div>
                <div>
                  Unlimited and in perpetuity with our native plan* Convert part
                  of your salary to crypto for free Move your Sterling to GBPT
                  for free
                </div>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <div>24/7 Live support</div>
                <div>
                  Talk to a real human (not a machine). One of the most
                  responsive live chat customer support in the financial
                  industry. We are here for you.
                </div>
              </div>
            </div>
          </div>
        </SafestAccount>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
