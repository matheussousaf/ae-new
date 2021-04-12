import React from "react";

import { Container } from "./styles";

interface PageProps {
  content: React.FC;
}

export default function Page({ content }: PageProps) {
  return (
    <Container>
      {content}
    </Container>
  );
}
