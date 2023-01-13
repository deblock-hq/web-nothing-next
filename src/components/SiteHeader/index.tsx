import Image from "next/image";
import React from "react";
import styled from "styled-components";

import Logo from "../../../public/HeaderLogo.svg";

const HeaderContainer = styled.header`
  display: flex;
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
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
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
