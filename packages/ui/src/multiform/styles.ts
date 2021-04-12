import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { Colors } from "../colors/colors";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  flex: 1;
  margin: 0;
`;

export const ProgressBar = styled(Animated.View)`
  height: 10px;
  width: 100%;
  background: ${Colors.primary};
  display: flex;
  flex-direction: row;
`;

export const TouchableTest = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface ComponentsContainerProps {
  size: number;
}

export const ComponentsContainer = styled(Animated.View)<ComponentsContainerProps>`
  flex-direction: row;
  width: ${props => props.size * 100}%;
  flex: 1;
`;
