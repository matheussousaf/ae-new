import styled from "styled-components/native";
import { Fonts, FontSizes } from "../typography/fonts";
import { Colors } from "../colors/colors";
import { TextInputMask } from "react-native-masked-text";
import Animated from "react-native-reanimated";

interface ContainerProps {
  hasError?: string;
}

export const Container = styled(Animated.View)<ContainerProps>`
  background: ${Colors.base200};
  padding: 7px 20px;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  border: ${({ hasError }) =>
    hasError ? `2px solid ${Colors.danger}` : "none"};
`;

export const StyledInput = styled(TextInputMask)`
  font-family: ${Fonts.primary.medium};
  font-size: ${FontSizes.toPixel("xmd")};
  color: ${Colors.base800};
  z-index: 99;
`;

interface LabelProps {
  isFocused?: boolean;
  hasError?: string;
}

export const Label = styled(Animated.Text)<LabelProps>`
  color: ${({ hasError }) => (hasError ? Colors.danger : Colors.base400)};
  font-family: ${Fonts.primary.medium};
`;

export const Error = styled.Text`
  color: ${Colors.danger};
  font-family: ${Fonts.primary.medium};
`;

export function switchColorIfHasError(error: string, color: string) {
  return error ? Colors.danger : color;
}