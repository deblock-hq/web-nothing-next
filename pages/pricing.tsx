import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";

import Basic from "../src/assets/pricing/basic.svg";
import Pro from "../src/assets/pricing/pro.svg";
import Native from "../src/assets/pricing/native.svg";
import Check from "../src/assets/pricing/check.svg";
import Cross from "../src/assets/pricing/cross.svg";
import Header from "../src/components/Header";
import { devices } from "../src/utils/devices";
import Blob from "../src/views/Blob";

interface Props {
  scrollY: number;
}

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
    /* tr:hover {
      background-color: yellow;
    } */
    .Blob {
      display: none;
    }
  }
`;

const PricingContainer = styled.div<Props>`
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

    @media ${devices.pricing} {
      max-width: 529px;
      margin: auto;
    }
  }

  .br-spacing {
    height: 40px;

    @media ${devices.pricing} {
      :first-child {
        display: none;
      }
    }
  }

  ${(props) =>
    props.scrollY > 126 &&
    css`
      @media ${devices.pricingMin} {
        .fixed-price {
          position: fixed;
          left: 0;
          top: -230px;
          width: 100%;
          padding-bottom: 30px;
          background: rgba(251, 250, 249, 0.89);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
          backdrop-filter: blur(2px);

          table {
            max-width: 952px;
            margin: 0 auto;

            .plan-section td {
              transition: padding-bottom 0.5s ease-out;
              padding-bottom: 0;
            }

            .orange-text td {
              transition: padding-top 0.5s ease-out;
              padding-top: 0;
            }

            .image-section {
              td {
                transition: padding 0.5s ease-out;
                padding: 0;

                img {
                  transition: height .9s ease-out, width .9s ease-out,
                    opacity 0.7s ease-out;
                  height: 0;
                  width: 0;
                  opacity: 0;
                }
              }
            }

            tr,
            td:first-child {
              background-color: transparent;
            }
          }
        }

        table:last-child {
          margin-top: 349px;
        }
      }
    `};

  ${(props) =>
    props.scrollY > 160 &&
    css`
      @media ${devices.pricing} {
        .fixed-price-mobile {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          padding: 88px 0 30px 0;
          background: rgba(251, 250, 249, 0.89);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
          backdrop-filter: blur(2px);

          div:last-child {
            padding-bottom: 0;
            max-width: 529px;
            margin: auto;
          }

          table {
            max-width: 952px;
            margin: 0 auto;

            .plan-section td {
              transition: padding-bottom 0.5s ease-out;
              padding-bottom: 0;
            }

            .orange-text td {
              transition: padding-top 0.5s ease-out;
              padding-top: 0;
            }

            tr,
            td:first-child {
              background-color: transparent;
            }
          }
        }
      }

      > table:last-child {
        margin-top: 196px;
      }
    `};

  @media ${devices.pricing} {
    /* width: max-content; */

    table {
      border-collapse: collapse;
    }

    .br-spacing {
      height: 42px;
    }

    /* h1 {
      display: none;
    } */

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
    z-index: 1;

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
    background-color: white;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 4%);
    border-radius: 30px;

    tr {
      cursor: pointer;
      td {
        padding-left: 44px;
        background-color: unset !important;
      }

      :first-child {
        td {
          background-color: unset;

          :first-child {
            border-top-right-radius: 0;
            border-top-left-radius: 22px;
          }
          :not(:first-child) {
            border-top-right-radius: 22px;
            border-top-left-radius: 0;
          }
        }
      }
    }
    tr:nth-child(4) td {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }
    tr:last-child td:not(:first-child) {
      border-bottom-left-radius: 0;
      box-shadow: none;
    }
    tr:last-child td {
      border-bottom-left-radius: 22px;
    }

    /* @media ${devices.pricing} { */
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
        /* background-color: transparent; */
        td {
          /* background-color: transparent; */
        }
      }

      :nth-child(4) {
        td {
          /* padding-top: 12px; */
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
  /* padding-bottom: 115px; */

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
  cursor: pointer;

  &.active {
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 3px 3px 0px 0px rgb(0 0 0);
  }
`;

const PriceContainer = styled.div`
  display: none;
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

  @media ${devices.pricing} {
    display: block;

    td:first-child {
      padding-left: 44px;
    }

    td:not(:first-child) {
      text-align: end;
      padding-right: 44px;
    }
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

  console.log(scrollY);

  return (
    <Container>
      <PricingContainer className={selectedPlan} scrollY={scrollY}>
        <h1>
          Own <span>your plan</span>
        </h1>
        <div className="fixed-price-mobile">
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
            <table>
              <tbody>
                <tr>
                  <td className="price">Price</td>
                  <td>Free</td>
                  <td>£9.99/mo</td>
                  <td>Hold 1 Deblock NFT</td>
                </tr>
              </tbody>
            </table>
          </PriceContainer>
        </div>
        <div className="fixed-price">
          <table>
            <TableBody>
              <PlansSection className="plan-section">
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
            </TableBody>
          </table>
        </div>

        <table>
          <tbody className="br-spacing">
            <tr>
              <td>
                <br />
              </td>
            </tr>
          </tbody>

          <TableBody>
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
              <td style={{ paddingTop: "0", borderRadius: "0" }}>1.5%</td>
              <td style={{ paddingTop: "0", borderRadius: "0" }}>1%</td>
              <td style={{ paddingTop: "0", borderRadius: "0" }}>0.5%</td>
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
