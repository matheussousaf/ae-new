import React, { useState } from "react";
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

type BeforeSubmit = {
  errors?: object;
};

interface ButtonProps {
  title?: string;
  isPrimary?: boolean;
  icon?: string;
  disabledWithError?: boolean;
}

interface FormProps {
  validationSchema: any;
  fields: Field[];
  onSubmit: (values: any) => any | Promise<any>;
  button: ButtonProps;
  beforeSubmit?: () => Promise<BeforeSubmit | void>;
}

const Form: React.FC<FormProps> = ({
  validationSchema,
  onSubmit,
  fields,
  button,
  beforeSubmit,
}) => {
  const [loading, setLoading] = useState(false);

  let initialValues = {};

  for (let field of fields) {
    initialValues[field.name] = field.initialValue;
  }

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setErrors,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      (async () => {
        if (beforeSubmit) {
          const result = await beforeSubmit();

          if (!result) {
            return;
          }

          if (result.errors) {
            setErrors(result.errors);
          }
        }
      })();
      setLoading(true);
      await onSubmit(values);
      setLoading(false);
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
            button.disabledWithError &&
            (Object.keys(errors).length > 0 ||
              Object.values(touched).length === 0)
          }
          title={button.title}
          onPress={handleSubmit}
          hasLoadingIndicator
          loading={loading}
          icon={button.icon}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Form;
