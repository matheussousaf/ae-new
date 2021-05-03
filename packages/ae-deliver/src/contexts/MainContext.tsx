import React, { useContext } from "react";
import { createContext } from "react";

interface MainContextProps {}

const initialData: MainContextProps = {};

export const MainContext = createContext({} as MainContextProps);

export const MainContextProvider: React.FC = ({ children }) => {
  return (
    <MainContext.Provider value={initialData}>{children}</MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
