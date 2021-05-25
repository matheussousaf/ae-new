import React, { useEffect, useState } from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps, GestureResponderEvent } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  width?: string;
  isDisabled?: boolean;
  icon?: any;
  hasLoadingIndicator?: boolean;
  loading?: boolean;
}

export default function PrimaryButton({
  title,
  isDisabled,
  onPress,
  width,
  icon,
  hasLoadingIndicator,
  loading,
}: ButtonProps) {
  async function handlePress(event: GestureResponderEvent) {
    onPress(event);
  }

  return (
    <Container
      onPress={handlePress}
      style={{ elevation: isDisabled ? 0 : 3 }}
      activeOpacity={0.9}
      width={width}
      disabled={isDisabled}
    >
      {hasLoadingIndicator && loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <SimpleLineIcons name={icon} size={20} color="white" />
          <Title disabled={isDisabled}>{title}</Title>
        </>
      )}
    </Container>
  );
}

const LoadingAnimation: React.FC = ({ ...props }) => {
  const rotation = useSharedValue(30);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration: 500 }), -1, false);
  }, []);

  return (
    <Animated.View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        },
        style,
      ]}
    >
      <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="10"
          fill="none"
          strokeDasharray="200"
        />
      </Svg>
    </Animated.View>
  );
};
