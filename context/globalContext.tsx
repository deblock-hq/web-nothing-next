import React, { ReactNode, useState } from "react";

interface IGlobalContextProps {
  token?: string;
  setToken: (token: string) => void;
  displayRequestButton?: boolean;
  setDisplayRequestButton: (token: boolean) => void;
}

type Props = {
  children: ReactNode;
};

export const GlobalContext = React.createContext<IGlobalContextProps>({
  token: "",
  setToken: () => {},
  displayRequestButton: false,
  setDisplayRequestButton: () => {},
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState("");
  const [displayRequestButton, setDisplayRequestButton] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        token: token,
        setToken: setToken,
        displayRequestButton: displayRequestButton,
        setDisplayRequestButton: setDisplayRequestButton,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
