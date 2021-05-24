import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  width?: string;
  isDisabled?: boolean;
  icon?: any;
}

export default function PrimaryButton({
  title,
  isDisabled,
  onPress,
  width,
  icon,
}: ButtonProps) {
  return (
    <Container
      onPress={onPress}
      style={{ elevation: isDisabled ? 0 : 3 }}
      activeOpacity={0.9}
      width={width}
      disabled={isDisabled}
    >
      <SimpleLineIcons name={icon} size={20} color="white" />
      <Title disabled={isDisabled}>{title}</Title>
    </Container>
  );
}
