import Image from "next/image";
import React from "react";
import styled from "styled-components";

import Basic from "../src/assets/pricing/basic.svg";
import Pro from "../src/assets/pricing/pro.svg";
import Native from "../src/assets/pricing/native.svg";
import Check from "../src/assets/pricing/check.svg";

const PricingContainer = styled.div``;

const Pricing = () => {
  return (
    <div>
      <PricingContainer>
        <h1>Own your plan</h1>
        <table>
          <thead>
            <th></th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Native</th>
          </thead>

          <tbody>
            <tr>
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

            <tr>
              <td>Price</td>
              <td>Free</td>
              <td>£9.99/mo</td>
              <td>Hold 1 Deblock NFT</td>
            </tr>

            <tr>
              <td>Free currency exchange (USD, GBP, ...)</td>
              <td>0%</td>
              <td>50%</td>
              <td>100%</td>
            </tr>

            <tr>
              <td>International transfer fee - Discount</td>
              <td>1 annually</td>
              <td>up to 3 annually</td>
              <td>up to 3 annually</td>
            </tr>

            <tr>
              <td>NFT branded debit card</td>
              <td></td>
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
          </tbody>

          <tbody>
            <tr>
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
              <td>Crypto swap fee (Crypto -{">"} Crypto)</td>
              <td>1.5%</td>
              <td>1%</td>
              <td>0.5%</td>
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
          </tbody>
        </table>
      </PricingContainer>
    </div>
  );
};

export default Pricing;
