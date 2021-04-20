import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimationContainer,
  Container,
  ContentContainer,
  IconContainer,
  Title,
} from "./styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Colors } from "../colors/colors";
import Animated, { Easing } from "react-native-reanimated";
import { useValue } from "../utils";

const { timing } = Animated;

export type AlertTypes = "danger" | "success";

interface AlertProps {
  text?: string;
  type?: AlertTypes;
  time?: number;
}

interface AlertContextData {
  createAlert: (alertProps: AlertProps) => void;
  dismissAlert: () => void;
}

export const AlertContext = createContext({} as AlertContextData);

const Alert: React.FC<AlertProps> = ({ text, type }) => {
  return (
    <Container type={type}>
      <ContentContainer>
        <IconContainer>
          {type === "danger" ? (
            <Feather name="alert-circle" size={24} color={Colors.light} />
          ) : (
            <Ionicons name="ios-checkmark-circle-outline" size={24} color={Colors.light} />
          )}
        </IconContainer>
        <Title>{text || "It has been an error with this alert"}</Title>
      </ContentContainer>
    </Container>
  );
};

export const AlertProvider: React.FC = ({ children }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertConfig, setAlertConfig] = useState({} as AlertProps);

  const moveAnimation = useRef(useValue(-200)).current;

  useEffect(() => {
    timing(moveAnimation, {
      duration: 500,
      easing: Easing.in(Easing.linear),
      toValue: !alertVisible ? -200 : 0,
    }).start();
  }, [alertVisible]);

  function createAlert(alertProps: AlertProps) {
    setAlertVisible(true);
    setAlertConfig(alertProps);
    if (alertProps.time) {
      setTimeout(() => {
        setAlertVisible(false);
      }, alertProps.time);
    }
  }

  function dismissAlert() {
    setAlertVisible(false);
  }

  return (
    <AlertContext.Provider
      value={{ createAlert: createAlert, dismissAlert: dismissAlert }}
    >
      {children}
      <AnimationContainer
        //@ts-ignore
        style={{ transform: [{ translateY: moveAnimation }] }}
      >
        <Alert {...alertConfig} />
      </AnimationContainer>
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
