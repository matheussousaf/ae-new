import i18n from "i18n-js";
import { LanguageType } from "@localization/index";

export function useTranslation() {
  function translate(value: string) {
    return (value: string) => i18n.t(value);
  }

  function getKeys() {
    return {} as LanguageType;
  }

  return {
    translate,
    getKeys,
  };
}
