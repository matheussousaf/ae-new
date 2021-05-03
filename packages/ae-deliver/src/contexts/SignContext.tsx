import React, { useContext } from "react";
import { createContext } from "react";

interface SignContextProps {
  signing?: boolean;
}

const initialData: SignContextProps = {
  signing: false,
};

export const SignContext = createContext({} as SignContextProps);

export const SignContextProvider: React.FC = ({ children }) => {
  return (
    <SignContext.Provider value={initialData}>{children}</SignContext.Provider>
  );
};

export const useSignContext = () => useContext(SignContext);
