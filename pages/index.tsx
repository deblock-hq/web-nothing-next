import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import DoublePhoneEn from "../src/assets/lottie/landing/DoublePhoneEn.json";
import DoublePhoneFr from "../src/assets/lottie/landing/DoublePhoneFr.json";
import IbanEn from "../src/assets/lottie/landing/IbanEn.json";
import IbanFr from "../src/assets/lottie/landing/IbanFr.json";
import BankEn from "../src/assets/lottie/landing/BankEn.json";
import BankFr from "../src/assets/lottie/landing/BankFr.json";
import SafeAccount from "../src/assets/lottie/landing/SafeAccount.json";
import SupportEn from "../src/assets/lottie/landing/SupportEn.json";
import SupportFr from "../src/assets/lottie/landing/SupportFr.json";

import Vc from "../src/assets/backed/20vc.svg";
import Headline from "../src/assets/backed/headline.svg";
import Hoxton from "../src/assets/backed/hoxton.svg";
import Kraken from "../src/assets/backed/kraken.svg";
import Nft2 from "../src/assets/backed/nft2.svg";
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
import Link from "next/link";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Modal from "../src/views/Modal";
import { Trans, useTranslation } from "next-i18next";
import { useInView } from "react-intersection-observer";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 36px 24px;
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
    padding-top: 40px;
    > div:first-child {
      display: none;
    }
  }

  @media ${devices.tablet} {
    /* gap: 24px; */
    align-items: center;
    padding-bottom: 134px;

    .image-container {
      height: auto;
    }

    .double-phone-container {
      display: flex;
      justify-content: center;
      padding-top: 0px;
      width: 100%;
      max-width: 1340px;
      position: relative;
      animation: FadeIn 0.8s;

      @keyframes FadeIn {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes FadeIn3 {
        0% {
          opacity: 0;
        }
        60% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      > div:first-child {
        display: block;
        position: absolute;
        max-width: 571px;
        right: 0;
        /* top: 80px; */
        z-index: 3;
        width: 40%;
        top: 45px;
        right: -30px;

        div {
          overflow: visible !important;
        }

        .mockup-phone-1 {
          position: absolute;
          /* right: -250px;
          top: -220px; */
          right: -120px;
          top: -100px;
        }

        .mockup-phone-2 {
          position: absolute;
          /* left: -175px;
          top: 465px; */
          left: -60px;
          top: 340px;
        }
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
    font-size: 28px;
  }
`;
const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  z-index: 1;

  @media ${devices.tablet} {
    gap: 0;
    height: 600px;
    position: relative;
    /* margin-bottom: 20px; */
    overflow: hidden;
    border-radius: 30px;
    max-width: 1152px;
    justify-content: center;
    background-color: white;
    /* animation: backgroundFadeIn 0.5s; */

    /* @keyframes backgroundFadeIn {
      0% {
        background-color: #fbfaf9;
      }
      100% {
        background-color: #faf5ef;
      }
    } */

    .blob-left,
    .blob-top,
    .blob-right {
      position: absolute;
      z-index: -1;
      width: 55%;

      animation: FadeIn 0.5s;
    }

    .blob-left {
      top: 0px;
      left: -372px;
    }

    .blob-top {
      top: -450px;
      left: 300px;
    }
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("/mobile-background/FirstContainerBackground.svg") no-repeat
      center;
    /* background-size: 100%; */
    background-size: cover;
    height: 224px;
    border-radius: 30px;
    z-index: 3;
    background-color: #faf5ef;

    @media ${devices.tablet} {
      background: none;
      position: absolute;
      right: -110px;
      bottom: -20px;
      height: unset;
      max-width: 496px;
      display: none;
    }

    svg {
      width: 100%;
      max-width: 360px;

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

    .wallet-tooltip {
      display: inline-flex;
      gap: 8px;
      align-items: center;

      > img {
        padding-bottom: 4px;
      }
    }

    @media ${devices.tablet} {
      padding: 72px 90px;
      width: 58%;
      gap: 32px;

      h1 {
        font-size: 50px;
        line-height: 65px;
        animation: FadeIn 1s;
      }
      p {
        width: 65%;
        font-size: 18px;
        line-height: 28px;
        animation: FadeIn 1.2s;
        padding-bottom: 8px;
      }
      .wallet-tooltip {
        > img {
          padding-bottom: 16px;
          cursor: pointer;
        }
      }
    }
  }
  h1 {
    font-size: 26px;
    /* font-size: max(26px, 48px); */
    /* font-size: clamp(26px, 4em, 48px); */
    line-height: 34px;
    position: relative;
    /* min-width: 26px;
    max-width: 48px;
    width: 3vw; */

    /* > span:hover span,
    > span:hover + .display-on-mobile {
      visibility: visible;
    } */

    > span:first-child {
      position: relative;

      /* :after {
        content: "";
        background: url("/mobile-background/info-i.svg") no-repeat;
        position: absolute;
        width: 20px;
        height: 20px;
        top: 0;
        left: 80px;
        cursor: pointer;
 */
      /* @media ${devices.tablet} {
          top: 12px;
          left: 144px;
        } */
      /* } */
    }
  }
  p {
    font-size: 18px;
    line-height: 23px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 106%;
    align-self: center;
    gap: 16px;
    padding-top: 16px;

    @media ${devices.tablet} {
      flex-direction: row;
      width: 100%;
      gap: 14px;
      height: 40px;
      padding-top: 0;
      animation: FadeIn 1.2s;
    }

    input {
      border: 1px solid #000000;
      border-radius: 3.81572px;
      box-shadow: 1px 1px 0px 0px rgb(0 0 0);
      height: 58px;
      width: calc(100% - 28px);
      padding-left: 20px;

      ::placeholder {
        color: rgba(88, 88, 88, 0.5);
        font-size: 16px;
      }

      :focus {
        outline: 1.5px solid transparent;
        box-shadow: 2px 2px 0px 0px rgb(0 0 0);
        background-color: white;
      }

      @media ${devices.tablet} {
        width: 196px;
        box-shadow: 1px 1px 0px 0px rgb(0 0 0);
        height: 40px;
        padding-left: 12px;
      }
    }
    button {
      color: white;
      background: #000000;
      border: 0.95393px solid #000000;
      border-radius: 3.81572px;
      font-weight: 600;
      height: 58px;
      font-size: 16px;
      width: calc(100% - 3px);
      cursor: pointer;

      :hover {
        background: rgba(0, 0, 0, 0.7);
      }

      @media ${devices.tablet} {
        font-size: 13px;
        padding: 12px 14px;
        font-weight: 700;
        height: 45px;
        width: 132px;
        min-width: fit-content;
      }
    }
  }
`;
const BackedByContainer = styled.div`
  color: black;
  border-radius: 30px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-color: white;
  padding: 0 8px;

  @media ${devices.tablet} {
    height: 134px;
    gap: 26px;
    max-width: 1152px;
    width: 100%;
    padding: 0;
    /* margin-bottom: 100px; */
  }

  h3 {
    font-size: 16px;
    color: gray;
    padding-top: 24px;
    line-height: 24px;

    @media ${devices.tablet} {
      padding-top: 20px;
      color: black;
    }
  }

  .kraken-logo {
    max-height: 22px;
  }

  img {
    max-width: 100%;
    width: fit-content;
    height: 20px;
    align-self: center;

    @media ${devices.tablet} {
      height: 26px;
      /* filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(5deg)
        brightness(102%) contrast(102%); */
    }
  }

  .image-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;

    @media ${devices.tablet} {
      display: flex;
      justify-content: space-evenly;
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

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-around;
    background-color: rgba(162, 167, 245, 0.1);
    border-radius: 30px;
    gap: 140px;
    position: relative;
    align-items: center;
    height: 506px;
    padding: 0;
    margin-bottom: 8px;
    overflow: hidden;
    width: 100%;
    max-width: 1152px;

    .blob-left {
      top: -600px;
      left: -890px;
      max-width: 100%;
    }

    .blob-bot {
      max-width: 100%;
      top: 298px;
      left: -200px;
      width: 500px;
    }
  }

  .image-container {
    display: flex;
    justify-content: center;
    background: url("/mobile-background/BestAccountBackground.svg") no-repeat
      center;
    background-size: cover;
    background-color: rgba(162, 167, 245, 0.1);
    border-radius: 30px;

    div {
      max-width: 292px;
    }

    @media ${devices.tablet} {
      background: none;
      right: 616px;
      padding-left: 40px;

      div {
        max-width: 502px;
        min-width: 400px;
        width: 90%;
      }
    }
  }

  .texte-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0px 14px;

    @media ${devices.tablet} {
      gap: 32px;
      width: 45%;
      padding: 0;
    }

    h2 {
      line-height: 34px;
      span {
        position: relative;
      }
      span:after {
        content: "";
        background-image: url("/mobile-background/blue-trace.svg");
        position: absolute;
        width: 61px;
        height: 11px;
        left: 0;
        bottom: -8px;
        @media ${devices.tablet} {
          left: 8px;
          bottom: -4px;
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
        width: 80%;
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
    background-color: #fcf5ed;
    border-radius: 30px;
    height: 192px;
    max-width: 1152px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    /* padding: 0 52px 0 90px; */
    margin-bottom: 8px;
    z-index: 2;

    h2 {
      padding-left: 90px !important;
    }
  }

  .image-container {
    background-color: #fcf5ed;
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
      width: 356px;
      height: 280px;
      /* padding-top: top; */
      justify-content: flex-start;
    }

    img {
      width: 160px;

      @media ${devices.tablet} {
        width: 100%;
        padding-top: 0;
      }
    }
  }

  .text-container {
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 30px;

    .blob-nft {
      display: none;

      @media ${devices.tablet} {
        display: block;
        position: absolute;
        top: -60px;
        left: -100px;
        width: 200px;
      }
    }
  }

  h2 {
    text-align: center;
    padding: 0px 22px;
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 34px;

    @media ${devices.tablet} {
      font-size: 40px;
      line-height: 48px;
      width: 58%;
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
    gap: 80px;
    align-items: center;
    height: 506px;
    padding: 0;
    overflow: hidden;
    position: relative;
    max-width: 1152px;
    width: 100%;

    .Blob {
      z-index: 1;
    }
  }

  h2 {
    font-size: 28px;
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
      width: 90%;
    }

    @media ${devices.tablet} {
      background: none;
      z-index: 2;
      max-width: 324px;
      padding-left: 70px;

      div {
        max-width: 324px;
      }
    }
  }
  .texte-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 14px 82px 14px;
    line-height: 28px;

    @media ${devices.tablet} {
      gap: 32px;
      width: 37%;
      z-index: 2;
      padding: 0;

      div:first-child {
        width: 80%;
      }
    }
  }
`;
const CashOrCrypto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 88px;

  @media ${devices.tablet} {
    padding-top: 112px;
    max-width: 880px;
  }

  h2 {
    font-size: 28px;
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
      background: url("/mobile-background/right-arrow-curved.svg") no-repeat;
      position: absolute;
      width: 165px;
      height: 46px;
      bottom: 30px;
      left: 36px;
      background-size: 100%;

      @media ${devices.tablet} {
        bottom: 48px;
      }
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
      width: 50%;
      align-self: center;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 70px;

    @media ${devices.tablet} {
      flex-direction: row;
    }

    span {
      font-weight: 700;
    }
  }
  .text-container {
    font-size: 16px;
    line-height: 24px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
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
    gap: 88px;
    max-width: 1152px;

    > div:first-child {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
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
    background-size: cover;
    /* background-size: 100%; */
    border-radius: 30px;
    /* max-width: 362px; */

    div {
      max-width: 368px;
    }

    @media ${devices.tablet} {
      background: none;
      max-width: 362px;
      z-index: 2;
      padding-right: 15%;
    }
  }
  .first-block {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 30px 14px 0 14px;

    @media ${devices.tablet} {
      gap: 30px;
      padding-left: 90px;
      width: 57%;
      justify-content: space-between;
      > div {
        padding-right: 100px;
        width: 73%;
        br:first-of-type {
          display: none;
        }
      }
    }

    h2 {
      position: relative;
      span:before {
        content: "";
        background-image: url("/mobile-background/green-trace.svg");
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
    padding-top: 80px;
    padding-bottom: 22px;
    cursor: pointer;

    p {
      padding-top: 14px;
    }

    @media ${devices.tablet} {
      flex-direction: row;
      width: 840px;
      justify-content: space-around;
      padding-top: 0;

      h3 {
        font-size: 16px;
        font-weight: 700;
        padding-top: 16px;
      }

      p {
        width: 100%;
        font-size: 16px;
      }
    }

    > a > div {
      text-align: -webkit-center;
    }

    .support-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      h3 {
        padding-top: 18px;
      }

      div:first-child {
        height: 240px;
      }
    }
  }
`;
const LearnMoreButton = styled.span`
  font-weight: 700;

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 16px;
    padding: 0;
    cursor: pointer;

    img {
      transition: transform 250ms;
    }
  }

  a:hover > img {
    transform: translateX(5px);
  }
`;
const Tooltip = styled.span`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  padding: 11px 11px 11px 19px;
  width: 416px;
  /* width: 100%; */
  gap: 16px;
  top: -92px;
  left: -277px;
  /* visibility: hidden; */
  background-color: white;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 2px 2px 0px 0px rgb(0 0 0);

  position: absolute;
  z-index: 5;

  ::before {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 95%;
    margin-left: -4px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    z-index: 3;
    /* box-shadow: 3px 3px 0px 0px rgb(0 0 0); */
  }

  ::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 95%;
    margin-left: -5px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent;
    /* box-shadow: 3px 3px 0px 0px rgb(0 0 0); */
  }

  &.hide-on-mobile {
    display: none;
  }

  &.display-on-mobile {
    display: flex;
    width: auto;
    left: 0;
  }

  @media ${devices.tablet} {
    &.hide-on-mobile {
      display: flex;
    }

    /* width: 416px;
    gap: 16px;
    top: -92px;
    left: -268px; */
    min-width: 416px;
    width: 454px;
    gap: 16px;
    top: -95px;
    left: -268px;

    ::before,
    ::after {
      left: 87%;
    }

    ::before {
      border-color: white transparent transparent transparent;
    }

    ::after {
      border-color: black transparent transparent transparent;
    }

    &.display-on-mobile {
      display: none;
    }
  }
`;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "landing",
        "footer",
        "modal",
      ])),
    },
  };
};

interface LandingProps {
  displayModal: () => void;
  whitelistEmail: string;
  setWhitelistEmail: (whitelistEmail: string) => void;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

const Home = ({
  displayModal,
  whitelistEmail,
  setWhitelistEmail,
  openModal,
  setOpenModal,
}: LandingProps) => {
  const { t, i18n } = useTranslation("landing");

  const frAssets = i18n.language.includes("fr");

  const tooltipRef = useRef<HTMLInputElement>(null);

  const [openTooltip, setOpenTooltip] = useState(false);

  const closeTooltip = (e: { target: any }) => {
    if (
      tooltipRef.current &&
      openTooltip &&
      !tooltipRef.current.contains(e.target)
    ) {
      setOpenTooltip(false);
    }
  };

  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", closeTooltip);
  }

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

  const [checkLocalStorage, setCheckLocalStorage] = useState<string | null>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCheckLocalStorage(localStorage.getItem("token"));
      if (localStorage.getItem("modal")) setOpenModal(true);

      if (openModal) {
        document.body.style.overflowX = "hidden";
      } else document.body.style.overflowX = "visible";
    }
  }, [openModal, setOpenModal]);

  const lottieRef = useRef<any>(null);
  const doublePhoneRef = useRef<any>(null);
  const { ref: myRef, inView: renderSafeAccount } = useInView();

  useEffect(() => {
    if (renderSafeAccount && lottieRef.current) {
      lottieRef.current.play();
    } else {
      lottieRef.current.stop();
    }
  }, [renderSafeAccount]);

  return (
    <div>
      <LandingContainer>
        {openModal && (
          <Modal
            // isOpen={openModal}
            setIsOpen={setOpenModal}
            email={whitelistEmail}
          />
        )}
        <div className="double-phone-container">
          <Lottie
            lottieRef={doublePhoneRef}
            animationData={frAssets ? DoublePhoneFr : DoublePhoneEn}
            loop={false}
            autoPlay={false}
          />
          {/* <Example /> */}
          <FirstContainer>
            <div className="image-container">
              <Lottie
                lottieRef={doublePhoneRef}
                animationData={frAssets ? DoublePhoneFr : DoublePhoneEn}
                loop={false}
                autoPlay={false}
              />
            </div>
            <div className="text-container">
              <h1>
                {t("title")}{" "}
                <span className="wallet-tooltip">
                  {t("wallet")}
                  <Image
                    className="hide-on-mobile"
                    width={18}
                    height={18}
                    src="/mobile-background/info-i.svg"
                    alt="information logo"
                    onClick={() => setOpenTooltip((prev) => !prev)}
                  />
                  {openTooltip && (
                    <Tooltip ref={tooltipRef} className="hide-on-mobile">
                      <Image
                        width={18}
                        height={18}
                        src="/mobile-background/info-i.svg"
                        alt="information logo"
                      />
                      {t("tooltip")}
                    </Tooltip>
                  )}
                </span>
                {openTooltip && (
                  <Tooltip className="display-on-mobile">
                    <Image
                      width={18}
                      height={18}
                      src="/mobile-background/info-i.svg"
                      alt="information logo"
                    />
                    {t("tooltip")}
                  </Tooltip>
                )}
              </h1>
              <p>{t("hero-description")}</p>
              <form onSubmit={(e) => e.preventDefault()}>
                {!checkLocalStorage ? (
                  <input
                    type="email"
                    placeholder={t("whitelist-placeholder") || ""}
                    value={whitelistEmail}
                    onChange={(e) => setWhitelistEmail(e.target.value)}
                  />
                ) : null}
                <button type="submit" onClick={displayModal}>
                  {!checkLocalStorage
                    ? t("button-request")
                    : t("button-position")}
                </button>
              </form>
            </div>
            <Blob className="blob-left" color="#F2E1FF" />
            <Blob className="blob-top" color="#FFB483" />
            <Blob className="blob-right" color="#FFE5A6" />
          </FirstContainer>
        </div>
        <BackedByContainer>
          <h3>{t("backed-by-the-best")}</h3>
          <div className="image-container">
            <Image src={Vc} alt="20vc logo" />
            <Image className="kraken-logo" src={Kraken} alt="Kraken logo" />
            <Image src={Hoxton} alt="Hoxton logo" />
            <Image src={Headline} alt="Headline logo" />
          </div>
        </BackedByContainer>
        <BestAccount>
          <div className="image-container">
            <Lottie animationData={frAssets ? IbanFr : IbanEn} />
          </div>
          <div className="texte-container">
            <h2>
              <Trans i18nKey="best-account" t={t}>
                One of the <span>best</span> sterling accounts
              </Trans>
            </h2>
            <div>{t("best-account-text")}</div>
            <LearnMoreButton>
              <Link href="/product">
                {t("learn-more")} <Image src={Arrow} alt="Arrow right" />{" "}
              </Link>
            </LearnMoreButton>
          </div>
          <Blob className="blob-bot" color="#D4E8DA" />
          <Blob className="blob-left" color="#CAD2E3" />
        </BestAccount>
        <NftContainer>
          <div className="image-container">
            <div id="panel">
              <Image id="panel-container" src={Nft2} alt="Nft card" />
              {/* <Image id="panel-container" src={Nft2} alt="Nft card" /> */}
            </div>
          </div>
          <div className="text-container">
            <h2>{t("brand-your-card")}</h2>
            <Blob className="blob-nft" color="#CBEBF6" />
          </div>
        </NftContainer>
        <Deposit>
          <div className="image-container">
            <Lottie animationData={frAssets ? BankFr : BankEn} />
          </div>
          <div className="texte-container">
            <h2>{t("deposit-your-crypto")}</h2>
            <div>{t("deposit-your-crypto-text")}</div>
            <div>
              <LearnMoreButton>
                <Link href="/product/#deposit-yout-crypto-assets" scroll={true}>
                  {t("learn-more")} <Image src={Arrow} alt="Arrow right" />{" "}
                </Link>
              </LearnMoreButton>
            </div>
          </div>
          <Blob className="blob-bot" color="#EEE89F" />
          <Blob className="blob-top" color="#F7DFC5" />
        </Deposit>
        <CashOrCrypto>
          <div>
            <h2>
              <Trans i18nKey="cash-or-crypto" t={t}>
                In <span>Cash</span> or in Crypto
                <br />
                It&apos;s up to you!
              </Trans>
            </h2>
            <p>
              {t("cash-or-crypto-text-1")}
              <br />
              {t("cash-or-crypto-text-2")}
              <br />
            </p>
          </div>
          <div>
            <div className="text-container">
              <Image src={Salary} alt="Get your salary" />
              <div>
                <span>{t("get-your-salary")}</span>
                <br />
                {t("in-crypto-or-money")}
              </div>
            </div>
            <div className="text-container">
              <Image src={Car} alt="Buy a car" />
              <div>
                <span>{t("buy-a-car")}</span>
                <br />
                {t("in-crypto-or-money")}
              </div>
            </div>
            <div className="text-container">
              <Image src={Rent} alt="Pay your rent" />
              <div>
                <span>{t("pay-your-rent")}</span>
                <br />
                {t("in-crypto-or-money")}
              </div>
            </div>
            <div className="text-container">
              <Image src={Coffee} alt="Buy your coffee" />
              <div>
                <span>{t("buy-your-coffee")}</span>
                <br />
                {t("in-crypto-or-money")}
              </div>
            </div>
          </div>
        </CashOrCrypto>
        <SafestAccount>
          <div>
            <div className="image-container" ref={myRef}>
              {/* {renderSafeAccount && ( */}
              <Lottie
                animationData={SafeAccount}
                loop={false}
                autoPlay={false}
                lottieRef={lottieRef}
              />
              {/* )} */}
              {/* <ScrollAnimation
                lottieFile={SafeAccount}
                maxFrame={121}
                altText="Money dropping out of a bed"
              /> */}
            </div>
            <div className="first-block">
              <h2>
                <Trans i18nKey="your-keys-your-assets" t={t}>
                  Your <span>keys</span>. Your assets.
                </Trans>
              </h2>
              <div>
                {t("your-keys-your-assets-text-1")}{" "}
                <span style={{ fontWeight: 700 }}>
                  {t("Even if Deblock goes down")}{" "}
                </span>
                {t("wallet protected-1")}
                <br />
                <br />
                {t("wallet protected-2")}
              </div>
              <LearnMoreButton>
                <Link href="/ncw">
                  {t("learn-more")} <Image src={Arrow} alt="Arrow right" />
                </Link>
              </LearnMoreButton>
            </div>
            <Blob className="blob-right" color="#F5D299" />
          </div>
          <div className="last-block">
            <Link href="/pricing">
              <div>
                <Image src={Commission} alt="Commission free" />
                <div>
                  <h3>{t("commission-free")}</h3>
                  <p>
                    {t("commission-free-text")}
                    <br />
                    {t("with our native plan.")}
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/support">
              <div className="support-section">
                <Lottie animationData={frAssets ? SupportFr : SupportEn} />
                <div>
                  <h3>{t("live-support")}</h3>
                  <p>
                    {t("live-support-text")}
                    <br />
                    {t("We are here for you.")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </SafestAccount>
      </LandingContainer>
    </div>
  );
};

export default Home;
