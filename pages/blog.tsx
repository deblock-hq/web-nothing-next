import Image from "next/image";
import React from "react";
import { devices } from "../src/utils/devices";
import styled from "styled-components";

import Placeholder from "../src/assets/placeholder-blog.svg";
import Blob from "../src/views/Blob";

const Container = styled.div`
  position: relative;
  overflow: hidden;

  .Blob {
    position: absolute;
  }

  .blob-left {
    top: -100px;
  }

  .blob-right {
    top: 0;
  }

  @media ${devices.tabletMax} {
    .Blob {
      display: none;
    }
  }
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1152px;
  margin: auto;
  padding: 0 24px 104px 24px;

  * {
    z-index: 3;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    text-align: center;
    letter-spacing: 0.16px;
    padding: 72px 80px 48px 80px;
  }

  h2 {
    font-size: 24px;
    line-height: 36px;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 23px;
    color: #4d4d4d;
    padding-bottom: 16px;
    max-width: 496px;
  }

  @media ${devices.tabletMax} {
    h1 {
      font-size: 30px;
      padding-bottom: 48px;
    }

    h2 {
      font-size: 18px;
      line-height: 23px;
    }

    p {
      font-size: 14px;
      line-height: 19px;
    }
  }
`;

const BlogCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
  padding: 16px 22px 22px 16px;
  width: 80%;
  margin: auto;
  max-height: 180px;

  .image-container,
  .text-container {
    align-self: center;
  }

  img {
    max-width: 176px;
  }

  .number {
    font-size: 78px;
    line-height: 57px;
    letter-spacing: 0.16px;
    background: #fbfaf9;
    border-radius: 22px;
    height: 108px;
    width: 126px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-number {
    display: none;
  }

  .blog-infos {
    display: flex;
    gap: 60px;
    align-items: end;

    > div:first-child {
      min-width: fit-content;
      font-size: 12px;
      line-height: 28px;
    }

    > div:last-child {
      display: flex;
      gap: 26px;
      font-size: 14px;

      div {
        display: flex;
        align-items: center;
        background: #fff6e1;
        border-radius: 50px;
        height: 44px;
        padding: 0px 16px;
      }
    }
  }

  @media ${devices.tabletMax} {
    flex-direction: column-reverse;
    align-items: center;
    padding: 24px;
    max-height: unset;

    .number {
      display: none;
    }

    .image-container {
      position: relative;

      .image-number {
        display: block;
        position: absolute;
        border-radius: 11px;
        height: 64px;
        width: 74px;
        font-size: 44px;
        line-height: 28px;
        letter-spacing: 0.16px;
        background: #fbfaf9;
        border-radius: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 12px;
        left: 10px;
      }
    }

    img {
      max-width: 100%;
    }

    .blog-infos {
      gap: 24px;
      align-items: center;
      flex-wrap: wrap;

      > div:first-child {
        font-size: 12px;
        line-height: 19px;
      }

      > div:last-child {
        gap: 16px;
        div {
          height: 40px;
          font-size: 12px;
          line-height: 19px;
        }
      }
    }
  }
`;

const Blog = () => {
  return (
    <Container>
      <BlogContainer>
        <h1>The Deblog</h1>
        <BlogCard>
          <div className="number">01</div>
          <div className="text-container">
            <h2>The Deblock non-custodial wallet is an absolute breeze?</h2>
            <p>
              The Schrödinger key. Have your keys and don&apos;t have them at
              the same time.
            </p>
            <div className="blog-infos">
              <div>Nov 22ּ • 3 min read</div>
              <div>
                <div>#ncw</div>
                <div>#crypto</div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <Image src={Placeholder} alt="Blog image placeholder" />
            <div className="image-number">01</div>
          </div>
        </BlogCard>
        <BlogCard>
          <div className="number">02</div>
          <div className="text-container">
            <h2>The Deblock non-custodial wallet is an absolute breeze?</h2>
            <p>
              The Schrödinger key. Have your keys and don&apos;t have them at
              the same time.
            </p>
            <div className="blog-infos">
              <div>Nov 22ּ • 3 min read</div>
              <div>
                <div>#ncw</div>
                <div>#crypto</div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <Image src={Placeholder} alt="Blog image placeholder" />
            <div className="image-number">02</div>
          </div>
        </BlogCard>
        <BlogCard>
          <div className="number">03</div>
          <div className="text-container">
            <h2>The Deblock non-custodial wallet is an absolute breeze?</h2>
            <p>
              The Schrödinger key. Have your keys and don&apos;t have them at
              the same time.
            </p>
            <div className="blog-infos">
              <div>Nov 22ּ • 3 min read</div>
              <div>
                <div>#ncw</div>
                <div>#crypto</div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <Image src={Placeholder} alt="Blog image placeholder" />
            <div className="image-number">03</div>
          </div>
        </BlogCard>
      </BlogContainer>
      <Blob className="blob-left" color="#F9DFE5" />
      <Blob className="blob-right" color="#ECE9D3" />
    </Container>
  );
};

export default Blog;
