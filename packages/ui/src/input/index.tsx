import React, { useEffect, useRef, useState } from "react";
import { TextInputMaskProps } from "react-native-masked-text";
import Animated, { Easing } from "react-native-reanimated";
import { Colors } from "../colors/colors";
import { FontSizes } from "../typography/fonts";
import { useValue } from "../utils";
const { timing } = Animated;

import {
  Container,
  StyledInput,
  Label,
  Error,
  switchColorIfHasError,
} from "./styles";

interface InputProps extends TextInputMaskProps {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);

  const focusAnim = useRef(useValue(0)).current;

  useEffect(() => {
    timing(focusAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 100,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }).start();
  }, [isFocused]);

  return (
    <>
      <Container hasError={error}>
        <Label
          hasError={error}
          style={{
            top: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [14, 2],
            }),
            fontSize: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [FontSizes.md, FontSizes.sm],
            }),
            color: isFocused
              ? switchColorIfHasError(error, Colors.base600)
              : switchColorIfHasError(error, Colors.base400),
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
      {error && <Error>{error}</Error>}
    </>
  );
};

export default Input;
