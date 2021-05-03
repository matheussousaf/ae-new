import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { Languages } from "@localization/index";

export function setLocalizationConfig() {
  i18n.translations = {
    pt: Languages.PT_BR,
    en: Languages.EN_US,
  };
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;
}
