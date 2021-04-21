"use strict";
exports.__esModule = true;
exports.useAuthContext = exports.AuthContextProvider = exports.AuthContext = void 0;
var react_1 = require("react");
var react_2 = require("react");
var initialData = {
    user: { name: "Matheus" }
};
exports.AuthContext = react_2.createContext({});
exports.AuthContextProvider = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(exports.AuthContext.Provider, { value: initialData }, children));
};
exports.useAuthContext = function () { return react_1.useContext(exports.AuthContext); };
