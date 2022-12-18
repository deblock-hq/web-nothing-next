import Image from "next/image";
import React from "react";
import LogoHeader from "../../assets/logo-header.svg";

const Header = () => {
  return (
    <header>
      <Image src={LogoHeader} alt="Logo deblock" />
    </header>
  );
};

export default Header;
