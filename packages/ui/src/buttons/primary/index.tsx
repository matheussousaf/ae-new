import React from "react";
import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  width?: string;
}

export default function PrimaryButton({ title, onPress, width }: ButtonProps) {
  return (
    <Container style={{ elevation: 3 }} activeOpacity={0.9} width={width}>
      <Title>{title}</Title>
    </Container>
  );
}
