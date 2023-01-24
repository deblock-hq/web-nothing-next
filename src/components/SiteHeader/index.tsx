import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

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

  img {
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
    `};
`;

const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0);

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
        <Image src={Logo} alt="Deblock logo" />
      </Link>
      <div>
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
