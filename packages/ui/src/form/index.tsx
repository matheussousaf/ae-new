import React from "react";
import { View, Button } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { useFormik } from "formik";
import { repeat } from "../utils/index";
import Input from "../input";
import PrimaryButton from "../buttons/primary";

import { Container } from "./styles";

interface Field {
  initialValue: string;
  name: string;
  placeholder: string;
  mask?: string;
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

  const { handleChange, handleBlur, handleSubmit, values } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Entrou");
      onSubmit(values);
    },
  });

  return (
    <Container>
      {fields.map((field, index) => {
        return (
          <Input
            label={field.placeholder}
            key={index}
            onChangeText={handleChange(field.name)}
            onBlur={handleBlur(field.name)}
            onFocus={() => {}}
            value={values[field.name]}
            type="custom"
            options={{ mask: field.mask ?? repeat("*", 255) }}
          />
        );
      })}
      <PrimaryButton title={button.title} onPress={handleSubmit} />
    </Container>
  );
};

export default Form;
