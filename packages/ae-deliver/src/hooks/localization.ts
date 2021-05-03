import i18n from "i18n-js";

export const useTranslation = () => {
  return (value: string) => i18n.t(value);
};
