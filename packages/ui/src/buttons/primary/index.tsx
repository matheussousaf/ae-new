import React, { useState } from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps, GestureResponderEvent } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  width?: string;
  isDisabled?: boolean;
  icon?: any;
}

export default function PrimaryButton({
  title,
  isDisabled,
  onPress,
  width,
  icon,
}: ButtonProps) {
  const [loading, setLoading] = useState(false);

  function handlePress(event: GestureResponderEvent) {
    setLoading(true);
    console.log("Entrou 1!");
    onPress(event);
    setTimeout(() => {
      console.log("Entrou 2!");
      setLoading(false);
    }, 3000);
  }

  return (
    <Container
      onPress={handlePress}
      style={{ elevation: isDisabled ? 0 : 3 }}
      activeOpacity={0.9}
      width={width}
      disabled={isDisabled}
    >
      {
        <>
          <SimpleLineIcons name={icon} size={20} color="white" />
          <Title disabled={isDisabled}>{title}</Title>
        </>
      }
    </Container>
  );
}
