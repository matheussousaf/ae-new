import { Form, Typography } from "@ae/ui";
import { useAuthContext } from "@contexts/AuthContext";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import * as Yup from "yup";

import { Container, FormContainer, LinkText, TextContainer } from "./styles";
import { SvgXml } from "react-native-svg";
import { Guy } from "@images/guy";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
// } from "react-native-reanimated";

import { Button, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("O e-mail é obrigatório.")
    .email("Insira um e-mail válido."),
});

const Sign: React.FC = () => {
  const navigation = useNavigation();
  const { login, checkEmail } = useAuthContext();

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
          onSubmit={async (values: any) => {
            if (checkEmail) {
              try {
                const emailAlreadyExists = await checkEmail(values.email);
                if (emailAlreadyExists) {
                  navigation.navigate("SignIn");
                } else {
                  navigation.navigate("Register");
                }
              } catch (e) {
                return;
              }
            }
          }}
          fields={[
            {
              name: "email",
              initialValue: "",
              placeholder: "Email",
              type: "email-address",
            },
          ]}
          button={{ title: "Entrar", icon: "login" }}
        />
        <LinkText>Esqueci minha senha</LinkText>
      </FormContainer>
    </Container>
  );
};

export default Sign;
