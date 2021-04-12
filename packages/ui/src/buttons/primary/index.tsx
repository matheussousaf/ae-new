import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  width?: string;
}

export default function PrimaryButton({ title, onPress, width }: ButtonProps) {
  return (
    <Container
      onPress={onPress}
      style={{ elevation: 3 }}
      activeOpacity={0.9}
      width={width}
    >
      <Title>{title}</Title>
    </Container>
  );
}
