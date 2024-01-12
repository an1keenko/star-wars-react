import { AppContainer } from "./AppContainer.tsx";
import { Header } from "./Header.tsx";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer } from "./Footer.tsx";

export default function Layout() {
  return (
    <AppContainer>
      <Header />
      <Box component="main" sx={{ height: "100%", mt: 2 }}>
        <Outlet />
      </Box>
      <Footer />
    </AppContainer>
  );
}
