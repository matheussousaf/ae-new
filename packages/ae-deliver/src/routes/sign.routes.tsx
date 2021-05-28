import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Sign from "@screens/Sign/index";
import { useSignContext } from "@contexts/SignContext";
import Register from "@screens/Register/index";
import SignIn from "@screens/SignIn";
import Test from "@screens/Test";

const SignStack = createStackNavigator();
const SignInStack = createStackNavigator();
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

const SignInNavigator = () => {
  return (
    <SignInStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <RegisterStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
      <RegisterStack.Screen name="Login" component={SignNavigator} />
    </SignInStack.Navigator>
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
        name="Sign"
        component={Sign}
      />
      <SignStack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignInNavigator}
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
