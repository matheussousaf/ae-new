import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  width?: string;
  isDisabled?: boolean;
}

export default function PrimaryButton({
  title,
  isDisabled,
  onPress,
  width,
}: ButtonProps) {
  return (
    <Container
      onPress={onPress}
      style={{ elevation: isDisabled ? 0 : 3 }}
      activeOpacity={0.9}
      width={width}
      disabled={isDisabled}
    >
      <Title disabled={isDisabled}>{title}</Title>
    </Container>
  );
}
