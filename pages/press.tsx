import Image from "next/image";
import React from "react";
import styled from "styled-components";

import Placeholder from "../src/assets/article-placeholder.svg";
import Arrow from "../src/assets/arrow.svg";
import Down from "../src/assets/down.svg";
import TitleArrow from "../public/mobile-background/press/arrow.svg";
import { devices } from "../src/utils/devices";
import Blob from "../src/views/Blob";

const Container = styled.div`
  position: relative;
  overflow: hidden;

  .Blob {
    position: absolute;
  }

  .blob-left {
    top: 0px;
  }

  .blob-top-right {
    max-width: 600px;
    top: 300px;
    right: -300px;
  }

  .blob-right {
    bottom: 200px;
  }

  @media ${devices.tabletMax} {
    .Blob {
      display: none;
    }
  }
`;
const PressContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1044px;
  align-items: center;
  margin: auto;
  padding: 72px 24px;

  * {
    z-index: 3;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 90px;

    h1 {
      font-size: 48px;
      line-height: 57px;
      text-align: center;
      letter-spacing: 0.16px;
    }
    .title p {
      font-style: italic;
      font-size: 35px;
      line-height: 57px;
      text-align: center;
      letter-spacing: 0.16px;
    }

    h2 {
      font-size: 48px;
      line-height: 57px;
      text-align: center;
      letter-spacing: 0.16px;
    }

    .button-container {
      display: flex;
      justify-content: center;
      gap: 8px;
      position: relative;

      button {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 13.355px;
        line-height: 16px;
        text-align: center;
        color: white;
        background-color: black;
        border: 1px solid #000000;
        border-radius: 4px;
        max-width: 224px;
        width: 100%;
        height: 40px;
        align-self: center;
        justify-content: space-evenly;

        img {
          width: 24px;
          rotate: 90deg;
          filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(327deg)
            brightness(113%) contrast(100%);
        }
      }
      > img {
        padding-bottom: 28px;
        position: absolute;
        right: 80px;
        bottom: 20px;
        transform: rotate(334deg);
      }
    }
  }

  @media ${devices.tabletMax} {
    > div {
      gap: 56px;
      
      h1 {
        font-size: 28px;
        line-height: 34px;
      }

      h2 {
        font-size: 28px;
        line-height: 57px;
      }

      .title p {
        font-size: 18px;
        font-style: normal;
      }

      .button-container {
        position: relative;
        button {
          max-width: 226px;
          height: 55px;
        }
        > img {
          position: absolute;
          padding: 0;
          rotate: 350deg;
          top: -70px;
          right: -35px;
        }
      }
    }
  }
`;
const ArticleCard = styled.div`
  h2 {
    padding-top: 50px;
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    border-radius: 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    max-width: 268px;
    height: 52px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 80px;
    column-gap: 24px;

    .card {
      max-width: 508px;

      .image-container {
        background-color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
        border-radius: 30px;
        padding: 34px;
      }

      .text-container {
        padding: 24px 40px;

        p {
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          color: #4d4d4d;
        }

        h3 {
          font-weight: 500;
          font-size: 22px;
          line-height: 38px;
        }
      }
    }
  }

  @media ${devices.tabletMax} {
    display: flex;
    flex-direction: column;
    align-items: center;

    .filter {
      width: 269px;
      height: 52px;
    }

    .cards {
      row-gap: 56px;

      .card {
        .text-container {
          p {
            font-size: 16px;
            line-height: 28px;
          }
          h3 {
            font-size: 18px;
            line-height: 38px;
          }
        }
      }
    }
  }
`;
const LatestVideos = styled.div`
  display: flex;

  h2 {
    padding-top: 112px;
    span {
      position: relative;

      :before {
        content: "";
        background: url("./mobile-background/press/underline.svg") no-repeat;
        position: absolute;
        left: 60px;
        top: 66px;
        width: 218px;
        height: 16px;
      }
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 80px;
    column-gap: 24px;

    .card {
      max-width: 508px;

      .image-container {
        background-color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
        border-radius: 30px;
        padding: 34px;
      }

      .text-container {
        padding: 24px 40px;

        p {
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          color: #4d4d4d;
        }

        h3 {
          font-weight: 500;
          font-size: 22px;
          line-height: 38px;
        }
      }
    }
  }

  @media ${devices.tabletMax} {
    h2 {
      padding-top: 80px;
      span {
        :before {
          left: 0px;
          top: 35px;
        }
      }
    }

    > div {
      row-gap: 56px;
      .card {
        .text-container {
          h3 {
            text-align: center;
            font-size: 18px;
            line-height: 38px;
          }
        }
      }
    }
  }
`;

const Press = () => {
  return (
    <Container>
      <PressContainer>
        <div>
          <div className="title">
            <h1>Email us to write about us</h1>
            <p>press@deblock.com</p>
          </div>
          <div className="button-container">
            <button>
              Download Media Pack <Image src={Arrow} alt="arrow down" />
            </button>
            <Image src={TitleArrow} alt="Arrow" />
          </div>
        </div>
        {/* <ArticleCard>
          <h2>Our latest press release</h2>
          <div className="filter">
            Filter by Country <Image src={Down} alt="arrow down" />
          </div>

          <div className="cards">
            <div className="card">
              <div className="image-container">
                <Image src={Placeholder} alt="Article placeholder" />
              </div>
              <div className="text-container">
                <p>20 november 2022</p>
                <h3>
                  Deblock annonce sa levée de €12m avant même d&apos;avoir lancé son
                  service
                </h3>
              </div>
            </div>

            <div className="card">
              <div className="image-container">
                <Image src={Placeholder} alt="Article placeholder" />
              </div>
              <div className="text-container">
                <p>20 november 2022</p>
                <h3>
                  Deblock annonce sa levée de €12m avant même d&apos;avoir lancé son
                  service
                </h3>
              </div>
            </div>

            <div className="card">
              <div className="image-container">
                <Image src={Placeholder} alt="Article placeholder" />
              </div>
              <div className="text-container">
                <p>20 november 2022</p>
                <h3>
                  Deblock annonce sa levée de €12m avant même d&apos;avoir lancé son
                  service
                </h3>
              </div>
            </div>

            <div className="card">
              <div className="image-container">
                <Image src={Placeholder} alt="Article placeholder" />
              </div>
              <div className="text-container">
                <p>20 november 2022</p>
                <h3>
                  Deblock annonce sa levée de €12m avant même d&apos;avoir lancé son
                  service
                </h3>
              </div>
            </div>
          </div>
        </ArticleCard>
        <LatestVideos>
          <h2>
            Our <span>Latest Videos</span>
          </h2>
          <div>
            <div className="card">
              <div className="image-container">
                <Image src={Placeholder} alt="Article placeholder" />
              </div>
              <div className="text-container">
                <h3>Deblock x Squeezie</h3>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <Image src={Placeholder} alt="Article placeholder" />
              </div>
              <div className="text-container">
                <h3>Deblock x Joueur du Grenier</h3>
              </div>
            </div>
          </div>
        </LatestVideos> */}
      </PressContainer>
      <Blob className="blob-left" color="#F9E7CA" />
      <Blob className="blob-top-right" color="#E3F7F3" />
      {/* <Blob className="blob-right" color="#E0D8CA" /> */}
    </Container>
  );
};

export default Press;
