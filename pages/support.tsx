import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import Footer from "../src/components/Footer";
import Header from "../src/components/SiteHeader";

import Chat from "../src/assets/support/chat.svg";
import Mail from "../src/assets/support/mail.svg";
import Image from "next/image";
import { devices } from "../src/utils/devices";
import Blob from "../src/views/Blob";

const Container = styled.div`
  position: relative;
  overflow: hidden;

  .Blob {
    position: absolute;
  }

  .blob-left {
    max-width: 800px;
    top: 0;
  }

  .blob-right {
    max-width: 800px;
    top: 300px;
  }

  @media ${devices.tabletMax} {
    .Blob {
      display: none;
    }
  }
`;

const SupportContainer = styled.div`
  /* height: calc(100vh - 440px); */
  padding: 78px 24px;
  z-index: 2;

  * {
    z-index: 2;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    text-align: center;
    padding-bottom: 70px;
  }

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    padding-bottom: 8px;
  }

  p {
    font-size: 22px;
    line-height: 38px;
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 24px;
    /* flex-wrap: wrap; */

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 60px;
      max-width: 510px;
      max-height: 398px;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
      border-radius: 30px;
      padding: 22px;
    }
  }

  @media ${devices.tabletMax} {
    > div {
      flex-direction: column;
    }
    h1 {
      font-size: 30px;
      padding-bottom: 32px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const Support = () => {
  return (
    <Container>
      <Header />
      <SupportContainer>
        <h1>Happy to help ;)</h1>
        <div>
          <div>
            <Image src={Mail} alt="mail" />
            <div>
              <h2>support@deblock.com</h2>
              <p>Available 24/7 Response time ~12h</p>
            </div>
          </div>
          <div>
            <Image src={Chat} alt="live chat" />
            <div>
              <h2>In-app chat</h2>
              <p>Available 24/7 Response time ~4 min</p>
            </div>
          </div>
        </div>
      </SupportContainer>
      <Footer />
      <Blob className="blob-left" color="#F9E7CA" />
      <Blob className="blob-right" color="#E3F7F3" />
    </Container>
  );
};

export default Support;
