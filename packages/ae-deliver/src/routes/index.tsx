import { AlertProvider } from "@ae/ui";
import { useAuthContext } from "@contexts/AuthContext";
import { SignContextProvider } from "@contexts/SignContext";
import React from "react";
import { View, Text } from "react-native";
import { useEffect } from "react";
import MainRoutes from "./main.routes";
import SignRoutes from "./sign.routes";

const Routes: React.FC = () => {
  const { user } = useAuthContext();

  console.log("User", user);

  return (
    <AlertProvider>
      {user !== undefined ? (
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
