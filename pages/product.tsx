import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import BetterBank from "../src/assets/product/better-bank.svg";
import CryptoWallet from "../src/assets/product/crypto-wallet.svg";
import Licensed from "../src/assets/product/licensed.svg";
import MaxSecurity from "../src/assets/product/max-security.svg";
import UniqueCardImage from "../src/assets/product/unique-card.svg";
import SafeAnimation from "../src/assets/lottie/safe.json";

interface Props {
  backgroundColor: string;
  height: string;
}

const ProductContainer = styled.div`
  max-width: 958px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 40px;

  ul {
    list-style: initial;
    font-size: 16px;
    line-height: 28px;

    li::marker {
      color: #f69d17;
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

  .texte-container {
    width: 45%;
  }
`;

const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff9f3;
  border-radius: 30px;
  height: 508px;

  img {
    max-width: 364px;
  }

  .texte-container {
    width: 45%;
  }
`;

const DoubleContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || "#f2f2f9"};
  border-radius: 30px;
  height: ${(props) => props.height};
  justify-content: center;
  gap: 204px;
`;
const UniqueCard = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
`;
const MaximumSecurity = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CryptoAssets = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

  .image-container {
    max-width: 380px;
  }
`;
const SelfCustody = styled.div`
  display: flex;
  justify-content: space-around;

  .image-container {
    max-width: 396px;
  }
`;
const LicensedAndRegulated = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  border-radius: 30px;
  width: 100%;
  background-color: white;
`;

const Product = () => {
  return (
    <ProductContainer>
      <div>
        <h1>What is Deblock exactly?</h1>
        <p>
          What if your bank account and your non-custodial wallet had a prodigy?
        </p>
      </div>
      <FirstContainer>
        <div className="image-container">
          <Image src={BetterBank} alt="Iban and card image" />
        </div>
        <div className="texte-container">
          <h2>Better & Faster than your usual bank account</h2>
          <ul>
            <li>Your own IBAN & account numbers</li>
            <li>15+ different currencies</li>
            <li>Free exchange in any currency</li>
            <li>Instant transfer</li>
            <li>Open Baning</li>
          </ul>
        </div>
      </FirstContainer>
      <DoubleContainer backgroundColor="#f2f2f9" height=" 998px">
        <UniqueCard>
          <div className="image-container">
            <Image src={UniqueCardImage} alt="Uniques cards image" />
          </div>
          <div className="texte-container">
            <h2>Stand out with a unique Debit Card...</h2>
            <ul>
              <li>Physical or Virtual Cards</li>
              <li>Personalise your card with your own NFT</li>
              <li>Apple and Google Pay compatible</li>
            </ul>
          </div>
        </UniqueCard>
        <MaximumSecurity>
          <div className="image-container">
            <Image src={MaxSecurity} alt="Uniques cards image" />
          </div>
          <div className="texte-container">
            <h2>One-off cards for a maximum security</h2>
            <ul>
              <li>A new number is generated after each use</li>
              <li>Buy on the internet with peace of mind</li>
            </ul>
          </div>
        </MaximumSecurity>
      </DoubleContainer>
      <DoubleContainer backgroundColor="#F5F5F4" height="972px">
        <CryptoAssets>
          <div className="image-container">
            <Image src={CryptoWallet} alt="Uniques cards image" />
          </div>
          <div className="texte-container">
            <h2>Deposit your crypto-assets...</h2>
            <ul>
              <li>Deposit all of your Cryptos and NFTs</li>
              <li>Exchange your Cryptos for GBP</li>
              <li>
                Use your Cryptos to buy a house or a car, we&apos;ll off-ramp
                them in the background
              </li>
            </ul>
          </div>
        </CryptoAssets>
        <SelfCustody>
          <div className="image-container">
            <Lottie animationData={SafeAnimation} loop={false} />
          </div>
          <div className="texte-container">
            <h2>...in your self-custody</h2>
            <ul>
              <li>
                <span>Nobody can freeze</span> your wallet or your withdrawals
              </li>
              <li>
                <span>You fundes are 100% safe even if Deblock disappears</span>
                <br />
                You can export your keys at any time
              </li>
            </ul>
          </div>
        </SelfCustody>
      </DoubleContainer>
      <LicensedAndRegulated>
        <div className="image-container">
          <Image src={Licensed} alt="Uniques cards image" />
        </div>
        <div>
          <h2>(Soon) Licensed & Regulated</h2>
          <ul>
            Deblock has applied to:
            <li>
              Be <span>licensed as an EMI*</span> by the FCA
            </li>
            <li>
              Receive a <span>crypto registration</span> from the FCA
            </li>
          </ul>
          <div>*Electronic Money Institution</div>
        </div>
      </LicensedAndRegulated>
    </ProductContainer>
  );
};

export default Product;
