import styled from "styled-components/native";
import { Fonts, FontSizes } from "../typography/fonts";
import { Colors } from "../colors/colors";
import { TextInputMask } from "react-native-masked-text";
import Animated from "react-native-reanimated";

export const Container = styled(Animated.View)`
  background: ${Colors.base200};
  padding: 7px 20px;
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
`;

export const StyledInput = styled(TextInputMask)`
  font-family: ${Fonts.primary.medium};
  font-size: ${FontSizes.toPixel("xmd")};
  color: ${Colors.base800};
  z-index: 99;
`;

interface LabelProps {
  isFocused?: boolean;
}

export const Label = styled(Animated.Text)<LabelProps>`
  color: ${Colors.base400};
  font-family: ${Fonts.primary.medium};
`;
