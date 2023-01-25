import React, { ReactNode, useState } from "react";

interface IGlobalContextProps {
  token?: string;
  setToken: (token: string) => void;
}

type Props = {
  children: ReactNode;
};

export const GlobalContext = React.createContext<IGlobalContextProps>({
  token: "",
  setToken: () => {},
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        token: token,
        setToken: setToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
