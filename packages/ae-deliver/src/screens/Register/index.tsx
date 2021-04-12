import React from "react";
import { Form, Multiform } from "@ae/ui";
import * as Yup from "yup";
import differenceInYears from "date-fns/differenceInYears";


import { signIn } from "@services/auth";

interface Test {
  nextStep: () => void;
  previousStep: () => void;
}
/*
    // @ts-ignore */
const Register: React.FC = () => {
  
  const validationSchema = Yup.object({
    nome: Yup.string().required("Nome Completo Obrigatório"),
    phone: Yup.string().required("CPF Obrigatório"),
    dataNasc: Yup.string().required("Data Obrigatoria").test('Dia/Mes/Ano', 'Necessário idade acima de 18 anos', function(value) {
      var dateParts = value.split("/");
      return differenceInYears(new Date(), new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])) >= 18;
    }),
  });



  function FormCadastro1({ onNextPress }: any) {
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
            placeholder: "CPF",
            mask: "999.999.999-99",
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

  function FormCadastro2({ onNextPress }: any) {
    return (
      <Form
        validationSchema={() => validationSchema}
        onSubmit={(values: any) => {
          console.log("Submitted:", values);
          onNextPress();
        }}
        fields={[
          {
            name: "email",
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
        button={{ title: "Próxima Etapa" }}
      />
    );
  }

  return (
    <Multiform>
      <FormCadastro1 />
      <FormCadastro2 />
    </Multiform>
  );
};

export default Register;
