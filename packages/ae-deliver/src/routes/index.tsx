import { AlertProvider } from "@ae/ui";
import { useAuthContext } from "@contexts/AuthContext";
import { SignContextProvider } from "@contexts/SignContext";
import React from "react";
import MainRoutes from "./main.routes";
import SignRoutes from "./sign.routes";

const Routes: React.FC = () => {
  const { accessToken } = useAuthContext();
  console.log(accessToken);

  return (
    <AlertProvider>
      {accessToken !== undefined ? (
        <MainRoutes />
      ) : (
        <SignContextProvider>
          <SignRoutes />
        </SignContextProvider>
      )}
    </AlertProvider>
  );
};

export default Routes;
