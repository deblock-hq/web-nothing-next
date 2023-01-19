import React, { useEffect } from "react";
import styled from "styled-components";

import DoublePhone from "../src/assets/lottie/landing/DoublePhone.json";
import Iban from "../src/assets/lottie/landing/Iban.json";
import BankAnimation from "../src/assets/lottie/landing/Bank.json";
import SafeAccount from "../src/assets/lottie/landing/SafeAccount.json";
import Support from "../src/assets/lottie/landing/Support.json";

import Vc from "../src/assets/backed/20vc.svg";
import Headline from "../src/assets/backed/headline.svg";
import Hoxton from "../src/assets/backed/hoxton.svg";
import Kraken from "../src/assets/backed/kraken.svg";
import Nft from "../src/assets/backed/nft.svg";
import Salary from "../src/assets/backed/salary.svg";
import Car from "../src/assets/backed/car.svg";
import Rent from "../src/assets/backed/rent.svg";
import Coffee from "../src/assets/backed/coffee.svg";
import Commission from "../src/assets/backed/commission.svg";
import Arrow from "../src/assets/arrow.svg";
import { devices } from "../src/utils/devices";

import Blob from "../src/views/Blob";
import Image from "next/image";
import Lottie from "lottie-react";
import Footer from "../src/components/Footer";
import Header from "../src/components/SiteHeader";
import Head from "next/head";
import Modal from "../src/views/Modal";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 12px;
  font-size: 16px;
  /* max-width: 960px; */
  margin: auto;

  .Blob {
    display: none;
  }

  .image-container {
    height: 368px;
  }

  .double-phone-container {
    div:first-child {
      display: none;
    }
  }

  @media ${devices.tablet} {
    gap: 24px;
    align-items: center;
    padding-bottom: 134px;

    .image-container {
      height: auto;
    }

    .double-phone-container {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 1160px;
      position: relative;

      div:first-child {
        display: block;
        position: absolute;
        max-width: 496px;
        right: 0;
        top: 58px;
      }
    }

    .Blob {
      display: block;
    }

    .Blob {
      z-index: -1;
      position: absolute;
    }

    .blob-bot {
      left: -400px;
      top: 200px;
    }

    .blob-top {
      left: -400px;
    }
  }

  h2 {
    font-size: 24px;
  }
