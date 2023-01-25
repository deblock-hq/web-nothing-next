import { useRouter } from "next/router";
import { useEffect } from "react";

const Token = () => {
  const router = useRouter();

  useEffect(() => {
    let tokenToStored = "";

    if (typeof router.query.token === "string") {
      tokenToStored = router.query.token;
    }

    if (typeof window !== "undefined") {
      return localStorage.setItem("token", tokenToStored!);
    }

    router.push("/");
  }, [router, router.query.token]);
};

export default Token;
