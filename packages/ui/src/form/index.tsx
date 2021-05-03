import React from "react";
import { KeyboardTypeOptions } from "react-native";
import { useFormik } from "formik";
import { repeat } from "../utils/index";
import Input from "../input";
import PrimaryButton from "../buttons/primary";

import { ButtonContainer, Container, InputsContainer } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface Field {
  initialValue: string;
  name: string;
  placeholder: string;
  mask?: string;
  type?: KeyboardTypeOptions;
  maxLenght?: number;
  isPassword?: boolean;
}

interface ButtonProps {
  title?: string;
  isPrimary?: boolean;
}

interface FormProps {
  validationSchema: any;
  fields: Field[];
  onSubmit: (values: any) => any | Promise<any>;
  button: ButtonProps;
}

const Form: React.FC<FormProps> = ({
  validationSchema,
  onSubmit,
  fields,
  button,
}) => {
  let initialValues = {};

  for (let field of fields) {
    initialValues[field.name] = field.initialValue;
  }

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <Container>
      <KeyboardAwareScrollView>
        <InputsContainer>
          {fields.map((field, index) => {
            return (
              <Input
                isPassword={field.isPassword}
                label={field.placeholder}
                key={index}
                onChangeText={handleChange(field.name)}
                onBlur={handleBlur(field.name)}
                onFocus={() => {}}
                value={values[field.name]}
                type="custom"
                error={touched[field.name] && errors[field.name]}
                options={{ mask: field.mask ?? repeat("*", 255) }}
                keyboardType={field.type}
                maxLength={field.maxLenght}
              />
            );
          })}
        </InputsContainer>
      </KeyboardAwareScrollView>
      <ButtonContainer>
        <PrimaryButton
          isDisabled={
            Object.keys(errors).length > 0 ||
            Object.values(touched).length === 0
          }
          title={button.title}
          onPress={handleSubmit}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Form;
