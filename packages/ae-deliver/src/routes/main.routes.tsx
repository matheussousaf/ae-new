import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screens/Home/index";
import { Header as CustomHeader } from "@ae/ui";

const MainStack = createStackNavigator();

const MainRoutes: React.FC = () => {
  function Header() {
    return <CustomHeader title="Cadastro" />;
  }

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        options={{
          headerShown: false,
          // header: () => <Header />,
          // headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
        name="Home"
        component={Home}
      />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
