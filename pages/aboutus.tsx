import Image from "next/image";
import React from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/SiteHeader";
import styled from "styled-components";
import Blob from "../src/views/Blob";

import HeroPicture from "../src/assets/aboutus/hero-picture.svg";
import Team from "../src/assets/aboutus/team.svg";
import Linkedin from "../src/assets/aboutus/linkedin.svg";
import Rocket from "../src/assets/aboutus/rocket.svg";
import Mountain from "../src/assets/aboutus/mountain.svg";
import Hand from "../src/assets/aboutus/hand.svg";
import Photos from "../src/assets/aboutus/photos.svg";
import { devices } from "../src/utils/devices";

const Container = styled.div`
  background-color: #fbfaf9;
  position: relative;
  overflow: hidden;

  .Blob {
    position: absolute;
    z-index: 1;
  }
  .blob-top {
    top: -480px;
    left: 350px;
  }

  .blob-top-left {
    top: 100px;
    max-width: 500px;
    left: -200px;
  }

  .blob-top-right {
    top: 200px;
    max-width: 600px;
    left: 1500px;
  }

  .blob-right {
    top: 1500px;
    max-width: 530px;
  }

  .blob-left {
    top: 2300px;
    max-width: 800px;
    left: -500px;
  }

  @media ${devices.tabletMax} {
    .Blob {
      display: none;
    }
  }
`;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 96px;
  max-width: 952px;
  margin: auto;
  padding: 92px 12px;

  * {
    z-index: 2;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    text-align: center;
  }

  h2 {
    font-size: 48px;
    line-height: 57px;
    text-align: center;
    padding-bottom: 100px;
  }

  p {
    line-height: 28px;
  }

  .image-container {
    align-self: center;
    max-width: 672px;
  }

  @media ${devices.tabletMax} {
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 24px;
    }
  }
`;

const DeblockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  .hero {
    display: flex;
    gap: 44px;
  }

  .tiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 70px;
    row-gap: 16px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      background: rgba(230, 212, 174, 0.2);
      border-radius: 30px;
      padding: 16px 0 24px 0;
      width: 270px;
      flex-wrap: wrap;

      > span:last-child {
        font-weight: 400;
        font-size: 58px;
        line-height: 57px;
      }
    }
  }

  @media ${devices.tabletMax} {
    .hero {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 633px) {
    .tiles > div {
      width: 100%;
    }
  }
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    span {
      position: relative;
      :before {
        content: "";
        background: url("./mobile-background/aboutus/underline-trace.svg")
          no-repeat;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 60px;
        background-size: contain;

        @media ${devices.tabletMax} {
          top: 34px;
        }
      }
    }
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 58px;
    row-gap: 100px;

    > div {
      > div {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        padding: 8px 8px 0 8px;
      }
      span {
        font-style: italic;
        padding: 8px 8px 0 8px;
      }
    }
  }
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    span {
      position: relative;
      :before {
        content: "";
        background: url("./mobile-background/aboutus/circle.svg") no-repeat;
        position: absolute;
        width: 254px;
        height: 84px;
        top: -7px;
        left: -11px;

        @media ${devices.tabletMax} {
          width: 158px;
          height: 52px;
          background-size: contain;
        }
      }
    }
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 58px;
    flex-wrap: wrap;
    row-gap: 100px;

    > div {
      text-align: center;
      max-width: 268px;

      h3 {
        font-weight: 600;
        font-size: 27px;
        line-height: 57px;
      }
    }
  }
`;

const AboutUs = () => {
  return (
    <Container>
      <Header />
      <AboutUsContainer>
        <DeblockContainer>
          <h1>We are Deblock!</h1>
          <div className="hero">
            <Image src={HeroPicture} alt="Groupe photo" />
            <p>
              We believe your money is yours and that you should be able to use
              it however and whenever you want regardless of bank runs,
              bankruptcies, inflations or even if Deblock stops operating.
              Nobody can freeze your assets or your transfers on your Deblock
              non-custodial wallet.
              <br />
              <br />
              We are building the safest non-custodial account in the world to
              own, transfer, deposit, and exchange crypto or cash indifferently
              so you can finally own your money!
            </p>
          </div>
          <div className="tiles">
            <div>
              <span>Founded</span>
              <span>Oct 22</span>
            </div>
            <div>
              <span>Team size</span>
              <span>22</span>
            </div>
            <div>
              <span>Countries represented</span>
              <span>9</span>
            </div>
          </div>
        </DeblockContainer>
        <TeamContainer>
          <h2>
            Meet our <span>amazing team</span>
          </h2>
          <div>
            <div>
              <Image src={Team} alt="Profil picture" />
              <div>
                <div>Helen Tran</div>
                <Image src={Linkedin} alt="Linkedin logo" />
              </div>
              <span>CEO & CMO</span>
            </div>
            <div>
              <Image src={Team} alt="Profil picture" />
              <div>
                <div>Helen Tran</div>
                <Image src={Linkedin} alt="Linkedin logo" />
              </div>
              <span>CEO & CMO</span>
            </div>
            <div>
              <Image src={Team} alt="Profil picture" />
              <div>
                <div>Helen Tran</div>
                <Image src={Linkedin} alt="Linkedin logo" />
              </div>
              <span>CEO & CMO</span>
            </div>
            <div>
              <Image src={Team} alt="Profil picture" />
              <div>
                <div>Helen Tran</div>
                <Image src={Linkedin} alt="Linkedin logo" />
              </div>
              <span>CEO & CMO</span>
            </div>
            <div>
              <Image src={Team} alt="Profil picture" />
              <div>
                <div>Helen Tran</div>
                <Image src={Linkedin} alt="Linkedin logo" />
              </div>
              <span>CEO & CMO</span>
            </div>
            <div>
              <Image src={Team} alt="Profil picture" />
              <div>
                <div>Helen Tran</div>
                <Image src={Linkedin} alt="Linkedin logo" />
              </div>
              <span>CEO & CMO</span>
            </div>
          </div>
        </TeamContainer>
        <ValuesContainer>
          <h2>
            Our <span>values</span>
          </h2>
          <div>
            <div>
              <Image src={Rocket} alt="Rocket" />
              <div>
                <h3>#SpeedIsEverything</h3>
                <p>
                  We test first. We validate first. We deliver first. We succeed
                  first... or fail and we iterate first.
                </p>
              </div>
            </div>
            <div>
              <Image src={Mountain} alt="Mountain" />
              <div>
                <h3>#DoMore</h3>
                <p>
                  Pushing the limits of innovation to deliver the best possible
                  service to our customers.
                </p>
              </div>
            </div>
            <div>
              <Image src={Hand} alt="Hand" />
              <div>
                <h3>#NoBlameGame</h3>
                <p>
                  Win as a team but also lose as a team. We never blame each
                  other, we lead together.
                </p>
              </div>
            </div>
          </div>
        </ValuesContainer>
        <div className="image-container">
          <Image src={Photos} alt="Photos" />
        </div>
      </AboutUsContainer>
      <Footer />
      <Blob className="blob-top" color="#F9D4BF" />
      <Blob className="blob-top-left" color="#E6E1EA" />
      <Blob className="blob-top-right" color="#F4EFDF" />
      <Blob className="blob-right" color="#DAEFDA" />
      <Blob className="blob-left" color="#D0D8E4" />
    </Container>
  );
};

export default AboutUs;
