import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "@screens/Register/index";
import { Fonts, FontSizes, Colors, Header as CustomHeader } from "@ae/ui";
import { View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RegisterStack = createStackNavigator();

const RegisterRoutes: React.FC = () => {
  function HeaderTesting() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: Platform.OS ? 70 : 40,
        }}
      />
    );
  }

  function Header() {
    return <CustomHeader title="Cadastro" />;
  }

  function HeaderLeft() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "blue",
        }}
      >
        <Text>Setinha</Text>
      </View>
    );
  }

  function HeaderTitle() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "red",
        }}
      >
        <Text>Titulo</Text>
      </View>
    );
  }

  // [L-SETINHA]         [TITULO]        [R-SETINHA]
  // [headerLeft]        [headerTitle]   [headerRight]

  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        options={{
          // header: () => <HeaderTesting />,
          // headerTitle: () => <HeaderTitle />,
          // headerLeft: () => <HeaderLeft />,
          // headerRight: () => <HeaderLeft />,
          header: () => <Header />,
          headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
        name="Cadastro"
        component={Register}
      />
    </RegisterStack.Navigator>
  );
};

export default RegisterRoutes;
