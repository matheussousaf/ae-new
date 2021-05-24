import { Form, Typography } from "@ae/ui";
import { useAuthContext } from "@contexts/AuthContext";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import * as Yup from "yup";

import { Container, FormContainer, LinkText, TextContainer } from "./styles";
import { SvgXml } from "react-native-svg";
import { Guy } from "@images/guy";
import { Ionicons } from "@expo/vector-icons";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("O e-mail é obrigatório.")
    .email("Insira um e-mail válido."),
});

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { login } = useAuthContext();

  function handleLogin() {
    if (login) {
      login();
    }
  }

  return (
    <Container>
      <TextContainer>
        <Typography type="heading" text="Seja um entregador" />
        <Typography
          type="subheading"
          text="Sua senha é privada e não será necessária fora do aplicativo"
        />
      </TextContainer>
      <SvgXml width="300px" xml={Guy} />
      <FormContainer>
        <Form
          validationSchema={() => validationSchema}
          onSubmit={(values: any) => {
            navigation.navigate("Register");
          }}
          fields={[
            {
              name: "email",
              initialValue: "",
              placeholder: "Email",
            },
          ]}
          button={{ title: "Entrar", icon: "login" }}
        />
        <LinkText>Esqueci minha senha</LinkText>
      </FormContainer>
      {/* <Button title="Login" onPress={handleLogin} />
      <Button
      title="or go to register"
      onPress={() => navigation.navigate("Register")}
    /> */}
    </Container>
  );
};

export default SignIn;
