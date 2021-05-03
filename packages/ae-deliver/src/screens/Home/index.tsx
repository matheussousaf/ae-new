import { useAuthContext } from "@contexts/AuthContext";
import { t } from "i18n-js";
import React from "react";
import { View, Text, Button } from "react-native";

// import { Container } from './styles';

const Home: React.FC = () => {
  const { logout } = useAuthContext();

  function handleLogout() {
    if (logout) {
      logout();
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the Home Screen</Text>
      <Text>{t("hello")}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Home;
