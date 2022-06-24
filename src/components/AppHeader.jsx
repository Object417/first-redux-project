import React from "react"
import { AppBar, Toolbar, Typography } from "@mui/material"

const AppHeader = ({ subheader }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "transparent", mb: 2 }}>
      <Toolbar>
        <Typography component="h2" variant="h4" sx={{ color: "#764abc" }}>
          {subheader}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
