import React, { ReactNode, useState } from "react";

interface IGlobalContextProps {
  token?: string;
  setToken: (token: string) => void;
  email?: string;
  setEmail: (email: string) => void;
}

type Props = {
  children: ReactNode;
};

export const GlobalContext = React.createContext<IGlobalContextProps>({
  token: "",
  setToken: () => {},
  email: "",
  setEmail: () => {},
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        token: token,
        setToken: setToken,
        email: email,
        setEmail: setEmail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
