import { useGlobalContext } from "../../context";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
};

export default Token;
