import { useGlobalContext } from "../../context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
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
  const { setToken } = useGlobalContext();

  useEffect(() => {
    let tokenToStored = "";

    if (typeof router.query.token === "string") {
      tokenToStored = router.query.token;

      if (typeof window !== "undefined") {
        setToken(tokenToStored);
        localStorage.setItem("modal", "true");
        return localStorage.setItem("token", tokenToStored!);
      }
    }

    router.push("/");
  }, [router, router.query.token, setToken]);

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
