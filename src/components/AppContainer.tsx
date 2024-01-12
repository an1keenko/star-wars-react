import React from "react";
import Container from "@mui/material/Container";

export function AppContainer({ children }: { children: React.ReactNode }) {
  return <Container maxWidth="lg">{children}</Container>;
}
