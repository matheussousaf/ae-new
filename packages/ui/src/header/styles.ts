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
  height: 100px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${Colors.primary};
  justify-content: flex-start;
  font-size: ${FontSizes.sm + "px"};
  font-family: ${Fonts.secondary.regular};
  text-align: center;
  text-transform: uppercase;
  margin-left: -20px;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-left: 20px;
  width: 30px;
  height: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
