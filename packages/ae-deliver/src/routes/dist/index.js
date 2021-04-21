"use strict";
exports.__esModule = true;
var ui_1 = require("@ae/ui");
var AuthContext_1 = require("@contexts/AuthContext");
var react_1 = require("react");
var register_routes_1 = require("./register.routes");
var signin_routes_1 = require("./signin.routes");
var Routes = function () {
    var user = AuthContext_1.useAuthContext().user;
    return (react_1["default"].createElement(ui_1.AlertProvider, null, user ? react_1["default"].createElement(register_routes_1["default"], null) : react_1["default"].createElement(signin_routes_1["default"], null)));
};
exports["default"] = Routes;
