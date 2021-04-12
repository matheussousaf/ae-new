import React from "react";
import { View, Button } from "react-native";
import { useFormik } from "formik";
import { repeat } from "../utils/index";
import Input from "../input";
import PrimaryButton from "../buttons/primary";


import { Container, InputsContainer } from "./styles";

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

  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <Container>
      <InputsContainer>
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
              error={errors[field.name]}
              options={{ mask: field.mask ?? repeat("*", 255) }}
            />
          );
        })}
      </InputsContainer>
      <PrimaryButton title={button.title} onPress={handleSubmit} />
    </Container>
  );
};

export default Form;
