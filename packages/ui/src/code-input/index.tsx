import React, { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Dimensions } from "react-native";

import { Cell, CellText, Container } from "./styles";

const CELL_COUNT = 4;

const CodeInput: React.FC = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Container>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={{
          marginTop: 20,
          width: Dimensions.get("window").width - 80,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        renderCell={({ index, symbol, isFocused }) => (
          <Cell onLayout={getCellOnLayoutHandler(index)} key={index}>
            <CellText>{symbol || (isFocused ? <Cursor /> : null)}</CellText>
          </Cell>
        )}
      />
    </Container>
  );
};

export default CodeInput;
