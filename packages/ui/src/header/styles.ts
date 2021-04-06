import styled from "styled-components/native";
import { Colors } from "../colors/colors";
import { Fonts, FontSizes } from "../typography/fonts";

interface HeaderProps {
  width?: string;
}

export const Container = styled.View<HeaderProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${Colors.primary};
  flex: 1;
  justify-content: flex-start;
  font-size: ${FontSizes.sm + "px"};
  font-family: ${Fonts.secondary.regular};
  text-align: center;
  text-transform: uppercase;
`;
