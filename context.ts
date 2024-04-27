import { createContext, useContext } from "react";


export interface navProps {
  isOpen: boolean;
  extendWidth: boolean;
  setNavState: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      extendWidth: boolean;
    }>
  >;
}
export const NavContext = createContext<navProps | undefined>(undefined);
export const useNavContext = () => {
  const navState = useContext(NavContext);
  if (navState === undefined) {
    throw new Error("useNavContext must be used with user");
  }
  return navState;
};
