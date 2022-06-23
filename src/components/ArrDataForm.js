import { Button, FormControl, FormLabel, TextField, Box } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPersonAction, removePersonAction } from "../store/arrayReducer"

const ArrDataForm = () => {
  const [fieldVal, setFieldVal] = useState("")
  const dispatch = useDispatch()

  const fieldOnChange = (e) => {
    setFieldVal(e.target.value)
  }

  const addPerson = (e) => {
    const person = { name: e.target.form.textField.value }
    // dispatch({ type: "ADD_PERSON", payload: person })
    dispatch(addPersonAction(person))

    setFieldVal("")
  }

  const removePerson = (e) => {
    const person = { name: e.target.form.textField.value }
    // dispatch({ type: "REMOVE_PERSON", payload: person })
    dispatch(removePersonAction(person))

    setFieldVal("")
  }

  return (
    <FormControl
      component="form"
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      <FormLabel>Control people</FormLabel>

      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <TextField
          name="textField"
          variant="standard"
          label="Person's name"
          sx={{ mr: 1 }}
          value={fieldVal}
          onChange={fieldOnChange}
        />
        <Button type="submit" variant="contained" sx={{ mr: 1 }} onClick={addPerson}>
          Add person
        </Button>
        <Button type="button" variant="contained" onClick={removePerson}>
          Remove person
        </Button>
      </Box>
    </FormControl>
  )
}

export default ArrDataForm
