import { Colors, Fonts } from "@ae/ui";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  background: ${Colors.light};
  padding-bottom: 60px;
  padding-top: 2px;
`;

export const TextContainer = styled.View`
  align-self: flex-start;
  margin-left: 30px;
  width: 250px;
`;

export const TextContainer2 = styled.View`
  align-self: flex-start;
  margin-left: 30px;
  width: 300px;
`;

export const FormContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 265px;
`;

export const LinkText = styled.Text`
  font-family: ${Fonts.primary.medium};
  color: ${Colors.primary};
`;

export const InfoText = styled.Text`
  font-family: ${Fonts.primary.regular};
  color: ${Colors.primary};
`;