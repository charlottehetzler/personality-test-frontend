// src/app/layout.tsx
"use client";

import { ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/material";
import "./styles/globals.css";
import theme from "./styles/theme";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              minHeight: "100vh",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.palette.background.default,
              padding: 4,
            }}
          >
            <Container maxWidth="sm">{children}</Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
