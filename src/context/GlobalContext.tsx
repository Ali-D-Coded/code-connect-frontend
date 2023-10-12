import { createContext } from "react";

const GlobalContext = createContext({});

export const GolobalProvider = ({ children }: any) => {
	
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
