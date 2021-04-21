"use strict";
exports.__esModule = true;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var index_1 = require("@screens/SignIn/index");
var SignInStack = stack_1.createStackNavigator();
var SignInRoutes = function () {
    return (react_1["default"].createElement(SignInStack.Navigator, null,
        react_1["default"].createElement(SignInStack.Screen, { name: "SignIn", component: index_1["default"] })));
};
exports["default"] = SignInRoutes;
