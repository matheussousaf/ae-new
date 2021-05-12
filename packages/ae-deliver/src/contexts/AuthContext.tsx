import { createAuthService } from "@services/auth";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { AuthService, User } from "@services/auth";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useSplashScreen } from "@hooks/useSplashScreen";

interface AuthContextProps {
  user?: User;
  accessToken?: string;
  login?: () => any;
  logout?: () => void;
}

const initialData: AuthContextProps = {
  user: undefined,
};

const ASYNC_STORAGE_AUTH_KEY = "@Auth";

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [authService, setAuthService] = useState<AuthService>();
  const [state, setState] = useState<AuthContextProps>(initialData);
  const { getItem, setItem } = useAsyncStorage(
    `${ASYNC_STORAGE_AUTH_KEY}:accessToken`
  );
  const { hideSplashScreen, preventHideSplashScreen } = useSplashScreen();

  useEffect(() => {
    preventHideSplashScreen();
    setAuthService(createAuthService());
    isLogged();
  }, []);

  async function isLogged() {
    const token = (await getItem()) || undefined;
    setState({ accessToken: token });
    hideSplashScreen();
  }

  async function login(email?: string, password?: string) {
    const data = await authService?.signIn({
      email: "matheus@gmail.com",
      password: "teste@123",
    });

    if (!data) {
      return "Erro";
    }

    await setItem(data.accessToken);

    authService?.authenticate(data?.accessToken);
    setState({ user: data?.user });

    return state.user;
  }

  function logout() {
    setState({ user: undefined, accessToken: "" });
  }

  return (
    <AuthContext.Provider value={{ login, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
