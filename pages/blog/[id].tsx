import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { devices } from "../../src/utils/devices";
import styled from "styled-components";
import WarningIcone from "../../public/warning-icone.svg";
import Blob from "../../src/views/Blob";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface Props {
  color: string;
}

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
    padding: 44px 0 16px 48px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    max-width: 724px;
    padding: 44px 0 16px 48px;
  }

  p {
    padding-left: 48px;
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

const WarningContainer = styled.div`
  display: flex;
  gap: 24px;

  img {
    align-self: center;
  }

  p {
    background-color: #fce4e4;
    border-left: 3px solid #f52323;
    padding: 8px 20px;
  }

  @media ${devices.tabletMax} {
    flex-direction: column;
  }
`;
const QuoteText = styled.div`
  border-left: 3px solid #f59300;
  margin-left: 28px;
  padding-left: 20px;

  @media ${devices.tabletMax} {
    margin-left: 0;
    margin-bottom: 40px;

    p:first-child {
      padding-bottom: 40px;
    }
  }
`;

interface BlockProps {
  [key: string]: {
    [key: string]: any;
  };
}

const BlogArticle = () => {
  const router = useRouter();
  const [block, setBlock] = useState<BlockProps[]>([]);

  useEffect(() => {
    axios
      .get("https://waitlist-staging.deblock.com/v1/blog/page", {
        headers: {
          "Accept-Language": "fr",
          Authorization:
            "Bearer 64726720888b45b06e7f8f22ac2cbb4ece5cefe6016cf31986b80ad47fece262de9bb18db4225f728816d611eb28487fddf9",
          "Content-Type": "application/json",
        },
        params: {
          page: {
            id: `${router.query.id}`,
          },
        },
      })
      .then(async (res) => {
        console.log("Article res", res);
        setBlock(res.data.result.results);
      })
      .catch((err) => {
        console.log("Article err", err);
      });
  }, [router.query.id]);

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
      if (b.callout) {
        return (
          <Warning key={uuidv4()}>
            {b.callout.rich_text[0] && b.callout.rich_text[0].plain_text}
          </Warning>
        );
      }
      if (b.quote) {
        const styles = b.quote.rich_text[0].annotations;
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
                backgroundColor: `${backgroundColor}`,
              }
            : {}),
        };

        return (
          <QuoteText key={uuidv4()} style={ApplyStyle}>
            {b.quote.rich_text[0] && b.quote.rich_text[0].plain_text}
          </QuoteText>
        );
      }
      if (b.bulleted_list_item) {
        return (
          <ul key={uuidv4()}>
            <li>{b.bulleted_list_item.rich_text[0].plain_text}</li>
          </ul>
        );
      }
    });

    return (
      <Container>
        <NCWContainer>{DisplayBlock}</NCWContainer>
      </Container>
    );
  }
};

export default BlogArticle;

const Warning = ({ children }: { children: ReactNode }) => {
  return (
    <WarningContainer>
      <Image src={WarningIcone} alt="Warning icone" />
      <p>{children}</p>
    </WarningContainer>
  );
};
