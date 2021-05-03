import ptBR from "./languages/pt_BR";
import enUS from "./languages/en_US";

export interface LanguageType {
  hello: string;
}

export const Languages = {
  PT_BR: ptBR,
  EN_US: enUS,
};
