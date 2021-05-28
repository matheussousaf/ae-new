import React from "react";
import { Typography, Form, Multiform, useMultiform } from "@ae/ui";
import * as Yup from "yup";

import { useNavigation } from "@react-navigation/core";
import { useLocalization } from "@hooks/useLocalization";

import { Container, FormContainer, LinkText, TextContainer, TextContainer2, InfoText } from "./styles";
import { SvgXml } from "react-native-svg";
import { badgeGuy } from "@images/badge.guy";
import { clockGuy } from "@images/clock.guy";
import { badgeAe } from "@images/badge.ae";
import { securityGuy } from "@images/security.guy";

interface RegisterForm {
  name?: string;
  email?: string;
  cpf?: string;
  sms?: string;
  password?: string;
  phone?: string;
}

const Register: React.FC = () => {
  const navigation = useNavigation();

  const t = useLocalization();

  const validationSchema = Yup.object({
    name: Yup.string().required("Nome Completo Obrigatório"),
    cpf: Yup.string().required("CPF Obrigatório"),
    // Implement on specific screen.
    // dataNasc: Yup.string().required("Data Obrigatoria").test('Dia/Mes/Ano', 'Necessário idade acima de 18 anos', function(value) {
    //   var dateParts = value.split("/");
    //   return differenceInYears(new Date(), new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])) >= 18;
    // }),a
  });

  const secondValidationSchema = Yup.object({
    phone: Yup.string().required("Nome Celular é necessário"),
    email: Yup.string().required("Email Obrigatório"),
  });

  const thirdValidationSchema = Yup.object({
    sms: Yup.string().required("Código SMS é necessário"),

  });

  const fourthValidationSchema = Yup.object({
    password: Yup.string().required("Nome Celular é necessário"),

  });

  function FormRegisterNameCPF() {
    const { nextStep, data, setData } = useMultiform<RegisterForm>();

    return (

      <Container>
      <TextContainer>
        <Typography type="heading" text="Vamos nos conhecer melhor!" />
        <Typography
          type="subheading"
          text="Digite os seus dados pessoais."
        />
      </TextContainer>
      <SvgXml width="300px" xml={badgeGuy} />
      <FormContainer>
      <Form
        validationSchema={() => validationSchema}
        onSubmit={(values: any) => {
          setData({ ...data, cpf: values.cpf, name: values.name });
          nextStep();
        }}
        fields={[
          {
            name: "name",
            initialValue: "",
            placeholder: "Nome Completo",
          },
          {
            name: "cpf",
            initialValue: "",
            placeholder: "CPF",
            type: 'numeric',
            mask: "999.999.999-99",
          },
        ]}
        button={{ title: "Próxima Etapa" }}
      />

      </FormContainer>
    </Container>
    );
  }



  function FormRegisterMailPhone() {
    const { nextStep, data, setData } = useMultiform<RegisterForm>();

    return (

      <Container>
      <TextContainer>
        <Typography type="heading" text="Vamos nos conhecer melhor!" />
        <Typography
          type="subheading"
          text="Digite os seus dados pessoais."
        />
      </TextContainer>
      <SvgXml width="300px" xml={clockGuy} />
      <FormContainer>
      <Form
        validationSchema={() => secondValidationSchema}
        onSubmit={(values: any) => {
          setData({ ...data, email: values.email, phone: values.phone });
          nextStep();
        }}
        fields={[
            {
              name: "email",
              initialValue: "",
              placeholder: "Email",
              type: "email-address",
            },
            {
            name: "phone",
            initialValue: "",
            placeholder: "Celular",
            type: 'numeric',
            mask: "+55 (99) 99999-9999",
            
          },
        ]}


        
        button={{ title: "Próxima Etapa" }}
      />
      </FormContainer>
    </Container>

    );
  }


  function FormRegisterSMS() {
    const { nextStep, data, setData } = useMultiform<RegisterForm>();

    return (

      <Container>
      <TextContainer2 id='longer'>
        <Typography type="heading" text="Precisamos confirmar a sua identidade." />
        <Typography
          type="subheading"
          text="Insira o código enviado para o seu SMS."
        />
      </TextContainer2>
      <SvgXml width="300px" xml={badgeAe} />
      <FormContainer>
      <Form
        validationSchema={() => thirdValidationSchema}
        onSubmit={(values: any) => {
          setData({ ...data, sms: values.sms });
          nextStep();
        }}
        fields={[
          {
            name: "sms",
            initialValue: "",
            placeholder: "SMS",
          },

        ]}
        button={{ title: "Quase Lá!" }}
      />
      </FormContainer>
    </Container>

    );
  }




  function FormRegisterPassword() {
    const { nextStep, data, setData } = useMultiform<RegisterForm>();

    return (

      <Container>
      <TextContainer>
        <Typography type="heading" text="Sua proteção em primeiro lugar!" />
        <Typography
          type="subheading"
          text="Crie uma senha forte."
        />
      </TextContainer>
      <SvgXml width="300px" xml={securityGuy} />
      <FormContainer>
      <Form
        validationSchema={() => fourthValidationSchema}
        onSubmit={()=>{nextStep();}}
        // onSubmit={(values: any) => {
        //   setData({ ...data, email: values.email, phone: values.phone });
        //   nextStep();
        // }}
        fields={[
          
          {
            name: "senha",
            initialValue: "",
            placeholder: "Senha",
          },
          {
          name: "senha2 ",
          initialValue: "",
          placeholder: "Repita a senha",
          },

        ]}
        button={{ title: "Concluir" }}
      />
      </FormContainer>
    </Container>

    );
  }

  return (
    <Multiform
      headerTitle="Cadastro"
      onLastBackPress={() => navigation.goBack()}
    >
      <FormRegisterNameCPF />
      <FormRegisterMailPhone />
      <FormRegisterSMS />
      <FormRegisterPassword />
    </Multiform>
  );
};

export default Register;
