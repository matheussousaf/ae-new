export const Fonts = {
  primary: {
    regular: "FiraSans_400Regular",
    medium: "FiraSans_500Medium",
    semiBold: "FiraSans_600SemiBold",
    bold: "FiraSans_700Bold",
  },
  secondary: {
    regular: "Viga_400Regular",
  },
};

type Sizes = "xsm" | "sm" | "md" | "xmd" | "lg" | "xlg";

export const FontSizes = {
  toPixel: (size: Sizes) => {
    return FontSizes[size] + "px";
  },
  xsm: 12,
  sm: 14,
  md: 16,
  xmd: 18,
  lg: 22,
  xlg: 28,
};
