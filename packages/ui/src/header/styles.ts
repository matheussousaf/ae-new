import styled from "styled-components/native";
import { Colors } from "../colors/colors";
import { Fonts, FontSizes } from "../typography/fonts";
import { Platform } from "react-native";

interface HeaderProps {
  width?: string;
}

export const Container = styled.View<HeaderProps>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  background: white;
  height: ${Platform.OS === "ios" ? "120px" : "100px"};
`;

export const Title = styled.Text`
  color: ${Colors.primary};
  justify-content: flex-start;
  font-size: ${FontSizes.sm + "px"};
  font-family: ${Fonts.secondary.regular};
  text-align: center;
  text-transform: uppercase;
  margin-left: -30px;
`;

export const IconContainer = styled.View`
  margin-left: 30px;
`;
