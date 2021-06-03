import { createContext } from "react";

interface ContextProps {}

export const BaseContext = createContext<ContextProps>({});

export const BaseProvider: React.FC<{}> = ({ children }) => {
  return <BaseContext.Provider value={{}}>{children}</BaseContext.Provider>;
};
