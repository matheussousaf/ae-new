import { securityGuy } from "@images/security.guy";
import React from "react";
import { View, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SvgXml } from "react-native-svg";

// import { Container } from './styles';

const Test: React.FC = () => {
  return (
    <KeyboardAwareScrollView automaticallyAdjustContentInsets={true}>
      <View
        style={{
          display: "flex",
          backgroundColor: "tomato",
        }}
      >
        <View style={{ margin: 100 }}>
          <SvgXml xml={securityGuy}></SvgXml>
        </View>
        <TextInput placeholder="Testing 1" />
        <TextInput placeholder="Testing 2" />
        <TextInput placeholder="Testing 3" />
        <TextInput placeholder="Testing 4" />
        <TextInput placeholder="Testing 5" />
        <TextInput placeholder="Testing 6" />
        <TextInput placeholder="Testing 6" />
        <TextInput placeholder="Testing 6" />
        <TextInput placeholder="Testing 6" />
        <TextInput placeholder="Testing 9" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Test;
