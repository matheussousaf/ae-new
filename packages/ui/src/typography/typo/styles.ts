import styled from "styled-components/native";
import { Colors } from "../../colors/colors";
import { Fonts, FontSizes } from "../fonts";

export const StyledHeading = styled.Text`
  color: ${Colors.darker};
  font-family: ${Fonts.primary.medium};
  font-size: ${FontSizes.toPixel("xlg")};
  text-align: left;
`;

export const StyledSubheading = styled.Text`
  color: ${Colors.base400};
  font-family: ${Fonts.primary.regular};
  font-size: ${FontSizes.toPixel("sm")};
  text-align: left;
`;
