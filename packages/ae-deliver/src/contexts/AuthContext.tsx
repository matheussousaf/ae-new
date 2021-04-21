import React, { useContext } from "react";
import { createContext } from "react";
import { View } from "react-native";

interface AuthContextProps {
  user?: User;
}

interface User {
  name?: string;
}

const initialData: AuthContextProps = {
  user: { name: "Matheus" },
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={initialData}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
