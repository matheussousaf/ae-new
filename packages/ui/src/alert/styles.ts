import styled from "styled-components/native";
import { Colors } from "../colors/colors";
import { FontSizes } from "../typography/fonts";

import Animated from "react-native-reanimated";

import { AlertTypes } from "./index";

export const Container = styled(Animated.View)<{ type?: AlertTypes }>`
  height: 100px;
  background: ${({ type }) =>
    type === "danger" ? Colors.danger : Colors.success};
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;

export const AnimationContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${Colors.light};
  font-size: ${FontSizes.toPixel("xsm")};
  text-align: center;
  width: 300px;
`;

export const IconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
