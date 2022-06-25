import { Box, Button, TextField } from "@mui/material"
import randomColor from "randomcolor"
import React, { useState } from "react"

const PeopleListControls = ({
  addPersonAction,
  removePersonAction,
  people,
  dispatch,
}) => {
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
      starred: false,
    }

    dispatch(addPersonAction(person))

    setFieldValue("")
  }
  const formOnKeyUp = (e) => {
    if (e.key === "Backspace" && e.ctrlKey) {
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
      <Button type="submit" variant="contained" sx={{ mr: 1 }}>
        Add person
      </Button>
      <Button type="button" variant="contained">
        Load people
      </Button>
    </Box>
  )
}

export default PeopleListControls