`;
const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media ${devices.tablet} {
    gap: 0;
    height: 444px;
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 30px;
    max-width: 960px;

    .blob-left,
    .blob-top,
    .blob-right {
      position: absolute;
      z-index: -1;
      width: 55%;
    }

    .blob-left {
      top: 0px;
      left: -372px;
    }

    .blob-top {
      top: -410px;
      left: 300px;
    }
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("/mobile-background/FirstContainerBackground.svg") no-repeat
      center;
    background-size: 100%;
    height: 160px;
    border-radius: 30px;

    @media ${devices.tablet} {
      background: none;
      position: absolute;
      right: -110px;
      bottom: -20px;
      height: unset;
      max-width: 496px;
    }

    img {
      width: 100%;
      max-width: 255px;

      @media ${devices.tablet} {
        max-width: 496px;
      }
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0px 14px;

    @media ${devices.tablet} {
      padding: 72px 90px;
      width: 70%;
      gap: 32px;

      h1 {
        font-size: 48px;
        line-height: 56px;
      }
      p {
        width: 65%;
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
  h1 {
    font-size: 26px;
    line-height: 34px;
  }
  p {
    font-size: 18px;
    line-height: 23px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
    gap: 8px;

    @media ${devices.tablet} {
      flex-direction: row;
      width: 100%;
      gap: 14px;
      height: 40px;
    }

    input {
      border: 0.95393px solid #000000;
      border-radius: 3.81572px;
      box-shadow: 3px 3px 0px 0px rgb(0 0 0);
      height: 44px;

      @media ${devices.tablet} {
        width: 196px;
        box-shadow: 2px 2px 0px 0px rgb(0 0 0);
        height: 40px;
        padding-left: 12px;
      }
    }
    button {
      color: white;
      background: #000000;
      border: 0.95393px solid #000000;
      border-radius: 3.81572px;
      font-weight: 700;
      height: 46px;

      @media ${devices.tablet} {
        padding: 12px 14px;
        font-weight: 700;
      }
    }
  }
  .hide-in-mobile {
    display: none;
  }
`;
const BackedByContainer = styled.div`
  background-color: rgba(229, 212, 174, 0.2);
  border-radius: 30px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media ${devices.tablet} {
    height: 134px;
    gap: 26px;
    /* padding: 0 74px; */
    max-width: 960px;
    width: 100%;
  }

  h3 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
  img {
    height: 16px;
    width: fit-content;

    @media ${devices.tablet} {
      height: 20px;
    }
  }
  .image-container {
    width: 100%;
    text-align: center;

    @media ${devices.tablet} {
      display: flex;
      justify-content: space-between;
    }

    div {
      display: flex;
      justify-content: space-between;
      padding: 8px 28px 0 28px;

      @media ${devices.tablet} {
        padding: 0;
        width: 100%;
        justify-content: space-around;
      }
    }
  }
`;
const BestAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 34px;
  max-width: 960px;

  @media ${devices.tablet} {
    flex-direction: row-reverse;
    background-color: rgba(162, 167, 245, 0.1);
    border-radius: 30px;
    gap: 0;
    position: relative;
    align-items: center;
    height: 506px;
    padding: 0;
    margin-bottom: 24px;
    overflow: hidden;
    width: 100%;

    .blob-left {
      top: -300px;
      left: -690px;
      max-width: 100%;
    }

    .blob-bot {
      max-width: 100%;
      top: 398px;
      left: 0px;
      width: 500px;
    }
  }

  .image-container {
    display: flex;
    justify-content: center;
    background: url("/mobile-background/BestAccountBackground.svg") no-repeat
      center;
    background-size: 100%;
    background-color: rgba(162, 167, 245, 0.1);
    border-radius: 30px;

    div {
      max-width: 292px;
    }

    @media ${devices.tablet} {
      background: none;
      position: absolute;
      right: 516px;

      div {
        max-width: 424px;
      }
    }
  }

  .texte-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0px 14px;

    @media ${devices.tablet} {
      width: 50%;
    }

    h2 {
      line-height: 34px;
      span {
        position: relative;
      }
      span:after {
        content: "";
        background-image: url("./mobile-background/blue-trace.svg");
        position: absolute;
        width: 61px;
        height: 11px;
        left: -8px;
        bottom: -8px;
        @media ${devices.tablet} {
          left: 8px;
          bottom: 0px;
        }
      }

      @media ${devices.tablet} {
        font-size: 40px;
        line-height: 48px;
        width: 70%;
      }
    }
    div {
      line-height: 28px;

      @media ${devices.tablet} {
        font-size: 18px;
        width: 88%;
      }
    }
  }
