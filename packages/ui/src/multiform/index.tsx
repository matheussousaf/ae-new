import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

import { ComponentsContainer, Container, ProgressBar } from "./styles";
import Page from "./page/index";
import Animated, { EasingNode } from "react-native-reanimated";
import { useValue } from "../utils";
import { Dimensions, BackHandler, Keyboard } from "react-native";
import Header from "../header";

const { timing } = Animated;
interface MultiformProps {
  onLastBackPress: () => void;
  headerTitle?: string;
}
interface MultiformContextProps<T> {
  nextStep: () => void;
  previousStep: () => void;
  data: T;
  setData: Dispatch<SetStateAction<T>>;
}

export function createMultiformContext<T = any>() {
  return createContext<MultiformContextProps<T> | null>(null);
}

const MultiformContext = createMultiformContext();

const Multiform: React.FC<MultiformProps> = ({
  children,
  onLastBackPress,
  headerTitle,
}) => {
  const totalSteps = React.Children.count(children);

  let subComponents = React.Children.map(children, (child) => {
    return child;
  });

  const growAnimation = useRef(
    useValue(Dimensions.get("window").width / totalSteps)
  ).current;

  const slideAnimation = useRef(useValue(0)).current;

  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    // Manage Pages sliding
    timing(slideAnimation, {
      toValue:
        Dimensions.get("window").width -
        Dimensions.get("window").width * currentStep,
      duration: 200,
      easing: EasingNode.in(EasingNode.linear),
    }).start();

    // Manage grow/shrink ProgressBar animation
    timing(growAnimation, {
      toValue: (Dimensions.get("window").width / totalSteps) * currentStep,
      duration: 300,
      easing: EasingNode.inOut(EasingNode.circle),
    }).start();

    const backAction = () => {
      if (currentStep === 1) {
        return false;
      }
      previousStep();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [currentStep]);

  function nextStep() {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      Keyboard.dismiss();
    }
  }

  function previousStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      Keyboard.dismiss();
      return;
    }

    if (onLastBackPress) {
      onLastBackPress();
    }
  }
  return (
    <MultiformContext.Provider
      value={{
        nextStep,
        previousStep,
        data,
        setData,
      }}
    >
      <Container>
        <Header title={headerTitle} onBackPress={previousStep} />
        <ComponentsContainer
          size={totalSteps}
          /**
         //@ts-ignore */
          style={{ transform: [{ translateX: slideAnimation }] }}
        >
          {subComponents.map((component, index) => {
            return <Page key={index} content={component} />;
          })}
        </ComponentsContainer>
        <ProgressBar style={{ width: growAnimation }} />
      </Container>
    </MultiformContext.Provider>
  );
};

export function useMultiform<T = any>() {
  return useContext<MultiformContextProps<T>>(MultiformContext);
}

export default Multiform;
