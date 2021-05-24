import { Colors, Fonts } from "@ae/ui";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  background: ${Colors.light};
  padding-bottom: 60px;
  padding-top: 100px;
`;

export const TextContainer = styled.View`
  align-self: flex-start;
  margin-left: 30px;
  width: 200px;
`;

export const FormContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 190px;
`;

export const LinkText = styled.Text`
  font-family: ${Fonts.primary.medium};
  color: ${Colors.primary};
`;
