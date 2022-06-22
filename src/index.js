import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"

import { Provider } from "react-redux"
import store from "./store/store"
import App from "./App"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { CssBaseline } from "@mui/material"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <CssBaseline />
    </Provider>
  </StrictMode>
)
