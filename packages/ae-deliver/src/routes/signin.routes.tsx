import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "@screens/SignIn/index";

const SignInStack = createStackNavigator();

const SignInRoutes: React.FC = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen name="SignIn" component={SignIn} />
    </SignInStack.Navigator>
  );
};

export default SignInRoutes;
