import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import SignIn from "@screens/SignIn/index";
import { useSignContext } from "@contexts/SignContext";
import Register from "@screens/Register/index";

const SignStack = createStackNavigator();
const RegisterStack = createStackNavigator();

const SignRoutes: React.FC = () => {
  const { signing } = useSignContext();
  return <SignNavigator />;
};

const RegisterNavigator = () => {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        options={{
          headerShown: false,
        }}
        name="Register"
        component={Register}
      />
      <RegisterStack.Screen name="Login" component={SignNavigator} />
    </RegisterStack.Navigator>
  );
};

const SignNavigator = () => {
  return (
    <SignStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SignStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
      <SignStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterNavigator}
      />
    </SignStack.Navigator>
  );
};

export default SignRoutes;
