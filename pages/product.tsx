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

import Blob from "../src/views/Blob";

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
    padding-left: 16px;

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
`;

const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff9f3;
  border-radius: 30px;
  height: 508px;
  gap: 20px;
  position: relative;
  overflow: hidden;

  img {
    max-width: 364px;
  }

  .texte-container {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 12px;
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
`;

const DoubleContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || "#f2f2f9"};
  border-radius: 30px;
  height: ${(props) => props.height};
  justify-content: center;
  gap: 148px;
  padding: 0px 98px 0px 88px;
  position: relative;
  overflow: hidden;

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
    width: 48%;

    ul {
      padding-top: 28px;
    }
  }
`;
const UniqueCard = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
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
  align-items: center;
  border-radius: 30px;
  width: 100%;
  background-color: white;
  height: 426px;
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
            <li>Open Banking</li>
          </ul>
        </div>
        <Blob className="blob-left" color="#D4DAE5" />
        <Blob className="blob-bot" color="#DEF0DC" />
      </FirstContainer>
      <DoubleContainer backgroundColor="#f2f2f9" height=" 835px">
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
        <Blob className="blob-left" color="#CADAF7" />
        <Blob className="blob-right" color="#D4E8DA" />
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
                <span className="bold-text">Nobody can freeze</span> your wallet
                or your withdrawals
              </li>
              <li>
                <span className="bold-text">
                  You fundes are 100% safe even if Deblock disappears
                </span>
                <br />
                You can export your keys at any time
              </li>
            </ul>
          </div>
        </SelfCustody>
        <Blob className="blob-top" color="#CCDEDF" />
        <Blob className="blob-bot" color="#F2CDDE" />
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
              Be <span className="bold-text">licensed as an EMI*</span> by the
              FCA
            </li>
            <li>
              Receive a <span className="bold-text">crypto registration</span>{" "}
              from the FCA
            </li>
          </ul>
          <div>*Electronic Money Institution</div>
        </div>
      </LicensedAndRegulated>
    </ProductContainer>
  );
};

export default Product;
