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

const SignIn: React.FC = () => {
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
                await checkEmail(values.email);
                // navigation.navigate("Register");
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

// function CircleLoading({ ...props }) {
//   const width = useSharedValue(50);

//   const style = useAnimatedStyle(() => {
//     return {
//       width: withTiming(width.value, {
//         duration: 500,
//         easing: Easing.bezier(0.25, 0.1, 0.25, 1),
//       }),
//     };
//   });

//   return (
//     <Animated.View style={[style]}>
//       <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
//         <Circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke="blue"
//           strokeWidth="10"
//           fill="none"
//         />
//       </Svg>
//     </Animated.View>
//   );
// }

export default SignIn;
