import React, { useEffect, useRef, useState } from "react";
import { View, TextInput } from "react-native";
import { TextInputMaskProps } from "react-native-masked-text";
import Animated, { add, Easing } from "react-native-reanimated";
import { Colors } from "../colors/colors";
import { FontSizes } from "../typography/fonts";
import { useValue } from "../utils";
const { timing } = Animated;

import { Container, StyledInput, Label } from "./styles";

interface InputProps extends TextInputMaskProps {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, onFocus, onBlur, ...props }) => {
  const [isFocused, setFocused] = useState(false);

  const focusAnim = useRef(useValue(0)).current;

  useEffect(() => {
    console.log("Estado mudou:", isFocused);
    timing(focusAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }).start();
  }, [isFocused]);

  return (
    <Container>
      <Label
        style={{
          top: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [14, 2],
          }),
          fontSize: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [FontSizes.md, FontSizes.sm],
          }),
          color: isFocused ? Colors.base600 : Colors.base400,
        }}
      >
        {label}
      </Label>
      <StyledInput
        onBlur={(event) => {
          const lengthOfText = props.value.length;
          if (lengthOfText > 0) {
            setFocused(true);
          } else {
            setFocused(false);
          }
          onBlur(event);
        }}
        onFocus={(event) => {
          setFocused(true);
          onFocus(event);
        }}
        {...props}
      />
    </Container>
  );
};

export default Input;