`;
const NftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media ${devices.tablet} {
    background-color: rgba(229, 212, 174, 0.2);
    border-radius: 30px;
    height: 192px;
    max-width: 960px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    /* padding: 0 52px 0 90px; */
    margin-bottom: 18px;
    z-index: 2;

    h2 {
      padding-left: 90px !important;
    }
  }

  .image-container {
    background-color: rgba(229, 212, 174, 0.2);
    border-radius: 30px;
    height: 192px;
    text-align: center;
    padding-top: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.tablet} {
      background: none;
      width: 216px;
      height: 280px;
      /* padding-top: top; */
    }

    img {
      width: 160px;
      padding-top: 30px;

      @media ${devices.tablet} {
        width: 100%;
        padding-top: 0;
      }
    }
  }
  h2 {
    text-align: center;
    padding: 0px 22px;
    font-size: 24px;
    line-height: 34px;
    padding-bottom: 34px;

    @media ${devices.tablet} {
      font-size: 40px;
      line-height: 48px;
      width: 50%;
      padding: 0;
      text-align: left;
    }
  }
`;
const Deposit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-around;
    background-color: #f8f2f4;
    border-radius: 30px;
    gap: 0;
    align-items: center;
    height: 448px;
    max-width: 960px;
    padding: 0;
    overflow: hidden;
    position: relative;

    .Blob {
      z-index: 1;
    }
  }

  h2 {
    font-size: 24px;
    line-height: 34px;
    @media ${devices.tablet} {
      font-size: 40px;
      line-height: 48px;
    }
  }

  .image-container {
    display: flex;
    background: url("/mobile-background/DepositBackground.svg") no-repeat center;
    background-size: 100%;
    border-radius: 30px;
    justify-content: center;
    align-items: center;

    div {
      max-width: 240px;
    }

    @media ${devices.tablet} {
      background: none;
      z-index: 2;
      max-width: 240px;
    }
  }
  .texte-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 14px 82px 14px;
    line-height: 28px;

    @media ${devices.tablet} {
      width: 42%;
      z-index: 2;
    }
  }
`;
const CashOrCrypto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 88px;

  @media ${devices.tablet} {
    padding-top: 90px;
    max-width: 960px;
  }

  h2 {
    font-size: 24px;
    line-height: 34px;
    text-align: center;

    @media ${devices.tablet} {
      font-size: 40px;
      line-height: 48px;
    }

    span {
      position: relative;
    }
    span:before {
      content: "";
      background: url("./mobile-background/right-arrow-curved.svg") no-repeat;
      position: absolute;
      width: 165px;
      height: 46px;
      bottom: 39px;
      left: 36px;
      background-size: 100%;
    }
  }

  p {
    font-size: 16px;
    line-height: 28px;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media ${devices.tablet} {
      width: 38%;
      align-self: center;
      max-width: 960px;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 88px;

    @media ${devices.tablet} {
      flex-direction: row;
      max-width: 960px;
    }

    span {
      font-weight: 700;
    }
  }
  .text-container {
    font-size: 16px;
    line-height: 24px;
    padding-top: 20px;
  }
`;
const SafestAccount = styled.div`
  padding-top: 62px;

  * {
    line-height: 28px;
  }
  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  }

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    gap: 100px;
    max-width: 960px;

    > div:first-child {
      display: flex;
      flex-direction: row-reverse;
      border-radius: 30px;
      height: 418px;
      align-items: center;
      background-color: #f5f5f4;
      position: relative;
      overflow: hidden;

      .blob-right {
        z-index: 1;
        top: -300px;
        left: -300px;
        width: 500px;
      }
    }
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("/mobile-background/SafestAccountBackground.svg") no-repeat
      center;
    background-size: 100%;
    border-radius: 30px;
    max-width: 362px;

    div {
      max-width: 362px;
    }

    @media ${devices.tablet} {
      background: none;
      max-width: 362px;
      z-index: 2;
    }
  }
  .first-block {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 30px 14px 0 14px;

    @media ${devices.tablet} {
      padding-left: 90px;
      width: 50%;
      justify-content: space-between;
      > div {
        padding-right: 100px;
        br:first-of-type {
          display: none;
        }
      }
    }

    h2 {
      position: relative;
      span:before {
        content: "";
        background-image: url("./mobile-background/green-trace.svg");
        position: absolute;
        width: 115px;
        height: 9px;
        left: 14px;
        top: 28px;
        @media ${devices.tablet} {
          left: 10px;
          top: 46px;
          width: 188px;
          height: 16px;
          background-size: 188px;
        }
      }

      @media ${devices.tablet} {
        font-size: 40px;
        line-height: 48px;
        z-index: 2;
      }
    }
  }
  .last-block {
    display: flex;
    flex-direction: column;
    gap: 72px;
    width: 286px;
    margin: auto;
    padding-top: 70px;

    p {
      padding-top: 14px;
    }

    @media ${devices.tablet} {
      flex-direction: row;
      width: 100%;
      justify-content: space-around;

      h3 {
        font-size: 26px;
      }

      p {
        width: 70%;
      }
    }

    > div {
      text-align: -webkit-center;
    }

    .support-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      div:first-child {
        height: 230px;
      }
    }
  }
`;
const LearnMoreButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 16px;
  padding: 0;
