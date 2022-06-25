import { Box, Button, TextField, Tooltip, Typography } from "@mui/material"
import randomColor from "randomcolor"
import React, { useState } from "react"

const PeopleListControls = ({
  addPersonAction,
  removePersonAction,
  people,
  dispatch,
  getList,
  status,
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
        sx={{ mr: 1, flexGrow: 1 }}
      />
      <Tooltip
        title={
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption">
              Enter &mdash; to add new person <br />
              Ctrl+Backspace &mdash; to remove the last one
            </Typography>
          </Box>
        }
        arrow
      >
        <Button type="submit" variant="contained" sx={{ mr: 1 }}>
          Add person
        </Button>
      </Tooltip>
      <Tooltip title="This action will overwrite the current list" arrow>
        <Button
          type="button"
          variant="contained"
          onClick={() => dispatch(getList())}
          color={status === "error" ? "error" : "primary"}
          disabled={status === "loading" && true}
        >
          {status === "error" ? "Error" : "Load people"}
        </Button>
      </Tooltip>
    </Box>
  )
}

export default PeopleListControls
