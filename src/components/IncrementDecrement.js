import { Typography, Button, Box } from "@mui/material"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { increment, decrement } from "../store/counterSlice"

const IncrementDecrement = () => {
  console.log("BUTTONS RENDER")

  const count = useSelector((state) => state.counter.value),
    dispatch = useDispatch()

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        sx={{ width: "100%", textAlign: "center" }}
      >
        {count}
      </Typography>
      <Button
        variant="contained"
        onClick={() => dispatch(increment())}
      >
        increment
      </Button>
      &nbsp;
      <Button
        variant="contained"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </Button>
    </Box>
  )
}

export default IncrementDecrement
