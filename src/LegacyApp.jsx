import React from "react"
import AppHeader from "./components/AppHeader"
import PeopleList from "./components/PeopleList"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { Box } from "@mui/material"
import PeopleListControls from "./components/PeopleListControls"
import {
  addPersonAction,
  removePersonAction,
  starPersonAction,
} from "./legacy-redux/actionCreators/listActionCreator"
import { getList } from "./legacy-redux/asyncThunks/getList"

const LegacyApp = () => {
  const people = useSelector((state) => state.list.list)
  const status = useSelector((state) => state.list.status)
  const dispatch = useDispatch()

  console.log("LegacyApp RENDER")

  return (
    <Box
      className="legacyApp"
      sx={{
        minHeight: "30rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        pb: 4,
      }}
    >
      <AppHeader subheader="Legacy Redux" />
      <PeopleList
        people={people}
        removePersonAction={removePersonAction}
        starPersonAction={starPersonAction}
        dispatch={dispatch}
        subheader="All people"
      />
      <PeopleList
        people={people.filter((person) => person.starred)}
        removePersonAction={removePersonAction}
        starPersonAction={starPersonAction}
        dispatch={dispatch}
        subheader="Favorite people"
      />
      <PeopleListControls
        addPersonAction={addPersonAction}
        removePersonAction={removePersonAction}
        people={people}
        dispatch={dispatch}
        getList={getList}
        status={status}
      />
    </Box>
  )
}

export default LegacyApp
