import { AppBar, Toolbar, Container, Box, Typography, Link, Tooltip } from "@mui/material"

const AppHeader = () => {
  console.info("APP HEADER RENDER")

  return (
    <AppBar position="static" sx={{ color: "#000", background: "transparent" }}>
      <Container>
        <Toolbar disableGutters>
          <Tooltip title="Link will be opened in a new tab" arrow>
            <Link href="https://redux.js.org/" target="_blank" rel="noreferrer noopener">
              <Box
                component="img"
                src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                alt="Redux"
                sx={{ maxWidth: "2.5rem", mr: 1 }}
              />
            </Link>
          </Tooltip>
          <Typography component="h1" variant="h4">
            React Redux
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppHeader
