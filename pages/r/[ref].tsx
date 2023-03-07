import { useGlobalContext } from "../../context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Lottie from "lottie-react";
import LoaderAnim from "../../src/assets/lottie/loader.json";

const LoadingPage = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 38;
    background-color: white;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
    height: 70%;
  }
`;
const Token = () => {
  const router = useRouter();

  useEffect(() => {
    let refToStored = "";

    if (typeof router.query.ref === "string") {
      refToStored = router.query.ref;

      if (typeof window !== "undefined") {
        return localStorage.setItem("ref", refToStored!);
      }
    }

    router.push("/");
  }, [router, router.query.ref]);

  return (
    <LoadingPage>
      <div className="loader">
        <Lottie
          style={{ width: "25%", margin: "auto" }}
          animationData={LoaderAnim}
          loop={true}
          autoPlay={true}
        />
      </div>
    </LoadingPage>
  );
};

export default Token;
