import React from "react";
import { Form, Multiform } from "@ae/ui";
import * as Yup from "yup";

import { signIn } from "@services/auth";

interface Test {
  nextStep: () => void;
  previousStep: () => void;
}

const Register: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("Telefone Obrigatório"),
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
            name: "email",
            initialValue: "",
            placeholder: "Nomes completo",
          },
          {
            name: "phone",
            initialValue: "",
            placeholder: "Telefone",
            mask: "999.999.999-99",
          },
        ]}
        button={{ title: "Próxima Etapa" }}
      />
    );
  }

  function FormExample2({ onNextPress }: any) {
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
            placeholder: "Nomes completo",
          },
        ]}
        button={{ title: "Próxima Etapa" }}
      />
    );
  }

  return (
    <Multiform>
      <FormExample />
      <FormExample2 />
    </Multiform>
  );
};

export default Register;
