import "react-native-gesture-handler";
import React from "react";
import { useFonts, Viga_400Regular } from "@expo-google-fonts/viga";
import {
  FiraSans_400Regular,
  FiraSans_500Medium,
  FiraSans_600SemiBold,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans";
import { registerRootComponent } from "expo";
import Routes from "@routes/index";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "@contexts/AuthContext";
import AppLoading from "expo-app-loading";
import { setLocalizationConfig } from "@config/index";
import { View, Button, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

setLocalizationConfig();

function App() {
  const randomNumber = useSharedValue(100);

  // const style = useAnimatedStyle(() => {
  //   return { width: randomNumber.value, height: randomNumber.value };
  // });

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

  // const toggle = () => {
  //   value.value = withSpring(Math.random());
  // };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#7CA1B4",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          randomNumber.value = Math.random() * 350;
        }}
      >
        {/* <Animated.View style={style} /> */}
      </TouchableOpacity>
    </View>
    // <NavigationContainer>
    //   <AuthContextProvider>
    //     <Routes />
    //   </AuthContextProvider>
    // </NavigationContainer>
  );
}

export default registerRootComponent(App);
