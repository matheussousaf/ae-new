import React, { useState, useRef, useEffect } from "react";

import { ComponentsContainer, Container, ProgressBar } from "./styles";
import Page from "./page/index";
import Animated, { Easing } from "react-native-reanimated";
import { useValue } from "../utils";
import { Text, Dimensions } from "react-native";
import Header from "../header";

const { timing } = Animated;

export const Multiform = ({ children }) => {
  let subComponents = React.Children.map(children, (child) => {
    return React.cloneElement(child, { onNextPress: nextStep });
  });

  const totalSteps = children.length;

  const growAnimation = useRef(
    useValue(Dimensions.get("window").width / totalSteps)
  ).current;

  const tX = useValue(-375);
 
  const slideAnimation = useRef(useValue(0)).current;

  const [currentStep, setCurrentStep] = useState(1);

  function nextStep() {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  }

  function previousStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  useEffect(() => {
    // Manage Pages sliding
    timing(slideAnimation, {
      toValue:
        Dimensions.get("window").width -
        Dimensions.get("window").width * currentStep,
      duration: 200,
      easing: Easing.in(Easing.linear),
    }).start();

    // Manage grow/shrink ProgressBar animation
    timing(growAnimation, {
      toValue: (Dimensions.get("window").width / totalSteps) * currentStep,
      duration: 300,
      easing: Easing.inOut(Easing.circle),
    }).start();
  }, [currentStep]);

  
  return (
    <Container>
      <Header title="Cadastro" onBackPress={previousStep} />
      
      <ComponentsContainer
        size={totalSteps}
        /*
        // @ts-ignore */
        style={{ transform: [{translateX: slideAnimation }] }}
      >
        {subComponents.map((component, index) => {
          return <Page  key={index} content={component} />;
        })}
      </ComponentsContainer>
      <ProgressBar style={{ width: growAnimation }}></ProgressBar>
    </Container>
  );
};

export default Multiform;
