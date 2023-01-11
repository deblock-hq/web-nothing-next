import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 440px;
  background: url(/footer-placeholder.png) no-repeat center;
  background-size: cover;
`;

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

export default Footer;
