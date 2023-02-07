import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import Basic from "../src/assets/pricing/basic.svg";
import Pro from "../src/assets/pricing/pro.svg";
import Native from "../src/assets/pricing/native.svg";
import Check from "../src/assets/pricing/check.svg";
import Cross from "../src/assets/pricing/cross.svg";
import Header from "../src/components/SiteHeader";
import { devices } from "../src/utils/devices";
import Blob from "../src/views/Blob";

const Container = styled.div`
  overflow: hidden;
  position: relative;

  .Blob {
    position: absolute;
    z-index: -1;
  }
  .blob-left {
    top: 0;
    left: -181px;
    width: 300px;
  }
  .blob-right {
    top: 0;
  }

  @media ${devices.pricing} {
    overflow: visible;

    .Blob {
      display: none;
    }
  }
`;

const PricingContainer = styled.div`
  max-width: 952px;
  margin: auto;
  padding: 72px 24px;

  * {
    z-index: 2;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    text-align: center;
    padding-bottom: 72px;
    letter-spacing: 0.16px;

    span {
      position: relative;

      ::before {
        content: "";
        background: url("/mobile-background/pricing/underline.svg") no-repeat;
        position: absolute;
        width: 216px;
        height: 15px;
        top: 70px;
      }
    }
  }

  table {
    border-collapse: separate;
    border-spacing: 16px 0;
    width: 100%;
  }

  .br-spacing {
    height: 40px;
  }

  @media ${devices.pricing} {
    /* width: max-content; */

    table {
      border-collapse: collapse;
    }

    .br-spacing {
      height: 70px;
    }

    h1 {
      display: none;
    }

    &.basic {
      td:nth-child(3),
      td:nth-child(4) {
        display: none;
      }
    }

    &.pro {
      td:nth-child(2),
      td:nth-child(4) {
        display: none;
      }
    }
    &.native {
      td:nth-child(2),
      td:nth-child(3) {
        display: none;
      }
    }
  }

  @media ${devices.tabletMax} {
    width: auto;
  }
`;

const PlansSection = styled.tr`
  background-color: transparent !important;

  td {
    font-weight: 500;
    font-size: 22px !important;
    color: black !important;
    line-height: 44px;
    position: relative;
    z-index: 3;
  }

  td:first-child {
    display: initial;
    padding: 0;
    padding-right: 0 !important;
  }

  @media ${devices.pricing} {
    display: none;
  }
`;

const TableBody = styled.tbody`
  td:not(:first-child) {
    background-color: white;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04); */
    width: 266px;
    text-align: center;

    /* @media ${devices.pricing} {
      width: 124px;
    } */
  }

  tr {
    background-color: white;

    td {
      padding-bottom: 28px;
      font-weight: 600;
      font-size: 12px;
      line-height: 22px;
      color: #515151;

      :first-child {
        background-color: #fbfaf9;
        color: black;
        /* padding-right: 40px; */
        min-width: 260px;
      }

      @media ${devices.pricing} {
        font-size: 14px;

        :first-child {
          font-weight: 600;
          padding-right: 16px;
          min-width: auto;
        }
      }
    }

    :first-child {
      td {
        padding-top: 12px;
        border-top-left-radius: 22px;
        border-top-right-radius: 22px;
      }
    }

    :last-child {
      td {
        padding-bottom: 24px;

        :not(:first-child) {
          border-bottom-left-radius: 22px;
          border-bottom-right-radius: 22px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
        }
      }
    }
  }

  .orange-text {
    td {
      padding-bottom: 40px;
      padding-top: 20px;
    }
    td:first-child {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.5);
    }
    td {
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #ff9900;
    }

    @media ${devices.pricing} {
      td {
        font-size: 22px !important;
        line-height: 28px;
      }
    }
  }

  .second-block-first-line td {
    padding-top: 28px !important;
  }

  @media ${devices.pricing} {
    .image-section td {
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      position: relative;
      height: 120px;
      img {
        position: absolute;
        bottom: 40px;
        left: 90px;
      }
    }
  }

  @media ${devices.tabletMax} {
    td:not(:first-child) {
      width: auto;
      min-width: 124px;
    }
    .image-section {
      display: none;
    }
    .orange-text {
      background-color: transparent;
      display: none;

      td {
        background-color: transparent;
      }
    }
    tr {
      :nth-child(2) {
        background-color: transparent;
        td {
          /* background-color: transparent; */
        }
      }

      :nth-child(4) {
        td {
          padding-top: 12px;
          border-top-left-radius: 22px;
          border-top-right-radius: 22px;
        }
      }
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #fbfaf9;
  border-radius: 17px;
  border: none;
  padding: 20px 0;
  font-weight: 500;
  max-width: 188px;
  max-height: 48px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 35px;
`;

const MobileButtonContainer = styled.div`
  display: none;
  padding-bottom: 115px;

  @media ${devices.tabletMax} {
    padding-bottom: 0;
  }

  @media ${devices.pricing} {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

const MobileButton = styled.button`
  border: 1px solid transparent;
  border-radius: 8px;
  background: #f3f3f3;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  width: 100px;

  &.active {
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 3px 3px 0px 0px rgb(0 0 0);
  }
`;

const PriceContainer = styled.div`
  display: none;
  justify-content: space-between;
  padding: 58px 0 62px 0;

  .price {
    font-weight: 600;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.5);
  }

  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #ff9900;

  @media ${devices.tabletMax} {
    display: flex;
  }
