import React, { ReactNode, useState } from "react";

interface IGlobalContextProps {
  token?: string;
  setToken: (token: string) => void;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  displayRequestButton?: boolean;
  setDisplayRequestButton: (token: boolean) => void;
}

type Props = {
  children: ReactNode;
};

export const GlobalContext = React.createContext<IGlobalContextProps>({
  token: "",
  setToken: () => {},
  openModal: false,
  setOpenModal: () => {},
  displayRequestButton: false,
  setDisplayRequestButton: () => {},
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [displayRequestButton, setDisplayRequestButton] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        token: token,
        setToken: setToken,
        openModal: openModal,
        setOpenModal: setOpenModal,
        displayRequestButton: displayRequestButton,
        setDisplayRequestButton: setDisplayRequestButton,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
