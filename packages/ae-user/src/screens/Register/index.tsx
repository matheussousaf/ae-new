import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { signIn } from "@services/auth";

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is a test in Register</Text>
      <Button onPress={() => signIn()} title="Register"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
});

export default Register;
