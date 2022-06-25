import React from "react"
import AppHeader from "./components/AppHeader"
import { Box, Button } from "@mui/material"
import PeopleList from "./components/PeopleList"
import PeopleListControls from "./components/PeopleListControls"
import { useDispatch, useSelector } from "react-redux"
import {
  addPerson,
  removePerson,
  starPerson,
} from "./modern-redux/slices/listSlice"
import { getList } from "./modern-redux/asyncThunks/getList"

const ModernApp = () => {
  const people = useSelector((state) => state.list.list)
  const status = useSelector((state) => state.list.status)
  const dispatch = useDispatch()

  console.log("ModernApp RENDER")

  return (
    <Box
      className="modernApp"
      sx={{
        minHeight: "30rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        pb: 4,
      }}
    >
      <AppHeader subheader="Modern Redux" />
      <PeopleList
        people={people}
        removePersonAction={removePerson}
        starPersonAction={starPerson}
        dispatch={dispatch}
        subheader="All people"
      />
      <PeopleList
        people={people.filter((person) => person.starred)}
        removePersonAction={removePerson}
        starPersonAction={starPerson}
        dispatch={dispatch}
        subheader="Favorite people"
      />
      <PeopleListControls
        addPersonAction={addPerson}
        removePersonAction={removePerson}
        dispatch={dispatch}
        people={people}
        getList={getList}
        status={status}
      />
    </Box>
  )
}

export default ModernApp
