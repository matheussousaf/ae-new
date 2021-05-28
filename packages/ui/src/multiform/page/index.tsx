import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Container } from "./styles";

interface PageProps {
  content: any;
}

export default function Page({ content }: PageProps) {
  return <Container style={{ backgroundColor: "red" }}>{content}</Container>;
}
