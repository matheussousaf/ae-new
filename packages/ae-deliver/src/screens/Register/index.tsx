import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Input, Form } from "@ae/ui";
import * as Yup from "yup";

import { signIn } from "@services/auth";

const Register: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    cpf: Yup.string().required("CPF Obrigatório")
  });

  return (
    <View style={styles.container}>
      <Form
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Submitted:", values);
        }}
        fields={[
          {
            name: "name",
            initialValue: "",
            placeholder: "Nome completo",
          },
          {
            name: "phone",
            initialValue: "",
            placeholder: "Telefone",
            mask: "999.999.999-99"
          },
        ]}
        button={{ title: "Próxima Etapa" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
});

export default Register;
