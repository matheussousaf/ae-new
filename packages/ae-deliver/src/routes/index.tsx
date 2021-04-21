import { AlertProvider } from "@ae/ui";
import { useAuthContext } from "@contexts/AuthContext";
import React from "react";
import { useEffect } from "react";

import RegisterRoutes from "./register.routes";
import SignInRoutes from "./signin.routes";

const Routes: React.FC = () => {
  const { user } = useAuthContext();

  console.log("entrou");
  
  return (
    <AlertProvider>
      <RegisterRoutes />
    </AlertProvider>
  );
};

export default Routes;
