import { useAuthContext } from "@contexts/AuthContext";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { login } = useAuthContext();

  function handleLogin() {
    if (login) {
      login();
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is a test for the navigation!</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="or go to register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default SignIn;