`;

const Home = () => {
  useEffect(() => {
    let myPanel = document.getElementById("panel");
    let subpanel = document.getElementById("panel-container");

    myPanel!.onmousemove = transformPanel;
    myPanel!.onmouseenter = handleMouseEnter;
    myPanel!.onmouseleave = handleMouseLeave;

    let mouseX, mouseY;

    let transformAmount = 5;

    function transformPanel(mouseEvent: { pageX: number; pageY: number }) {
      mouseX = mouseEvent.pageX;
      mouseY = mouseEvent.pageY;

      const centerX = myPanel!.offsetLeft + myPanel!.clientWidth / 2;
      const centerY = myPanel!.offsetTop + myPanel!.clientHeight / 2;

      const percentX = (mouseX - centerX) / (myPanel!.clientWidth / 2);
      const percentY = -((mouseY - centerY) / (myPanel!.clientHeight / 2));

      subpanel!.style.transform =
        "perspective(400px) rotateY(" +
        percentX * transformAmount +
        "deg) rotateX(" +
        percentY * transformAmount +
        "deg)";
    }

    function handleMouseEnter() {
      setTimeout(() => {
        subpanel!.style.transition = "";
      }, 100);
      subpanel!.style.transition = "transform 0.1s";
    }

    function handleMouseLeave() {
      subpanel!.style.transition = "transform 0.1s";
      setTimeout(() => {
        subpanel!.style.transition = "";
      }, 100);

      subpanel!.style.transform =
        "perspective(400px) rotateY(0deg) rotateX(0deg)";
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Current account x Non-custodial Wallet | Deblock</title>
        <meta
          name="description"
          content="Take control of your money. Receive your salary or pay your rent from your current account with £ or your crypto assets. Everything in one non custodial wallet.g"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Header />

      <Modal />

      <LandingContainer>
        <div className="double-phone-container">
          <Lottie animationData={DoublePhone} loop={false} />
          <FirstContainer>
            <div className="image-container">
              <Lottie animationData={DoublePhone} loop={false} />
            </div>
            <div className="text-container">
              <h1>A GBP account merged with a non-custodial wallet</h1>
              <p>
                Spend, transfer and exchange your pounds or your crypto
                indifferently
              </p>
              <form action="">
                <input type="email" placeholder="Your email" />
                <button type="submit">Request access</button>
              </form>
            </div>
            <div className="hide-in-mobile">
              Non-custodial crypto wallets give you complete control and
              ownership of your funds. Nobody can freeze your
              assets/withdrawals, block them or take them away.{" "}
            </div>
            <Blob className="blob-left" color="#E5E0EA" />
            <Blob className="blob-top" color="#F9D6BE" />
            <Blob className="blob-right" color="#F5EAD2" />
          </FirstContainer>
        </div>
        <BackedByContainer>
          <h3>Backed by the best</h3>
          <div className="image-container">
            <div>
              <Image src={Vc} alt="20vc logo" />
              <Image src={Kraken} alt="Kraken logo" />
            </div>
            <br />
            <div>
              <Image src={Hoxton} alt="Hoxton logo" />
              <Image src={Headline} alt="Headline logo" />
            </div>
          </div>
        </BackedByContainer>
        <BestAccount>
          <div className="image-container">
            <Lottie animationData={Iban} />
          </div>
          <div className="texte-container">
            <h2>
              One of the <span>best</span> sterling accounts
            </h2>
            <div>
              Get your own IBANs, instant transfers, physical/
              <br />
              virtual cards, and 15+ currencies at the best exchange rates.
            </div>
            <LearnMoreButton>
              Learn more <Image src={Arrow} alt="Arrow right" />{" "}
            </LearnMoreButton>
          </div>
          <Blob className="blob-bot" color="#D4E8DA" />
          <Blob className="blob-left" color="#CAD2E3" />
        </BestAccount>
        <NftContainer>
          <div className="image-container">
            <div id="panel">
              <Image id="panel-container" src={Nft} alt="Nft card" />
            </div>
          </div>
          <h2>Brand your card with your own NFT</h2>
        </NftContainer>
        <Deposit>
          <div className="image-container">
            <Lottie animationData={BankAnimation} />
          </div>
          <div className="texte-container">
            <h2>Where you can deposit all your crypto</h2>
            <div>
              Unlimited crypto deposit and withdrawals. Unlimited exchange to
              GBP, EUR or USD.
            </div>
            <div>
              <LearnMoreButton>
                Learn more <Image src={Arrow} alt="Arrow right" />{" "}
              </LearnMoreButton>
            </div>
          </div>
          <Blob className="blob-bot" color="#EEE89F" />
          <Blob className="blob-top" color="#F7DFC5" />
        </Deposit>
        <CashOrCrypto>
          <div>
            <h2>
              In <span>Cash</span> or in Crypto It&apos;s up to you!
            </h2>
            <p>
              We&apos;ll handle the exchange of Crypto and GBP under the hood
              based on your needs
            </p>
          </div>
          <div>
            <div>
              <Image src={Salary} alt="Get your salary" />
              <div className="text-container">
                <span>Get your salary </span>
                <br />
                in Crypto or GBP
              </div>
            </div>
            <div className="text-container">
              <Image src={Car} alt="Buy a car" />
              <div>
                <span>Buy a car</span>
                <br />
                in Crypto or GBP
              </div>
            </div>
            <div className="text-container">
              <Image src={Rent} alt="Pay your rent" />
              <div>
                <span>Pay your rent</span>
                <br />
                in Crypto or GBP
              </div>
            </div>
            <div className="text-container">
              <Image src={Coffee} alt="Buy your coffee" />
              <div>
                <span>Buy your coffee</span>
                <br />
                in Crypto or GBP
              </div>
            </div>
          </div>
        </CashOrCrypto>
        <SafestAccount>
          <div>
            <div className="image-container">
              <Lottie animationData={SafeAccount} loop={false} />
            </div>
            <div className="first-block">
              <h2>
                Your <span>keys</span>. Your assets.
              </h2>
              <div>
                This is self-custody.{" "}
                <span style={{ fontWeight: 700 }}>
                  Even if Deblock disappears
                </span>
                , 100% of your wallet is protected.
                <br />
                <br />
                Your wealth is safe and nobody can freeze it or take it away.
              </div>
              <LearnMoreButton>
                Learn more <Image src={Arrow} alt="Arrow right" />{" "}
              </LearnMoreButton>
            </div>
            <Blob className="blob-right" color="#F5D299" />
          </div>
          <div className="last-block">
            <div>
              <Image src={Commission} alt="Commission free" />
              <div>
                <h3>Buy commission-free</h3>
                <p>
                  Unlimited and in perpetuity
                  <br />
                  with our{" "}
                  <LearnMoreButton>
                    native plan <Image src={Arrow} alt="Arrow right" />{" "}
                  </LearnMoreButton>
                </p>
              </div>
            </div>
            <div className="support-section">
              <Lottie animationData={Support} />
              <div>
                <h3>24/7 Live support</h3>
                <p>
                  Talk to a real human (not a machine). We are here for you.
                </p>
              </div>
            </div>
          </div>
        </SafestAccount>
      </LandingContainer>
      <Footer />
    </div>
  );
};

export default Home;
