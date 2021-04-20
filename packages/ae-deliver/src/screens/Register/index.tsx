import React from "react";
import { CodeInput, Form, Multiform, useAlert } from "@ae/ui";
import * as Yup from "yup";
import { Button, View } from "react-native";

import { signIn } from "@services/auth";
import { SvgXml } from "react-native-svg";
import { Test } from "../../images/svgs";

const Register: React.FC = () => {
  const { createAlert, dismissAlert } = useAlert();

  const validationSchema = Yup.object({
    nome: Yup.string().required("Nome Completo Obrigatório"),
    phone: Yup.string().required("CPF Obrigatório"),
    // Implement on specific screen.
    // dataNasc: Yup.string().required("Data Obrigatoria").test('Dia/Mes/Ano', 'Necessário idade acima de 18 anos', function(value) {
    //   var dateParts = value.split("/");
    //   return differenceInYears(new Date(), new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])) >= 18;
    // }),
  });

  const secondValidationScheam = Yup.object({
    name: Yup.string().required("Nome completo é necessário"),
  });

  function FormExample({ onNextPress }: any) {
    return (
      <Form
        validationSchema={() => validationSchema}
        onSubmit={(values: any) => {
          console.log("Submitted:", values);
          onNextPress();
        }}
        fields={[
          {
            name: "nome",
            initialValue: "",
            placeholder: "Nome Completo",
          },
          {
            name: "phone",
            initialValue: "",
            placeholder: "Telefone",
            mask: "(99) 99999-9999",
            type: "numeric",
            maxLenght: 15,
            isPassword: true,
          },
          {
            name: "dataNasc",
            initialValue: "",
            placeholder: "Data de Nascimento",
            mask: "99/99/9999",
          },
        ]}
        button={{ title: "Próxima Etapa" }}
      />
    );
  }

  function FormExample2({ onNextPress }: any) {
    return (
      <Form
        validationSchema={() => secondValidationScheam}
        onSubmit={(values: any) => {
          console.log("Submitted:", values);
          onNextPress();
        }}
        fields={[
          {
            name: "name",
            initialValue: "",
            placeholder: "Email",
          },
          {
            name: "celular",
            initialValue: "",
            placeholder: "Celular",
            mask: "+55 (99) 99999-9999",
          },
        ]}
        button={{ title: "Concluir" }}
      />
    );
  }

  function TestCodeInput({ onNextPress }: any) {
    return (
      <View>
        <CodeInput />
      </View>
    );
  }

  function TestAlert({ onNextPress }: any) {
    return (
      <View>
        <Button
          title="Create"
          onPress={() => createAlert({ text: "Estamos com um problema no nosso sistema tente novamente mais tarde.", type: "danger" })}
        />
        <Button title="Dismiss" onPress={() => dismissAlert()} />
      </View>
    );
  }

  function TestImage() {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SvgXml xml={Test} width="200px" />
      </View>
    );
  }

  return (
    <Multiform>
      {/* <TestAlert /> */}
      {/* <TestImage /> */}
      {/* <TestCodeInput /> */}
      <FormExample />
      <FormExample2 />
    </Multiform>
  );
};

export default Register;
