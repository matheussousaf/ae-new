import { useContext } from "react";
import { createContext } from "react";
import { View } from "react-native";

interface AuthContextProps {}

interface User {}

const initialData: AuthContextProps = {};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider: React.FC = ({ children }) => {
  return <View>{children}</View>;
};

export const useAuthContext = () => useContext(AuthContext);
