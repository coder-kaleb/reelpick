import { createContext, useContext } from "react";
import { navProps } from "./constants";


export const NavContext = createContext<navProps | undefined>(undefined);
export const useNavContext = () => {
  const navState = useContext(NavContext);
  if (navState === undefined) {
    throw new Error("useNavContext must be used with user");
  }
  return navState;
};
