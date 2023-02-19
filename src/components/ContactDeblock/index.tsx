import Image from "next/image";
import React from "react";
import { devices } from "../../utils/devices";
import styled from "styled-components";
import Mail from "../../assets/support/mail.svg";

const SupportContainer = styled.div`
  padding: 72px 24px;
  z-index: 2;

  * {
    z-index: 4;
  }

  h2 {
    font-weight: 700;
    font-size: 16px !important;
    line-height: 28px;
    text-align: center;
  }

  p {
    font-size: 16px !important;
    line-height: 38px;
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 60px;
      max-width: 408px;
      max-height: 398px;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
      border-radius: 30px;
      padding: 63px 0px;
      width: 100%;

      svg {
        max-height: 121px;
      }

      @media ${devices.tabletMax} {
        gap: 21px;
      }
    }
  }

  @media ${devices.tabletMax} {
    > div {
      flex-direction: column;
      gap: 16px;
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

const ContactDeblock = () => {
  return (
    <SupportContainer>
      <div>
        <div>
          <Image src={Mail} alt="mail" />
          <div>
            <h2>support@deblock.com</h2>
            <p>Available 24/7 Response time ~12h</p>
          </div>
        </div>
      </div>
    </SupportContainer>
  );
};

export default ContactDeblock;
