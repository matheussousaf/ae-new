import React from "react";
import { Form, Multiform, useMultiform } from "@ae/ui";
import * as Yup from "yup";

import { useNavigation } from "@react-navigation/core";
import { useLocalization } from "@hooks/useLocalization";
interface SignInForm {
  name?: string;
  email?: string;
  phone?: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const t = useLocalization();

  const validationSchema = Yup.object({
    name: Yup.string().required("Nome Completo Obrigatório"),
    email: Yup.string().required("CPF Obrigatório"),
    // Implement on specific screen.
    // dataNasc: Yup.string().required("Data Obrigatoria").test('Dia/Mes/Ano', 'Necessário idade acima de 18 anos', function(value) {
    //   var dateParts = value.split("/");
    //   return differenceInYears(new Date(), new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])) >= 18;
    // }),a
  });

  const secondValidationScheam = Yup.object({
    phone: Yup.string().required("Nome completo é necessário"),
  });

  function FormExample() {
    const { nextStep, data, setData } = useMultiform<SignInForm>();

    return (
      <Form
        validationSchema={() => validationSchema}
        onSubmit={(values: any) => {
          setData({ ...data, email: values.email, name: values.name });
          nextStep();
        }}
        fields={[
          {
            name: "name",
            initialValue: "",
            placeholder: "Nome Completo",
          },
          {
            name: "email",
            initialValue: "",
            placeholder: "Telefone",
            type: "email-address",
          },
        ]}
        button={{ title: "Próxima Etapa" }}
      />
    );
  }

  function FormExample2() {
    const { nextStep, data, setData } = useMultiform<SignInForm>();

    return (
      <Form
        validationSchema={() => secondValidationScheam}
        onSubmit={(values: any) => {
          setData({ ...data, phone: values.phone });
          nextStep();
        }}
        fields={[
          {
            name: "phone",
            initialValue: "",
            placeholder: "Celular",
            mask: "+55 (99) 99999-9999",
          },
        ]}
        button={{ title: "Concluir" }}
      />
    );
  }

  return (
    <Multiform
      headerTitle="SignIn Form"
      onLastBackPress={() => navigation.goBack()}
    >
      <FormExample />
      <FormExample2 />
    </Multiform>
  );
};

export default SignIn;
