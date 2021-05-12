import * as SplashScreen from "expo-splash-screen";

export function useSplashScreen() {
  async function preventHideSplashScreen() {
    return await SplashScreen.preventAutoHideAsync();
  }

  async function hideSplashScreen() {
    return await SplashScreen.hideAsync();
  }

  return {
    hideSplashScreen,
    preventHideSplashScreen,
  };
}
