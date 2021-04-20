import styled from "styled-components/native";
import { Colors } from "../../colors/colors";
import { Fonts, FontSizes } from "../../typography/fonts";

interface ButtonProps {
  width?: string;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: 50px;
  background: ${({ disabled }) => (disabled ? Colors.base200 : Colors.primary)};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 4px 2px 10px #cdd1f1;
  margin: 10px 0px;
`;

export const Title = styled.Text<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? Colors.base400 : Colors.light)};
  font-size: ${FontSizes.toPixel("md")};
  font-family: ${Fonts.primary.medium};
`;
