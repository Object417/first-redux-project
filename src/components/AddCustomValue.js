import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material"
import { useState } from "react"
import { changeValue } from "../store/counterSlice"
import { useDispatch } from "react-redux/es/exports"

const AddCustomValue = () => {
  console.log("FORM RENDER")

  const dispatch = useDispatch()

  const [fieldProps, setFieldProps] = useState({
    value: 0,
    error: false,
    helperText: "",
  })

  const fieldOnChange = (e) => {
    if (/^-{0,1}\d+$/.test(e.target.value)) {
      setFieldProps({
        value: e.target.value,
        error: false,
        helperText: "",
      })
      return
    }

    setFieldProps({
      value: e.target.value,
      error: true,
      helperText: "Please, enter any integer",
    })
  }

  const fieldSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (/^-{0,1}\d+$/.test(e.target.numberInput.value)) {
      setFieldProps({
        value: e.target.numberInput.value,
        error: false,
        helperText: "",
      })

      dispatch({ type: "changeValue", payload: +e.target.numberInput.value })

      return
    }

    setFieldProps({
      value: fieldProps.value,
      error: true,
      helperText: "Please, enter any integer",
    })
  }

  return (
    <Box>
      <FormControl
        component="form"
        sx={{
          width: "100%",
          mx: "auto",
          mt: 2,
          textAlign: "center",
        }}
        onSubmit={fieldSubmit}
      >
        <FormLabel>Add custom value</FormLabel>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <TextField
            label="Enter value"
            type="text"
            name="numberInput"
            variant="standard"
            fullWidth
            sx={{ width: "auto", maxWidth: "50%", mr: 1 }}
            onChange={fieldOnChange}
            value={fieldProps.value}
            error={fieldProps.error}
            helperText={fieldProps.helperText}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "auto", maxWidth: "50%" }}
          >
            OK
          </Button>
        </Box>
      </FormControl>
    </Box>
  )
}

export default AddCustomValue
