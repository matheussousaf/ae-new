import i18n from "i18n-js";

export const useLocalization = () => {
  return (value: string) => i18n.t(value);
};
