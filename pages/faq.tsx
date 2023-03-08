import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { devices } from "../src/utils/devices";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Blob from "../src/views/Blob";

const Container = styled.div`
  background-color: #fbfaf9;
`;

const NCWContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 80px; */
  margin: auto;
  max-width: 796px;
  font-size: 21px;
  line-height: 41px;
  padding: 72px 24px 24px 24px;

  * {
    z-index: 2;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    padding-bottom: 16px;
    max-width: 706px;
    padding: 44px 0 16px 0;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    max-width: 724px;
    padding: 44px 0 16px 0;
  }

  p {
    font-size: 21px;
    line-height: 41px;
    letter-spacing: 0.084px;
    padding-bottom: 16px;
  }

  svg {
    max-width: 728px;
  }

  .human-error {
    padding-top: 40px;

    h2 {
      padding-bottom: 20px;
    }
  }

  .human-error p,
  .liste-container {
    max-width: 724px;
    padding-left: 68px;
    @media ${devices.tabletMax} {
      padding-left: 0;
    }
  }

  @media ${devices.tabletMax} {
    h1,
    h2,
    p,
    img {
      padding-left: 22px !important;
    }
  }
`;

interface BlockProps {
  [key: string]: {
    [key: string]: any;
  };
}

const Faq = () => {
  const [data, setData] = useState();
  const [block, setBlock] = useState<BlockProps[]>([]);

  useEffect(() => {
    axios
      .get("https://waitlist-staging.deblock.com/v1/faq/page", {
        headers: {
          "Accept-Language": "fr",
          Authorization:
            "Bearer 64726720888b45b06e7f8f22ac2cbb4ece5cefe6016cf31986b80ad47fece262de9bb18db4225f728816d611eb28487fddf9",
          "Content-Type": "application/json",
        },
        params: {
          page: {
            lang: "en",
          },
        },
      })
      .then(async (res) => {
        console.log("faq res", res);
        setBlock(res.data.result.results);
      })
      .catch((err) => {
        console.log("t&faq err", err);
      });
  }, [data]);

  if (block) {
    const DisplayBlock = block.map((b, i) => {
      if (b.heading_1) {
        return (
          <h1 key={uuidv4()}>
            {b.heading_1.rich_text[0] && b.heading_1.rich_text[0].plain_text}
          </h1>
        );
      }
      if (b.heading_2) {
        return (
          <h2 key={uuidv4()}>
            {b.heading_2.rich_text[0] && b.heading_2.rich_text[0].plain_text}
          </h2>
        );
      }
      if (b.paragraph && b.paragraph.rich_text.length === 0) {
        return <br key={uuidv4()} />;
      } else if (b.paragraph && b.paragraph.rich_text.length > 0) {
        return (
          <p key={uuidv4()}>
            {b.paragraph.rich_text.map(
              (r: {
                plain_text: string;
                annotations: { [key: string]: boolean | any };
              }) => {
                const styles = r.annotations;
                const backgroundColor =
                  styles.color !== "default" && styles.color.split("_")[0];

                const ApplyStyle = {
                  ...(styles!.bold
                    ? {
                        fontWeight: "bold",
                      }
                    : {}),
                  ...(styles.italic
                    ? {
                        fontStyle: "italic",
                      }
                    : {}),
                  ...(styles.strikethrough
                    ? {
                        textDecoration: "line-through",
                      }
                    : {}),
                  ...(styles.underline
                    ? {
                        textDecoration: "underline",
                      }
                    : {}),
                  ...(styles.color
                    ? {
                        backgroundColor:
                          backgroundColor === "yellow"
                            ? "rgb(254, 213, 77)"
                            : backgroundColor === "orange"
                            ? "rgb(249, 219, 175)"
                            : backgroundColor === "blue"
                            ? "rgb(199, 223, 252)"
                            : backgroundColor === "green"
                            ? "rgb(213, 252, 197)"
                            : "",
                      }
                    : {}),
                };

                return (
                  <span key={uuidv4()} style={ApplyStyle}>
                    {r.plain_text}
                  </span>
                );
              }
            )}
          </p>
        );
      }
      if (b.image) {
        return (
          <div key={uuidv4()}>
            {b.image.file && (
              <Image
                src={b.image.file.url}
                alt=""
                style={{ width: "728px", height: "auto", paddingLeft: "48px" }}
                width={728}
                height={0}
              />
            )}
            {b.image.caption && b.image.caption[0] && (
              <span>{b.image.caption[0].plain_text}</span>
            )}
          </div>
        );
      }
      if (b.bulleted_list_item) {
        return (
          <ul key={uuidv4()}>
            <li>{b.bulleted_list_item.rich_text[0].plain_text}</li>
          </ul>
        );
      }
      if (b.numbered_list_item) {
        return (
          <ol key={uuidv4()}>
            <li>
              {b.numbered_list_item.rich_text[0] &&
                b.numbered_list_item.rich_text[0].plain_text}
            </li>
          </ol>
        );
      }
    });
    return (
      <Container>
        <NCWContainer>
          <div>
            <h1>Frequently Asked Questions</h1>
            <p>
              New to Deblock and got questions? Hopefully we can answer them
              below!
            </p>
          </div>
          {DisplayBlock}
        </NCWContainer>
        {/* <Blob className="blob-left" color="#F2E1FF" />
        <Blob className="blob-top" color="#FDB281" />
        <Blob className="blob-right" color="#FDE3A3" /> */}
      </Container>
    );
  }
};

export default Faq;
