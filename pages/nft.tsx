import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

import Bubbles from "../src/assets/nft/bubbles.svg";
import HandDrawing from "../src/assets/nft/hand-drawing.svg";
import Sun from "../src/assets/nft/sun.svg";
import Vip from "../src/assets/nft/vip.svg";
import Hand from "../src/assets/nft/hand.svg";
import RoadmapImage from "../src/assets/nft/roadmap.svg";
import Placeholder from "../src/assets/nft/placeholder.svg";
import Linkedin from "../src/assets/nft/linkedin.svg";
import Arrow from "../src/assets/down.svg";
import Discord from "../src/assets/nft/discord.svg";
import Twitter from "../src/assets/nft/twitter.svg";
import ContactDeblock from "../src/components/ContactDeblock";
import Lottie from "lottie-react";
import Utility from "../src/assets/lottie/nft/utility.json";
import { devices } from "../src/utils/devices";

const Container = styled.div``;
const NftContainer = styled.div`
  max-width: 1152px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0 24px;

  h1 {
    font-size: 48px;
    line-height: 57px;
    letter-spacing: 0.16px;
  }

  h2 {
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.084px;
  }

  h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
  }

  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }

  @media ${devices.tabletMax} {
    h1 {
      font-size: 30px;
      line-height: 57px;
    }

    h2 {
      font-size: 28px;
      line-height: 34px;
    }

    h3 {
      font-weight: 400;
      font-size: 22px;
      line-height: 28px;
    }

    h4 {
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
    }

    p {
      font-size: 16px !important;
      line-height: 28px;
      padding-bottom: 0 !important;
    }
  }
`;
const HeroContainer = styled.div`
  padding: 72px 0 44px 0;

  @media ${devices.tabletMax} {
    padding-bottom: 0;
  }

  > div {
    text-align: center;

    p {
      font-weight: 500;
      font-size: 22px;
      line-height: 28px;
      padding-bottom: 42px;
    }
  }
`;
const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 28px;
  padding-bottom: 44px;

  > div {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 8px;
      font-size: 16px;
      line-height: 28px;
      background: rgba(230, 212, 174, 0.2);
      border-radius: 30px;
      width: 126px;
      height: 134px;

      span {
        font-size: 58px;
        line-height: 57px;
        text-align: center;
        letter-spacing: 0.16px;
      }
    }
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  p {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.084px;
  }

  .first-block {
    max-width: 774px;
    text-align: center;
    h2 {
      padding-bottom: 26px;
    }
    padding-bottom: 96px;
  }

  .second-block {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 150px;

    > div {
      max-width: 404px;

      .utility-animation {
        max-width: 350px;
      }

      > p {
        max-width: 387px;
        font-size: 20px;
        padding-top: 8px;
      }

      > div {
        display: flex;
        align-items: center;
        gap: 16px;
        padding-top: 16px;

        img {
          width: 35px;
        }

        @media ${devices.tabletMax} {
          flex-direction: column;
        }
      }
    }

    @media ${devices.tabletMax} {
      flex-direction: column-reverse;
      width: auto;
      gap: 40px;
      padding-bottom: 80px;
    }
  }
`;
const Roadmap = styled.div`
  text-align: center;
  padding-bottom: 180px;

  h2 {
    padding-bottom: 96px;
  }

  @media ${devices.tabletMax} {
    padding-bottom: 80px;

    h2 {
      padding-bottom: 60px;
    }
    img {
      height: 80%;
    }
  }
`;
const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 156px;

  h2 {
    padding-bottom: 62px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 130px;

    .card {
      display: flex;
      flex-direction: column;
      max-width: 296px;

      > img {
        align-self: center;
      }

      > div {
        padding: 0 16px;

        > div {
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          padding: 12px 0 8px 0;
        }
        > span {
          font-style: italic;
        }

        > p {
          padding-top: 12px;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.084px;
        }
      }
    }
  }

  @media ${devices.tabletMax} {
    padding-bottom: 80px;

    h2 {
      padding-bottom: 60px;
    }

    > div {
      gap: 40px;
    }
  }
`;
const Faq = styled.div`
  max-width: 762px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 180px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 51px 40px;
    gap: 18px;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 14px;

    h4 {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p {
      line-height: 30px;
      color: #707070;
    }

    img {
      rotate: -90deg;
    }
  }

  > div.active {
    box-shadow: 2px 2px 0px 0px rgb(0 0 0);

    img {
      rotate: 0deg;
    }
  }
`;
const CommunityContact = styled.div`
  .community {
    text-align: center;
    > div {
      display: flex;
      justify-content: center;
      gap: 50px;
      padding: 110px 0 130px 0;
    }
  }
`;

