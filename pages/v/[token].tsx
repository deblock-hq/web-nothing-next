import { useGlobalContext } from "../../context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const LoadingPage = styled.div`
  position: relative;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
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
        return localStorage.setItem("token", tokenToStored!);
      }
    }

    router.push("/");
  }, [router, router.query.token, setToken]);

  return (
    <LoadingPage>
      <div>
        <div>
          <h2>Yummy!</h2>
          <p>
            Something is cooking
            <br />
            <span> You will be automatically redirected soon!</span>
          </p>
        </div>
        {/* <Image src={} alt="" /> */}
      </div>
    </LoadingPage>
  );
};

export default Token;
