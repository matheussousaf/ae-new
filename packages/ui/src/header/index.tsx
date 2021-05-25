import React from "react";
import { Container, Title, IconContainer, LeftIconContainer } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { FontSizes } from "../typography/fonts";
import { Colors } from "../colors/colors";

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
}

export default function Header({ title, onBackPress }: HeaderProps) {
  function RightIcon() {
    return <IconContainer />;
  }

  return (
    <Container>
      <LeftIconContainer activeOpacity={0.8} onPress={onBackPress}>
        <Ionicons
          style={{ left: 0 }}
          name="ios-arrow-back"
          size={FontSizes.lg}
          color={Colors.primary}
        />
      </LeftIconContainer>
      <Title style={{ textAlignVertical: "center" }}>{title}</Title>
      <RightIcon />
    </Container>
  );
}
