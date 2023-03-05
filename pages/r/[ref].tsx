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