`;

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(
    "basic" || "pro" || "native"
  );
  const [selected, setSelected] = useState(1);
  const handleClick = (divNum: number) => {
    setSelected(divNum);
  };

  return (
    <Container>
      <PricingContainer className={selectedPlan}>
        <h1>
          Own <span>your plan</span>
        </h1>
        <MobileButtonContainer>
          <MobileButton
            className={selected == 1 ? "active" : ""}
            onClick={() => {
              setSelectedPlan("basic");
              handleClick(1);
            }}
          >
            Basic
          </MobileButton>
          <MobileButton
            className={selected == 2 ? "active" : ""}
            onClick={() => {
              setSelectedPlan("pro");
              handleClick(2);
            }}
          >
            Pro
          </MobileButton>
          <MobileButton
            className={selected == 3 ? "active" : ""}
            onClick={() => {
              setSelectedPlan("native");
              handleClick(3);
            }}
          >
            Native
          </MobileButton>
        </MobileButtonContainer>
        <PriceContainer>
          <div className="price">Price</div>
          {selectedPlan === "basic" ? (
            <div>Free</div>
          ) : selectedPlan === "pro" ? (
            <div>£9.99/mo</div>
          ) : selectedPlan === "native" ? (
            <div>Hold 1 Deblock NFT</div>
          ) : (
            ""
          )}
        </PriceContainer>
        <table>
          <TableBody>
            <PlansSection>
              <td></td>
              <td onClick={() => setSelectedPlan("basic")}>
                <Button>Basic</Button>
              </td>
              <td onClick={() => setSelectedPlan("pro")}>
                <Button>Pro</Button>
              </td>
              <td onClick={() => setSelectedPlan("native")}>
                <Button>Native</Button>
              </td>
            </PlansSection>
            <tr className="image-section">
              <td></td>
              <td>
                <Image src={Basic} alt="Free chat" />
              </td>
              <td>
                <Image src={Pro} alt="Rocket" />
              </td>
              <td>
                <Image src={Native} alt="Nft card" />
              </td>
            </tr>

            <tr className="orange-text">
              <td>Price</td>
              <td>Free</td>
              <td>£9.99/mo</td>
              <td>Hold 1 Deblock NFT</td>
            </tr>

            <tr>
              <td>Free currency exchange (USD, GBP, ...)</td>
              <td>£1,000/mo</td>
              <td>unlimited</td>
              <td>unlimited</td>
            </tr>

            <tr>
              <td>International transfer fee - Discount</td>
              <td>0%</td>
              <td>50%</td>
              <td>100%</td>
            </tr>

            <tr>
              <td>Physical debit card </td>
              <td>1 annually</td>
              <td>up to 3 annually</td>
              <td>up to 3 annually</td>
            </tr>

            <tr>
              <td>NFT branded debit card</td>
              <td>
                <Image src={Cross} alt="Red cross" />
              </td>
              <td>
                <Image src={Check} alt="Green check" />
              </td>
              <td>
                <Image src={Check} alt="Green check" />
              </td>
            </tr>

            <tr>
              <td>Virtual debit card</td>
              <td>1</td>
              <td>10</td>
              <td>10</td>
            </tr>

            <tr>
              <td>Internet purchase one-off card </td>
              <td>3 in a lifetime </td>
              <td>unlimited</td>
              <td>unlimited</td>
            </tr>

            <tr>
              <td>Free ATM withdrawal amount</td>
              <td>£100/mo</td>
              <td>£1000/mo</td>
              <td>£1000/mo</td>
            </tr>

            <tr>
              <td>Free number of ATM withdrawals </td>
              <td>1 per month</td>
              <td>3 per month</td>
              <td>3 per month</td>
            </tr>

            <tr>
              <td>Cashback on card payments</td>
              <td>0%</td>
              <td>up to 1%</td>
              <td>up to 1%</td>
            </tr>
          </TableBody>

          <tbody className="br-spacing">
            <tr>
              <td>
                <br />
              </td>
            </tr>
          </tbody>

          <TableBody>
            <tr className="second-block-first-line">
              <td>Free number of crypto buy</td>
              <td>1 in a lifetime</td>
              <td>1 per mounth</td>
              <td>unlimited</td>
            </tr>

            <tr>
              <td>Buy crypto fee (GBP -{">"} Crypto)</td>
              <td>2%</td>
              <td>1%</td>
              <td>0%</td>
            </tr>

            <tr>
              <td>Sell crypto fee (Crypto -{">"} GBP)</td>
              <td>3%</td>
              <td>1.5%</td>
              <td>0.5%</td>
            </tr>

            <tr>
              <td style={{ paddingTop: "0" }}>
                Crypto swap fee (Crypto -{">"} Crypto)
              </td>
              <td style={{ padding: "0", borderRadius: "0" }}>1.5%</td>
              <td style={{ padding: "0", borderRadius: "0" }}>1%</td>
              <td style={{ padding: "0", borderRadius: "0" }}>0.5%</td>
            </tr>

            <tr>
              <td>Convert % of salary payment to crypto</td>
              <td>free</td>
              <td>free</td>
              <td>free</td>
            </tr>

            <tr>
              <td>Store GBP in Stablecoins (GBP ↔ Stable)</td>
              <td>free</td>
              <td>free</td>
              <td>free</td>
            </tr>
          </TableBody>
        </table>
      </PricingContainer>
      <Blob className="blob-left" color="#F9DFE5" />
      <Blob className="blob-right" color="#ECE9D3" />
    </Container>
  );
};

export default Pricing;
