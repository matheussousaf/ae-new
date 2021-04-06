import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "@screens/Register/index";
import { Fonts, FontSizes, Colors, Header as CustomHeader } from "@ae/ui";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RegisterStack = createStackNavigator();

const RegisterRoutes: React.FC = () => {
  
  function Header() {
    return <CustomHeader title="Cadastro" />;
  }

  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        options={{
          headerTitle: () => <Header />,
          headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
        name="Cadastro"
        component={Register}
      />
    </RegisterStack.Navigator>
  );
};

export default RegisterRoutes;
