import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { devices } from "../../utils/devices";
import styled from "styled-components";
import Blob from "../../views/Blob";

import Linkedin from "../../assets/LinkedIn.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import LogoFooter from "../../assets/logo-footer.svg";
import FlagFr from "../../assets/fr-flag.svg";
import FlagEn from "../../assets/en-flag.svg";
import Arrow from "../../assets/arrow.svg";
import Triangle from "../../assets/triangle.svg";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px; /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  height: 440px;
  background-color: #171616;
  line-height: 28px;
  z-index: 10;
  position: relative;
  overflow: hidden;

  .Blob {
    position: absolute;
  }

  .blob-left {
    top: -200px;
  }

  a,
  h4,
  span {
    color: white;
  }

  .community {
    display: flex;
    align-items: center;
    font-weight: 700;
    gap: 12px;
    color: white;
    grid-area: 1 / 4 / 2 / 6;

    span {
      padding-right: 16px;
    }

    a {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }

  @media ${devices.tabletMax} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    height: 100%;

    .Blob {
      display: none;
    }

    .community {
      padding: 0 24px;
    }
  }
`;
const FooterHeader = styled.div`
  display: flex;
  padding: 0 140px;
  font-weight: 500;
  z-index: 3;
  grid-area: 1 / 1 / 2 / 3;
  align-items: center;
  gap: 24px;
  color: white;

  .country-selected {
    position: relatvie;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    min-width: fit-content;

    > div {
      > span {
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        text-decoration: none;
        font-weight: 700;

        :after {
          content: attr(data-text);
          content: attr(data-text) / "";
          height: 0;
          visibility: hidden;
          overflow: hidden;
          user-select: none;
          pointer-events: none;
          font-weight: 700;
        }
      }
      /* :hover {
        font-weight: 700;
      } */
    }

    > div {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .dropdown {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 70px;
      left: 167px;
      justify-content: space-evenly;
      align-items: flex-start;
      max-width: 224px;
      width: 100%;
      height: 96px;
      background: #ffffff;
      border: 1px solid #000000;
      box-shadow: 0px 2.85227px 2.85227px rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      padding: 4px;
      z-index: 15;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 96%;
        cursor: pointer;
        border-radius: 4px;
        padding-left: 8px;

        > div {
          > div {
            display: flex;
            gap: 24px;
          }
          display: flex;
          gap: 16px;
          align-items: center;
        }

        > img {
          visibility: hidden;
          padding-right: 16px;
        }

        :hover {
          background-color: #f3f3f3;
          > img {
            visibility: visible;
            text-align: end;
          }
        }

        span {
          color: black !important;
        }
      }
    }
  }

  @media ${devices.tabletMax} {
    padding: 48px 24px 0 24px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 140px;
  gap: 12px;
  row-gap: 32px;
  grid-area: 2 / 1 / 3 / 6;

  * {
    z-index: 2;
  }

  h4 {
    font-weight: 700;
  }

  a {
    color: #dadada;
    display: inline-flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    text-decoration: none;

    :after {
      content: attr(data-text);
      content: attr(data-text) / "";
      height: 0;
      visibility: hidden;
      overflow: hidden;
      user-select: none;
      pointer-events: none;
      font-weight: 600;
    }

    :hover {
      color: white;
      font-weight: 600;
    }

    /* :after {
      content: attr(data-text);
      content: attr(data-text) / "";
      height: 0;
      visibility: hidden;
      overflow: hidden;
      user-select: none;
      pointer-events: none;
      font-weight: 600;
    } */
  }

  @media ${devices.tabletMax} {
    padding: 0 24px;
  }
`;
const Company = styled.div``;
const Crypto = styled.div``;
const FiatAccount = styled.div``;
const Help = styled.div``;
const LegalCompliance = styled.div``;

const DeblockAddress = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  background-color: black;
  height: 75px;
  padding: 0 140px;
  z-index: 3;
  grid-area: 4 / 1 / 5 / 6;

  @media ${devices.tabletMax} {
    padding: 0 24px;
  }
`;

const Footer = () => {
  const { t, i18n } = useTranslation("footer");
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const closeDropdown = (e: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(false);
    }
  };

  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", closeDropdown);
  }

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, router.asPath, { locale: newLocale });
  };

  const CountrySelected = () => {
    if (i18n.language.includes("fr")) {
      return (
        <div onClick={() => setOpenDropdown(!openDropdown)}>
          <Image src={FlagFr} alt="French flag" />
          <span>France</span>
          <Image src={Triangle} alt="Triangle down" />
        </div>
      );
    } else if (i18n.language.includes("en")) {
      return (
        <div onClick={() => setOpenDropdown(!openDropdown)}>
          <Image src={FlagEn} alt="French flag" />
          <span>{t("United Kingdom")}</span>
          <Image src={Triangle} alt="Triangle down" />
        </div>
      );
    }
  };

  return (
    <FooterContainer>
      <FooterHeader>
        <Image src={LogoFooter} alt="Logo deblock" />
        <div className="country-selected">
          {CountrySelected()}
          {openDropdown && (
            <ul className="dropdown" ref={dropdownRef}>
              <li onClick={() => onToggleLanguageClick("en")}>
                <div>
                  <Image src={FlagEn} alt="Uk flag" />
                  <span data-text={t("United Kingdom")}>
                    {t("United Kingdom")}
                  </span>
                </div>
                <Image src={Arrow} alt="Arrow right" />
              </li>
              <li onClick={() => onToggleLanguageClick("fr-FR")}>
                <div>
                  <Image src={FlagFr} alt="French flag" />
                  <span data-text="Français">France</span>
                </div>
                <Image src={Arrow} alt="Arrow right" />
              </li>
            </ul>
          )}
        </div>
      </FooterHeader>
      <LinksContainer>
        <Company>
          <h4>{t("Company")}</h4>
          <ul>
            <li>
              <Link href="/" data-text={t("Home")}>
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link href="/blog" data-text={t("Blog")}>
                {t("Blog")}
              </Link>
            </li>
            <li>
              <Link href="/about-us" data-text={t("About")}>
                {t("About")}
              </Link>
            </li>
            <li>
              <Link href="/press" data-text={t("Press")}>
                {t("Press")}
              </Link>
            </li>
            <li>
              <a
                href="https://apply.workable.com/deblock"
                target="_blank"
                rel="noreferrer"
                data-text={t("Career")}
              >
                {t("Career")}
              </a>
            </li>
            <li>
              <Link href="/support" data-text={t("Contact")}>
                {t("Contact")}
              </Link>
            </li>
          </ul>
        </Company>
        <Crypto>
          <h4>{t("Product")}</h4>
          <ul>
            <li>
              <Link href="/product" data-text={t("Features")}>
                {t("Features")}
              </Link>
            </li>
            <li>
              <Link href="/ncw" data-text={t("Non-custodial wallet")}>
                {t("Non-custodial wallet")}
              </Link>
            </li>
            <li>
              <Link href="/pricing" data-text={t("Pricing plan")}>
                {t("Pricing plan")}
              </Link>
            </li>
            <li>
              <Link href="/nft" data-text="Bursted Bubbles">
                Bursted Bubbles
              </Link>
            </li>
          </ul>
        </Crypto>
        <Help>
          <h4>{t("Help")}</h4>
          <ul>
            <li>
              <Link href="/support" data-text={t("Contact-2")}>
                {t("Contact-2")}
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/uSqj6t9G9e"
                data-text="Discord"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/DeblockApp"
                data-text="Twitter"
              >
                Twitter
              </a>
            </li>
            <li>
              <Link href="" data-text="FAQ">
                FAQ
              </Link>
            </li>
          </ul>
        </Help>
        <LegalCompliance>
          <h4>{t("Legal & Compliance")}</h4>
          <ul>
            <li>
              <Link href="/terms-and-policies" data-text={t("Website terms")}>
                {t("Website terms")}
              </Link>
            </li>
            <li>
              <Link href="/legal" data-text={t("Legal Agreements")}>
                {t("Legal Agreements")}
              </Link>
            </li>
            <li>
              <Link href="/privacy" data-text={t("Privacy")}>
                {t("Privacy")}
              </Link>
            </li>
          </ul>
        </LegalCompliance>
      </LinksContainer>
      <div className="community">
        <span>{t("Join our community")}</span>
        <a href="">
          <Image src={Instagram} alt="Instagram logo" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/DeblockApp"
        >
          <Image src={Twitter} alt="Twitter logo" />
        </a>
        <a href="">
          <Image src={Linkedin} alt="Linkedin" />
        </a>
      </div>

      <DeblockAddress>
        Deblock LTD, 8-14 Verulam St, London WC1X 8LZ United Kingdom
      </DeblockAddress>
      <Blob className="blob-left" color="#0B0A0A" />
      <Blob className="blob-right" color="#0B0A0A" />
    </FooterContainer>
  );
};

export default Footer;
