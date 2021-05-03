import React, { useContext, useState } from "react";
import { createContext } from "react";

interface AuthContextProps {
  user?: User;
  // setUserUndefined?: () => void;
  login?: () => User | undefined;
  logout?: () => void;
}

interface User {
  name?: string;
}

const initialData: AuthContextProps = {
  user: { name: "Matheus" },
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider: React.FC = ({ children }) => {
  // function setUserUndefined() {
  //   initialData.user = undefined;
  // }

  const [state, setState] = useState<AuthContextProps>(initialData);

  function login() {
    setState({ user: { name: "Matheus de Sousa" } });
    return state.user;
  }

  function logout() {
    setState({ user: undefined });
  }

  return (
    <AuthContext.Provider value={{ login, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
