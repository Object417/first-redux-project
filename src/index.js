import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { Container, CssBaseline, Box } from "@mui/material"

import legacyStore from "./legacy-redux/legacyStore"
import LegacyApp from "./LegacyApp"

import modernStore from "./modern-redux/modernStore"
import ModernApp from "./ModernApp"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <Box>
      <Container
        sx={{
          display: "grid",
          gridTemplate: "auto / 1fr 1fr",
          maxWidth: "xl",
          gap: 2,
        }}
      >
        <Provider store={legacyStore}>
          <LegacyApp />
        </Provider>

        <Provider store={modernStore}>
          <ModernApp />
        </Provider>
      </Container>
    </Box>

    <CssBaseline />
  </StrictMode>
)
