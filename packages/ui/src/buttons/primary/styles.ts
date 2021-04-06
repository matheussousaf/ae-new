import styled from "styled-components/native";
import { Colors } from "../../colors/colors";
import { Fonts, FontSizes } from "../../typography/fonts";

interface ButtonProps {
  width?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: 50px;
  background: ${Colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 4px 2px 10px #CDD1F1;
  margin: 10px 0px;
`;

export const Title = styled.Text`
  color: white;
  font-size: ${FontSizes.toPixel("md")};
  font-family: ${Fonts.primary.medium};
`;
