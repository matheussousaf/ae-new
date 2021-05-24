import React from "react";

import { StyledHeading, StyledSubheading } from "./styles";

type TypographyTypes = "heading" | "subheading";

interface TypographyProps {
  text?: string;
  type?: TypographyTypes;
}

const Typography: React.FC<TypographyProps> = ({ text, type }) => {
  switch (type) {
    case "heading":
      return <StyledHeading>{text}</StyledHeading>;
    case "subheading":
      return <StyledSubheading>{text}</StyledSubheading>;
    default:
      return <StyledHeading>{text}</StyledHeading>;
  }
};

export default Typography;
