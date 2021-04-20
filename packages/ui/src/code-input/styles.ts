import styled from "styled-components/native";
import { Colors } from "../colors/colors";
import { Fonts, FontSizes } from "../typography/fonts";

export const Container = styled.SafeAreaView`
  padding: 30px;
  min-height: 300px;
`;

export const Cell = styled.View`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${Colors.base200};
`;

export const CellText = styled.Text`
  font-family: ${Fonts.secondary.regular};
  font-size: ${FontSizes.toPixel("lg")};
  color: ${Colors.base400};
`;
