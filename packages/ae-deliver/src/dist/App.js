"use strict";
exports.__esModule = true;
require("react-native-gesture-handler");
var react_1 = require("react");
var viga_1 = require("@expo-google-fonts/viga");
var fira_sans_1 = require("@expo-google-fonts/fira-sans");
var expo_1 = require("expo");
var index_1 = require("@routes/index");
var native_1 = require("@react-navigation/native");
var AuthContext_1 = require("@contexts/AuthContext");
function App() {
    var fontsLoaded = viga_1.useFonts({
        Viga_400Regular: viga_1.Viga_400Regular,
        FiraSans_400Regular: fira_sans_1.FiraSans_400Regular,
        FiraSans_500Medium: fira_sans_1.FiraSans_500Medium,
        FiraSans_600SemiBold: fira_sans_1.FiraSans_600SemiBold,
        FiraSans_700Bold: fira_sans_1.FiraSans_700Bold
    })[0];
    if (!fontsLoaded) {
        return react_1["default"].createElement(expo_1.AppLoading, null);
    }
    return (react_1["default"].createElement(native_1.NavigationContainer, null,
        react_1["default"].createElement(AuthContext_1.AuthContextProvider, null,
            react_1["default"].createElement(index_1["default"], null))));
}
exports["default"] = expo_1.registerRootComponent(App);
