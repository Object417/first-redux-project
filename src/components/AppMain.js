import { Container, Box } from "@mui/material"
import AddCustomValue from "./AddCustomValue"
import IncrementDecrement from "./IncrementDecrement"

const AppMain = () => {
  console.info("APP MAIN RENDER")

  return (
    <Box component="main">
      <Container>
        <IncrementDecrement />
        <AddCustomValue />
      </Container>
    </Box>
  )
}

export default AppMain