const Nft = () => {
  const faqList = [
    {
      question: "Is there a Discord?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea",
    },
    {
      question: "Where is the mint?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea",
    },
    {
      question: " How much is the mint?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea",
    },
    {
      question: "How do I get a Whitelist (guaranteed mint)?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea",
    },
    {
      question: "How do I get a pre-whitelist?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea",
    },
    {
      question: "What intellectual property rights do TBB holders receive?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea",
    },
  ];

  return (
    <Container>
      <NftContainer>
        <HeroContainer>
          <div>
            <h1>555 Bursted Bubbles</h1>
            <p>The first NFT collection of Deblock</p>
          </div>
          <Image src={Bubbles} alt="Bubbles drawing" />
        </HeroContainer>
        <Countdown>
          <h3>Mint available in</h3>
          <div>
            <div>
              Day <span>1</span>
            </div>
            <div>
              hour <span>14</span>
            </div>
            <div>
              minutes <span>47</span>
            </div>
            <div>
              seconds <span>06</span>
            </div>
          </div>
        </Countdown>
        <Description>
          <Image src={HandDrawing} alt="hand drawing" />
          <div className="first-block">
            <h2>555 hand-drawn BB by Pierone</h2>
            <p>
              The idea of a non-custodial future has spread in every living mind
              when 500 bubbles bursted over the world in the last year. Deblock
              is finally turning this idea into a reality by delivering 500
              unique NFTs with utility, hand drawn by Oscar nominee Pierone.
            </p>
          </div>
          <div className="second-block">
            <div>
              <h2>Utility and beyond...</h2>
              <p>
                Deblock is the first FIAT account merged with a non-custodial
                wallet in the process of being regulated in Europe.
              </p>
              <div>
                <Image src={Sun} alt="Sun" />
                <div>
                  <h4>Early Access to Deblock</h4>
                  <p>Be among the first early users. Make history.</p>
                </div>
              </div>
              <br />
              <div>
                <Image src={Vip} alt="Vip" />
                <div>
                  <h4>Exclusive Native Plan on Deblock</h4>
                  <p>0% on-ramping, free international transfers...</p>
                </div>
              </div>
              <br />

              <div>
                <Image src={Hand} alt="Red hand" />
                <div>
                  <h4>Private access to the TBB Lounge</h4>
                  <p>Exclusive WLs, NFT Drops and collabs</p>
                </div>
              </div>
            </div>
            <Lottie className="utility-animation" animationData={Utility} />
          </div>
        </Description>
        <Roadmap>
          <h2>Roadmap</h2>
          <Image src={RoadmapImage} alt="Nft roadmap" />
        </Roadmap>
        <Team>
          <h2>Team</h2>
          <div>
            <div className="card">
              <Image src={Placeholder} alt="" />
              <div>
                <div>
                  Pierre Ducos aka. Pierone
                  <a href="">
                    <Image src={Linkedin} alt="Linkedin logo" />
                  </a>
                </div>
                <span>The Artist</span>
                <p>
                  World renowned artist in Digital art and animation with 25
                  years experience.Oscar (academy award) nominee in 2020 for the
                  animated movie &quot;I lost my body&quot; 3x nominee in
                  multiple festivals for his movie La détente (Best animation)
                </p>
              </div>
            </div>
            <div className="card">
              <Image src={Placeholder} alt="" />
              <div>
                <div>
                  Jean Meyer
                  <a href="">
                    <Image src={Linkedin} alt="Linkedin logo" />
                  </a>
                </div>
                <span>The Product</span>
                <p>
                  Former Head of Crypto @Revolut Created multiple tech products
                  with 10m+ cumulated active users Entrepreneur with 3x exits.
                  Over $25mm raised.
                </p>
              </div>
            </div>
            <div className="card">
              <Image src={Placeholder} alt="" />
              <div>
                <div>
                  Mario Eguiluz
                  <a href="">
                    <Image src={Linkedin} alt="Linkedin logo" />
                  </a>
                </div>
                <span>The Tech</span>
                <p>
                  Former Head of Engineering @ Ledger. Contributor in multiple
                  solidity projects. Former entrepreneur incl. the first
                  acquisition by Revolut ever.
                </p>
              </div>
            </div>
          </div>
        </Team>
        <Faq>
          {faqList.map((f, i) => {
            return (
              <ToggleItem
                key={i}
                question={f.question}
                answer={f.answer}
                id={i}
              />
            );
          })}
        </Faq>
        <CommunityContact>
          <div className="community">
            <h2>Join the community</h2>
            <div>
              <a href="">
                <Image src={Discord} alt="Discord logo" />
              </a>
              <a href="">
                <Image src={Twitter} alt="Twitter logo" />
              </a>
            </div>
          </div>

          <div>
            <h2>Want to partner with us?</h2>
            <ContactDeblock />
          </div>
        </CommunityContact>
      </NftContainer>
    </Container>
  );
};

export default Nft;

const ToggleItem = ({
  question,
  answer,
  id,
}: {
  question: string;
  answer: string;
  id: number;
}) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  return (
    <div key={id} className={toggleThisElement ? "active" : ""}>
      <h4 onClick={() => setToggleThisElement((prev) => !prev)}>
        {question}
        <Image src={Arrow} alt="Toggle" />
      </h4>
      {toggleThisElement && <p>{answer}</p>}
    </div>
  );
};
