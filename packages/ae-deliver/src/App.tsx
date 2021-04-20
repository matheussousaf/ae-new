import "react-native-gesture-handler";
import React from "react";
import { useFonts, Viga_400Regular } from "@expo-google-fonts/viga";
import {
  FiraSans_400Regular,
  FiraSans_500Medium,
  FiraSans_600SemiBold,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans";
import { AppLoading, registerRootComponent } from "expo";
import { View, Text } from "react-native";
import Routes from "@routes/index";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "@contexts/AuthContext";

function App() {
  let [fontsLoaded] = useFonts({
    Viga_400Regular,
    FiraSans_400Regular,
    FiraSans_500Medium,
    FiraSans_600SemiBold,
    FiraSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
