import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "@screens/Register/index";
import { Header as CustomHeader, useAlert } from "@ae/ui";
import { useEffect } from "react";

const RegisterStack = createStackNavigator();

const RegisterRoutes: React.FC = () => {
  function Header() {
    return <CustomHeader title="Cadastro" />;
  }

  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        options={{
          headerShown: false,
          // header: () => <Header />,
          // headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
        name="Cadastro"
        component={Register}
      />
    </RegisterStack.Navigator>
  );
};

export default RegisterRoutes;
