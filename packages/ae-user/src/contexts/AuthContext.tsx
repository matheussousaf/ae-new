import { createContext } from "react";
import { View } from "react-native";

interface AuthContextProps {}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider: React.FC = ({ children }) => {
    return <View></View>
};
