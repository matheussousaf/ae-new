import React from "react";
import { Container, Title } from "./styles";
import { Ionicons } from '@expo/vector-icons'
import { FontSizes } from "../typography/fonts";
import { Colors } from "../colors/colors";

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
}

export default function Header({ title, onBackPress }: HeaderProps) {
  return (
    <Container>
      <Ionicons style={{ left: 0 }} name="ios-arrow-back" size={FontSizes.lg} color={Colors.primary} />
      <Title>{title}</Title>
    </Container>
  );
}
