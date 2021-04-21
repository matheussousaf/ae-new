"use strict";
exports.__esModule = true;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var index_1 = require("@screens/Register/index");
var ui_1 = require("@ae/ui");
var RegisterStack = stack_1.createStackNavigator();
var RegisterRoutes = function () {
    function Header() {
        return react_1["default"].createElement(ui_1.Header, { title: "Cadastro" });
    }
    console.log("Testando");
    return (react_1["default"].createElement(RegisterStack.Navigator, null,
        react_1["default"].createElement(RegisterStack.Screen, { options: {
                headerShown: false
            }, name: "Cadastro", component: index_1["default"] })));
};
exports["default"] = RegisterRoutes;
