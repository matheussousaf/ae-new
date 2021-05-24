import { createAuthService } from "@services/auth";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { User } from "@services/auth";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useSplashScreen } from "@hooks/useSplashScreen";

interface AuthContextProps {
  user?: User;
  accessToken?: string;
  login?: () => any;
  logout?: () => void;
  checkEmail?: (email: string) => Promise<boolean | undefined>;
}

const initialData: AuthContextProps = {
  user: undefined,
};

const ASYNC_STORAGE_AUTH_KEY = "@Auth";

export const AuthContext = createContext({} as AuthContextProps);

const authService = createAuthService();

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<AuthContextProps>(initialData);
  const { getItem, setItem } = useAsyncStorage(
    `${ASYNC_STORAGE_AUTH_KEY}:accessToken`
  );
  const { hideSplashScreen, preventHideSplashScreen } = useSplashScreen();

  useEffect(() => {
    preventHideSplashScreen();
    isLogged();
  }, []);

  async function isLogged() {
    const token = (await getItem()) || undefined;
    setState({ accessToken: token });
    hideSplashScreen();
  }

  async function checkEmail(email: string): Promise<boolean | undefined> {
    return await authService.fakeCheckEmail();
  }

  async function login(email?: string, password?: string) {
    const data = await authService.signIn({
      email: "matheus@gmail.com",
      password: "teste@123",
    });

    if (!data) {
      return "Erro";
    }

    await setItem(data.accessToken);

    authService.authenticate(data?.accessToken);
    setState({ user: data?.user });

    return state.user;
  }

  function logout() {
    setState({ user: undefined, accessToken: "" });
  }

  return (
    <AuthContext.Provider value={{ login, logout, checkEmail, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
