"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ui_1 = require("@ae/ui");
var Yup = require("yup");
var react_native_1 = require("react-native");
var react_native_svg_1 = require("react-native-svg");
var svgs_1 = require("../../images/svgs");
var Register = function () {
    var _a = ui_1.useAlert(), createAlert = _a.createAlert, dismissAlert = _a.dismissAlert;
    var validationSchema = Yup.object({
        nome: Yup.string().required("Nome Completo Obrigatório"),
        phone: Yup.string().required("CPF Obrigatório")
    });
    var secondValidationScheam = Yup.object({
        name: Yup.string().required("Nome completo é necessário")
    });
    function FormExample(_a) {
        var onNextPress = _a.onNextPress;
        return (react_1["default"].createElement(ui_1.Form, { validationSchema: function () { return validationSchema; }, onSubmit: function (values) {
                console.log("Submitted:", values);
                onNextPress();
            }, fields: [
                {
                    name: "nome",
                    initialValue: "",
                    placeholder: "Nome Completo"
                },
                {
                    name: "phone",
                    initialValue: "",
                    placeholder: "Telefone",
                    mask: "(99) 99999-9999",
                    type: "numeric",
                    maxLenght: 15,
                    isPassword: true
                },
                {
                    name: "dataNasc",
                    initialValue: "",
                    placeholder: "Data de Nascimento",
                    mask: "99/99/9999"
                },
            ], button: { title: "Próxima Etapa" } }));
    }
    function FormExample2(_a) {
        var onNextPress = _a.onNextPress;
        return (react_1["default"].createElement(ui_1.Form, { validationSchema: function () { return secondValidationScheam; }, onSubmit: function (values) {
                console.log("Submitted:", values);
                onNextPress();
            }, fields: [
                {
                    name: "name",
                    initialValue: "",
                    placeholder: "Email"
                },
                {
                    name: "celular",
                    initialValue: "",
                    placeholder: "Celular",
                    mask: "+55 (99) 99999-9999"
                },
            ], button: { title: "Concluir" } }));
    }
    function TestCodeInput(_a) {
        var onNextPress = _a.onNextPress;
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(ui_1.CodeInput, null)));
    }
    function TestAlert(_a) {
        var onNextPress = _a.onNextPress;
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Button, { title: "Create", onPress: function () { return createAlert({ text: "Estamos com um problema no nosso sistema tente novamente mais tarde.", type: "danger" }); } }),
            react_1["default"].createElement(react_native_1.Button, { title: "Dismiss", onPress: function () { return dismissAlert(); } })));
    }
    function TestImage() {
        return (react_1["default"].createElement(react_native_1.View, { style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            } },
            react_1["default"].createElement(react_native_svg_1.SvgXml, { xml: svgs_1.Test, width: "200px" })));
    }
    return (react_1["default"].createElement(ui_1.Multiform, null,
        react_1["default"].createElement(FormExample, null),
        react_1["default"].createElement(FormExample2, null)));
};
exports["default"] = Register;
