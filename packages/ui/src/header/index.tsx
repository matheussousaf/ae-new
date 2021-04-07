import React from "react";
import { Container, Title, IconContainer } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { FontSizes } from "../typography/fonts";
import { Colors } from "../colors/colors";
import { View } from "react-native";

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
}

export default function Header({ title, onBackPress }: HeaderProps) {
  function RightIcon() {
    return <View />;
  }

  return (
    <Container>
      <IconContainer>
        <Ionicons
          style={{ left: 0 }}
          name="ios-arrow-back"
          size={FontSizes.lg}
          color={Colors.primary}
        />
      </IconContainer>
      <Title>{title}</Title>
      <RightIcon />
    </Container>
  );
}
