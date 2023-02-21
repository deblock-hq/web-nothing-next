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
  font-family: "Georgia";
  padding: 72px 24px 24px 24px;

  * {
    z-index: 2;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    max-width: 724px;
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
    gap: 30px;
  }
`;

const TitleContainer = styled.div`
  max-width: 706px;
  padding-left: 48px;

  h1 {
    font-size: 48px;
    line-height: 57px;
    padding-bottom: 16px;
    font-family: "Inter";
  }

  p {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    font-family: "Inter";
  }

  @media ${devices.tabletMax} {
    padding-left: 0;

    h1 {
      font-weight: 400;
      font-size: 24px;
      line-height: 34px;
      letter-spacing: 0.16px;
      padding-bottom: 4px;
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
const KeyTakeway = styled.div`
  background-color: #f7f2ea;
  border-radius: 30px;
  height: fit-content;
  padding: 48px 30px;
  font-family: "Georgia";
  font-size: 21px;
  line-height: 41px;
  margin-top: -8px;
  max-width: 756px;
  width: 83%;
  margin: auto;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;

    > div {
      display: flex;
      gap: 34px;
      font-size: 18px;
      line-height: 28px;

      > div {
        align-self: center;
        :first-child {
          background: #eee4ce;
          border-radius: 50px;
          padding: 8px 16px;
        }
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;

    li {
      h3 {
        font-weight: 700;
      }
    }
  }

  @media ${devices.tabletMax} {
    padding: 24px 24px 32px 24px;
    width: auto;

    .header-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      h2 {
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.0480363px;
      }

      div {
        font-size: 14px;
        line-height: 19px;
      }
    }

    ul {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.084px;
    }
  }
`;
const MultiParty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2 {
    padding-bottom: 16px;
    padding-left: 68px;

    @media ${devices.tabletMax} {
      padding: 0;
      font-weight: 700;
      font-size: 22px;
      line-height: 41px;
    }
  }

  .image-container {
    padding-left: 50px;

    @media ${devices.tabletMax} {
      padding-left: 0;
    }
  }

  .liste-container {
    div {
      font-family: "Georgia";
      font-weight: 700;
      padding-top: 32px;
    }

    li {
      list-style: initial;
      line-height: 41px;
      letter-spacing: 0.084px;
    }

    @media ${devices.tabletMax} {
      div {
        font-size: 18px;
        line-height: 41px;
        padding-bottom: 4px;
        padding-top: 56px;

        :first-child {
          padding-top: 0;
        }
      }
    }

    ul {
      font-size: 18px;
      line-height: 41px;
      letter-spacing: 0.084px;
      padding-left: 20px;
    }
  }

  .keys-container {
    > p {
      padding-bottom: 32px;
      max-width: 724px;
      padding-left: 68px;

      @media ${devices.tabletMax} {
        padding-left: 0;
        padding-bottom: 54px;
      }
    }
    > div:last-child {
      margin-top: 32px;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 80px;
    @media ${devices.tabletMax} {
      gap: 56px;
    }
  }
`;
const DeblockDisappears = styled.div`
  max-width: 724px;
  padding-left: 48px;
  padding-bottom: 300px;

  h2 {
    padding-bottom: 16px;
  }

  @media ${devices.tabletMax} {
    padding-left: 0;
    padding-top: 54px;

    h2 {
      font-weight: 700;
      font-size: 22px;
      line-height: 41px;
      letter-spacing: 0.084px;
    }

    span {
      font-size: 18px;
      line-height: 41px;
      letter-spacing: 0.084px;
    }

    p {
      font-size: 18px;
      line-height: 41px;
      letter-spacing: 0.084px;
    }
  }

  div {
    padding-top: 56px;
    padding-bottom: 24px;
    @media ${devices.tabletMax} {
      padding-top: 26px;
    }
  }
`;

const TextHighlight = styled.span<Props>`
  background-color: ${(props) => props.color};
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
const BoldText = styled.span`
  font-weight: 700;
`;
const QuoteText = styled.div`
  border-left: 3px solid #f59300;
  margin-left: 48px;
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
    // const getBlogList = async () => {
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
    // };

    // if (fetchBlogList) getBlogList();
  }, [router.query.id]);

  if (block) {
    console.log("Block", block, block.length);

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
            {b.paragraph.rich_text.map((r: { plain_text: string }) => {
              return <span key={uuidv4()}>{r.plain_text}</span>;
            })}
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
                style={{ width: "100%", height: "auto" }}
                width={760}
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
        return (
          <QuoteText key={uuidv4()}>
            {b.quote.rich_text[0] && b.quote.rich_text[0].plain_text}
          </QuoteText>
        );
      }
    });

    return (
      <Container>
        <NCWContainer>{DisplayBlock}</NCWContainer>
      </Container>
    );
  }

  //   if (block[i].heading_1) {
  //     console.log("h1");
  //     return <h1>{block[i].heading_1.rich_text[0].plain_text}</h1>;
  //   }
  //   if (block[i].heading_2) {
  //     console.log("h2");
  //     return <h2>{block[i].heading_2.rich_text[0].plain_text}</h2>;
  //   }
  //   if (block[i].paragraph) {
  //     console.log("p");
  //     return <p>{block[i].paragraph.rich_text[0].plain_text}</p>;
  //   }
  //   if (block[i].image) {
  //     return (
  //       <>
  //         <Image src={block[i].image.file} alt="" />
  //         {block[i].image.caption && (
  //           <span>{block[i].image.caption[0].plain_text}</span>
  //         )}
  //       </>
  //     );
  //   }
  //   if (block[i].callout) {
  //     return <h1>{block[i].callout.rich_text[0].plain_text}</h1>;
  //   }
  //   if (block[i].quote) {
  //     return <h1>{block[i].quote.rich_text[0].plain_text}</h1>;
  //   }

  //   return (
  //     <Container>
  //       <NCWContainer>
  //         <TitleContainer>
  //           <h1>The best non-custodial wallet in the world</h1>
  //           <p>
  //             A highly secured non-custodial wallet where your assets only belong
  //             to you.
  //           </p>
  //         </TitleContainer>
  //         <KeyTakeway>
  //           <div className="header-container">
  //             <h2>Key Takeways</h2>
  //             <div>
  //               <div>#ncw</div>
  //               <div>3 min read</div>
  //             </div>
  //           </div>
  //           <ul>
  //             <li>
  //               <h3>More secure than your usual wallet</h3>
  //               <p>
  //                 MPC (Multi-Party Computation) would require coordinated attacks
  //                 on different and independent systems. Just hacking your phone
  //                 isn&apos;t enough anymore.
  //               </p>
  //             </li>
  //             <li>
  //               <h3>Human-error tolerant</h3>
  //               <p>
  //                 No need to remember a seed phrase anymore. Your shard of the key
  //                 is backed up with multiple third-parties.{" "}
  //               </p>
  //             </li>
  //             <li>
  //               <h3>Always your keys. Always your crypto.</h3>
  //               <p>
  //                 Export the seed phrase whenever you want. Nobody but you can
  //                 have access to the wallet. Your keys. Your crypto.
  //               </p>
  //             </li>
  //           </ul>
  //         </KeyTakeway>
  //         <MultiParty>
  //           <h2>Multi-Party Computation</h2>
  //           <div className="liste-container">
  //             <div>
  //               <TextHighlight color="#C7DFFC">Your shard</TextHighlight> of the
  //               key (2)
  //             </div>
  //             <ul>
  //               <li>Generated upon signup on your device.</li>
  //               <li>Encrypted and backed-up in case you lose your phone.</li>
  //             </ul>
  //             <div>
  //               <TextHighlight color="#FED54D">
  //                 The Deblock&apos;s shard
  //               </TextHighlight>{" "}
  //               of the key (1)
  //             </div>
  //             <ul>
  //               <li>Generated upon signup on Deblock&apos;s server.</li>
  //               <li>
  //                 Encrypted and backed-up in a cold storage in case a meteorite
  //                 crash on our datacenter.
  //               </li>
  //             </ul>
  //             <div>The 2 shards are required in order to sign a transaction</div>
  //             <ul>
  //               <li>
  //                 Only <TextHighlight color="#C7DFFC">your shard</TextHighlight>{" "}
  //                 can initiate a transaction.
  //               </li>
  //               <li>
  //                 Only <TextHighlight color="#C7DFFC">your shard</TextHighlight>{" "}
  //                 can request to download the{" "}
  //                 <TextHighlight color="#FED54D">Deblock’s shard</TextHighlight>{" "}
  //                 in order to export the wallet seed phrase.
  //               </li>
  //             </ul>
  //           </div>
  //           <WarningContainer>
  //             <Image src={WarningIcone} alt="Warning icone" />
  //             <p>
  //               A hacker would need to hack your device AND our servers to access
  //               your wallet. It&apos;s 2x more secure than just storing your keys
  //               on your device.
  //             </p>
  //           </WarningContainer>
  //           <div>
  //             <div className="human-error">
  //               <h2>Human-error tolerant</h2>
  //               <p>
  //                 <TextHighlight color="#D5FCC5">
  //                   Your encrypted shard🔒
  //                 </TextHighlight>{" "}
  //                 is backed-up in multiple locations and yet SAFE because{" "}
  //                 <BoldText>always encrypted.</BoldText>
  //               </p>
  //               <div>
  //                 <p>
  //                   <BoldText>
  //                     No need to remember a complicated seed phrase
  //                   </BoldText>
  //                 </p>
  //                 <p>
  //                   If you lose your phone, delete Deblock or just change
  //                   device... You only need to retrieve{" "}
  //                   <TextHighlight color="#D5FCC5">
  //                     your encrypted shard🔒
  //                   </TextHighlight>{" "}
  //                   and then KYC again to decrypt it.
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="keys-container">
  //               <h2>Always & Still your keys</h2>
  //               <p>
  //                 Request at{" "}
  //                 <span
  //                   style={{ fontStyle: "italic", textDecoration: "underline" }}
  //                 >
  //                   any point in time
  //                 </span>{" "}
  //                 your seed phrase (mnemonic of your private key).
  //               </p>
  //               <div className="yellow-border">
  //                 <p>
  //                   The app will request and download the{" "}
  //                   <TextHighlight color="#F9DBAF">
  //                     encrypted Deblock&apos;s shard🔒
  //                   </TextHighlight>{" "}
  //                   and then decrypt it into{" "}
  //                   <TextHighlight color="#FED54D">
  //                     Deblock&apos;s shard
  //                   </TextHighlight>{" "}
  //                   on your device.
  //                 </p>
  //                 <p>
  //                   The app will use{" "}
  //                   <TextHighlight color="#C7DFFC">your shard</TextHighlight> and{" "}
  //                   <TextHighlight color="#FED54D">
  //                     Deblock&apos;s shard
  //                   </TextHighlight>{" "}
  //                   on your device to reconstruct the wallet private key and your
  //                   seed phrase.
  //                 </p>
  //               </div>
  //               <WarningContainer>
  //                 <Image src={WarningIcone} alt="Warning icone" />
  //                 <p>
  //                   If you decide to export your wallet private key out of
  //                   Deblock, we will have to close your FIAT account.
  //                 </p>
  //               </WarningContainer>
  //             </div>
  //           </div>
  //         </MultiParty>
  //         <DeblockDisappears>
  //           <h2>What if Deblock disappears?</h2>
  //           <span>
  //             And you have <BoldText>NO app</BoldText> and{" "}
  //             <BoldText>NO backup</BoldText>
  //           </span>
  //           <p style={{ paddingBottom: "40px" }}>
  //             Both{" "}
  //             <TextHighlight color="#D5FCC5">
  //               your encrypted shard🔒
  //             </TextHighlight>{" "}
  //             and{" "}
  //             <TextHighlight color="#F9DBAF">
  //               Deblock encrypted shard🔒
  //             </TextHighlight>{" "}
  //             will be released from cold storage.
  //           </p>
  //           <p>
  //             A trusted third-party will securely release an app to decrypt both
  //             shards and reconstruct your wallet private key and your seed phrase.
  //           </p>
  //         </DeblockDisappears>
  //       </NCWContainer>
  //       <Blob className="blob-left" color="#D0D8E4" />
  //       <Blob className="blob-right" color="#DAEFDA" />
  //     </Container>
  //   );
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
