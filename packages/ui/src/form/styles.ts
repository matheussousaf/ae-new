import styled from "styled-components/native";
import { Colors } from "../colors/colors";

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const InputsContainer = styled.View`
  padding: 0 30px;
  display: flex;
`;

export const ButtonContainer = styled.View`
  padding: 0 30px;
  bottom: 0;
  justify-content: center;
  background: ${Colors.light};
  align-items: center;
  border-top-color: ${Colors.base200};
  border-top-width: 1px;
  width: 100%;
`;
