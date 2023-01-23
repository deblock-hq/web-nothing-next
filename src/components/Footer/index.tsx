import Image from "next/image";
import Link from "next/link";
import React from "react";
import { devices } from "../../utils/devices";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;
  background-color: #30302f;
  line-height: 28px;

  a,
  h4,
  span {
    color: white;
  }

  @media ${devices.tabletMax} {
    gap: 40px;
    height: 100%;
  }
`;
const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 140px 0 140px;
  font-weight: 700;

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

  h4 {
    font-weight: 700;
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

  @media ${devices.tabletMax} {
    padding: 0 24px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <div>
          <Image />
          <span>France</span>
          <span>Français</span>
        </div>
        <div>
          <span>Join our community</span>
          <Image />
          <Image />
          <Image />
        </div>
      </FooterHeader>
      <LinksContainer>
        <Company>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Press</Link>
            </li>
            <li>
              <Link href="">Career</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </Company>
        <Crypto>
          <h4>Crypto</h4>
          <ul>
            <li>
              <Link href="">Non-custodial wallet</Link>
            </li>
            <li>
              <Link href="">Fees Services</Link>
            </li>
            <li>
              <Link href="">NFTs</Link>
            </li>
          </ul>
        </Crypto>
        <FiatAccount>
          <h4>FIAT Account</h4>
          <ul>
            <li>
              <Link href="">Products Plans Services</Link>
            </li>
            <li>
              <Link href="">NFTs</Link>
            </li>
          </ul>
        </FiatAccount>
        <Help>
          <h4>Help</h4>
          <ul>
            <li>
              <Link href="">Customer help</Link>
            </li>
            <li>
              <Link href="">Community System</Link>
            </li>
            <li>
              <Link href="">Status Complaints</Link>
            </li>
          </ul>
        </Help>
        <LegalCompliance>
          <h4>Legal & Compliance</h4>
          <ul>
            <li>
              <Link href="">Website terms</Link>
            </li>
            <li>
              <Link href="">Legal Agreements</Link>
            </li>
            <li>
              <Link href="">Privacy</Link>
            </li>
            <li>
              <Link href="">Customer Vunerability</Link>
            </li>
          </ul>
        </LegalCompliance>
      </LinksContainer>
      <DeblockAddress>
        Deblock LTD, 8-14 Verulam St, London WC1X 8LZ United Kingdom
      </DeblockAddress>
    </FooterContainer>
  );
};

export default Footer;
