import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import Logo from "../../../public/HeaderLogo.svg";

interface Props {
  scrollY: number;
}

const HeaderContainer = styled.header<Props>`
  /* display: flex;
  justify-content: space-between;
  padding: 0 174px;
  z-index: 2;
  > div {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
  } */
  display: flex;
  justify-content: space-between;
  padding: 0 174px;
  z-index: 10;
  max-width: 1152px;
  padding: 0 40px;
  margin: auto;
  height: 60px;

  img {
    width: 140px;
  }
  > div {
    width: 30%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    cursor: pointer;
    font
  }

  ${(props) =>
    props.scrollY > 10 &&
    css`
      margin: auto;
      position: sticky;
      top: 16px;
      background: #ffffff;
      border: 1px solid #000000;
      backdrop-filter: blur(22.7px);
      border-radius: 4px;
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

  console.log(scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrollY={scrollY}>
      <Image src={Logo} alt="Deblock logo" />
      <div>
        <span>Blog</span>
        <span>About</span>
        <span>Careers</span>
        <span>Support</span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
