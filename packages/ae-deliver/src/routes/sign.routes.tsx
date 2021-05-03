import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import SignIn from "@screens/SignIn/index";
import { useSignContext } from "@contexts/SignContext";
import Register from "@screens/Register/index";
import { Header as CustomHeader } from "@ae/ui";
import { useNavigation } from "@react-navigation/core";

const SignInStack = createStackNavigator();
const RegisterStack = createStackNavigator();

const SignRoutes: React.FC = () => {
  const { signing } = useSignContext();

  return signing ? <RegisterNavigator /> : <SignInNavigator />;
};

const Header: React.FC<{ title: string }> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <CustomHeader
      title={title}
      onBackPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }}
    />
  );
};

const RegisterNavigator = () => {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        options={{
          headerShown: false,
          // header: () => <Header title="Register" />,
          // headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
        name="Register"
        component={Register}
      />
      <RegisterStack.Screen name="Login" component={SignInNavigator} />
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
      <SignInStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
      <SignInStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterNavigator}
      />
    </SignInStack.Navigator>
  );
};

export default SignRoutes;
