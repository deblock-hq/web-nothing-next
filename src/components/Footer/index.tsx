import Image from "next/image";
import Link from "next/link";
import React from "react";
import { devices } from "../../utils/devices";
import styled from "styled-components";
import Blob from "../../views/Blob";

import Linkedin from "../../assets/LinkedIn.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Placeholder from "../../assets/footer-placeholder.svg";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  @media ${devices.tabletMax} {
    gap: 40px;
    height: 100%;

    .Blob {
      display: none;
    }
  }
`;
const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 140px 0 140px;
  font-weight: 700;
  z-index: 3;

  .community {
    display: flex;
    align-items: center;
    gap: 12px;

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

  * {
    z-index: 3;
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

  @media ${devices.tabletMax} {
    padding: 0 24px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <div>
          {/* <Image /> */}
          {/* <span>France</span> */}
          <span>Change language component</span>
          {/* <Image src={Placeholder} alt="placeholder" /> */}
        </div>
        <div className="community">
          <span>Join our community</span>
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
      </FooterHeader>
      <LinksContainer>
        <Company>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/" data-text="Home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" data-text="Blog">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about-us" data-text="About">
                About
              </Link>
            </li>
            <li>
              <Link href="/press" data-text="Press">
                Press
              </Link>
            </li>
            <li>
              <a
                href="https://apply.workable.com/deblock"
                target="_blank"
                rel="noreferrer"
                data-text="Career"
              >
                Career
              </a>
            </li>
            <li>
              <Link href="/support" data-text="Career">
                Contact
              </Link>
            </li>
          </ul>
        </Company>
        <Crypto>
          <h4>Crypto</h4>
          <ul>
            <li>
              <Link href="/product" data-text="Features">
                Features
              </Link>
            </li>
            <li>
              <Link href="/ncw" data-text="Non-custodial wallet">
                Non-custodial wallet
              </Link>
            </li>
            <li>
              <Link href="/pricing" data-text="Pricing plan">
                Pricing plan
              </Link>
            </li>
            <li>
              <Link href="/nft" data-text="NFTs">
                Bursted Bubbles
              </Link>
            </li>
          </ul>
        </Crypto>
        {/* <FiatAccount>
          <h4>FIAT Account</h4>
          <ul>
            <li>
              <Link href="">Products Plans Services</Link>
            </li>
            <li>
              <Link href="">NFTs</Link>
            </li>
          </ul>
        </FiatAccount> */}
        <Help>
          <h4>Help</h4>
          <ul>
            <li>
              <Link href="/support" data-text="Contact">
                Contact
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
          <h4>Legal & Compliance</h4>
          <ul>
            <li>
              <Link href="/terms-and-policies" data-text="Website terms">
                Website terms
              </Link>
            </li>
            <li>
              <Link href="/legal" data-text="Legal Agreements">
                Legal Agreements
              </Link>
            </li>
            <li>
              <Link href="/privacy" data-text="Privacy">
                Privacy
              </Link>
            </li>
          </ul>
        </LegalCompliance>
      </LinksContainer>
      <DeblockAddress>
        Deblock LTD, 8-14 Verulam St, London WC1X 8LZ United Kingdom
      </DeblockAddress>
      <Blob className="blob-left" color="#0B0A0A" />
      <Blob className="blob-right" color="#0B0A0A" />
    </FooterContainer>
  );
};

export default Footer;
