import { Box, Button, TextField } from "@mui/material"
import randomColor from "randomcolor"
import React, { useState } from "react"
import { useDispatch } from "react-redux"

const PeopleListControls = ({
  addPersonAction,
  removePersonAction,
  people,
}) => {
  const dispatch = useDispatch()

  const [fieldValue, setFieldValue] = useState("")
  const fieldOnChange = (e) => {
    setFieldValue(e.target.value)
  }
  const formOnSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const person = {
      name: e.target.nameField.value,
      id: Date.now(),
      bgcolor: randomColor(),
    }
    dispatch(addPersonAction(person))

    setFieldValue("")
  }
  const formOnKeyUp = (e) => {
    if (e.key === "Backspace") {
      if (people.length === 0) {
        return
      }
      const lastPerson = people[people.length - 1]
      dispatch(removePersonAction(lastPerson.id))
    }
  }

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "baseline",
        px: 4,
      }}
      onSubmit={formOnSubmit}
      onKeyUp={formOnKeyUp}
    >
      <TextField
        name="nameField"
        label="Person's name"
        value={fieldValue}
        onChange={fieldOnChange}
        variant="standard"
        autoFocus
        sx={{ mr: 1, flexGrow: 1 }}
      />
      <Button type="submit" variant="contained">
        Add person
      </Button>
    </Box>
  )
}

export default PeopleListControls
