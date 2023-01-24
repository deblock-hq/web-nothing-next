import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { devices } from "../../utils/devices";
import styled, { css } from "styled-components";

import Burgermenu from "../../assets/burger-menu.svg";
import Cross from "../../assets/cross.svg";

import Logo from "../../../public/HeaderLogo.svg";

interface Props {
  scrollY: number;
}

const HeaderContainer = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 50px);
  z-index: 10;
  max-width: 1152px;
  height: 60px;
  align-self: center;
  position: absolute;

  .burger-menu {
    display: none;
  }

  .logo {
    width: 140px;
    cursor: pointer;
  }

  > div {
    width: 30%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;

    a {
      cursor: pointer;
    }
  }

  @media ${devices.tabletMax} {
    top: 0;
    box-shadow: 0px 2px 0px 0px lightgray;
    border: none;
    border-radius: 0;
    width: 100%;

    .hide-on-mobile {
      display: none;
    }

    .burger-menu {
      display: block;
      text-align: right;
      cursor: pointer;

      img {
        width: 20px;
        animation: fadeIn 1s;
      }
    }

    img {
      padding: 0 24px;
      max-width: 112px;
    }

    .desktop-tablet-display {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      gap: 12px;
      background: #ffffff;
      border: 2px solid #000000;
      border-radius: 5px;
      width: 80%;
      margin: auto;
      top: 80px;
      left: 10%;
      box-shadow: 2px 2px 0px 0px rgb(0 0 0);
      padding: 12px 0;

      a {
        border-radius: 4px;
        padding: 16px 28px;
        max-width: 302px;
        width: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;

        /* :before {
          content: "";
          background: url("../../assets/arrow.svg");
          position: absolute;
          width: 30px;
          height: 30px;
        } */

        :hover {
          background: #f3f3f3;
        }
      }
    }
  }

  ${(props) =>
    props.scrollY > 33 &&
    css`
      margin: auto;
      width: calc(90% - 50px);
      position: fixed;
      top: 16px;
      /* background: #ffffff; */
      border: 1px solid #000000;
      backdrop-filter: blur(52.7px);
      border-radius: 7px;
      box-shadow: 2px 2px 0px 0px rgb(0 0 0);
      padding: 0 40px;
      max-width: 1152px;
      animation: fadeIn 1s;

      @media ${devices.tabletMax} {
        top: 0;
        box-shadow: 0px 2px 0px 0px lightgray;
        border: none;
        border-radius: 0;
        width: 100%;
      }
    `};
`;

const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState(false);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrollY={scrollY}>
      <Link href="/">
        <Image className="logo" src={Logo} alt="Deblock logo" />
      </Link>
      <div className="burger-menu" onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu && <Image src={Burgermenu} alt="Burger menu" />}
        {openMenu && <Image src={Cross} alt="lose button" />}
      </div>
      {openMenu && (
        <div className="desktop-tablet-display">
          <Link href="/blog">Blog</Link>
          <Link href="/aboutus">About</Link>
          <a
            href="https://apply.workable.com/deblock"
            target="_blank"
            rel="noreferrer"
          >
            Careers
          </a>
          <Link href="/support">Support</Link>
        </div>
      )}
      <div className="hide-on-mobile">
        <Link href="/blog">Blog</Link>
        <Link href="/aboutus">About</Link>
        <a
          href="https://apply.workable.com/deblock"
          target="_blank"
          rel="noreferrer"
        >
          Careers
        </a>
        <Link href="/support">Support</Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
