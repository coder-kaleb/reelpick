'use client'
import { ReactNode, createContext, useContext, useState } from "react";
import { navProps } from "./constants";

export const navContex = createContext<navProps | undefined>(undefined);
export const useNavContext = () => {
  const navState = useContext(navContex);
  if (navState === undefined) {
    throw new Error("useNavContext must be used with user");
  }
  return navState;
};
const NavContextProvider = ({ children }: { children: ReactNode }) => {
  const [navState, setNavState] = useState({
    isOpen: false,
    extendWidth: false,
  });
  const contextValue = {
    ...navState,
    setNavState,
  };
  return (
    <navContex.Provider value={contextValue}>{children}</navContex.Provider>
  );
};

export default NavContextProvider;
