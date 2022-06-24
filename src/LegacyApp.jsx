import React, { componentDidUpdate } from "react"
import AppHeader from "./components/AppHeader"
import PeopleList from "./components/PeopleList"
import { useSelector } from "react-redux/es/exports"
import { Box } from "@mui/material"
import PeopleListControls from "./components/PeopleListControls"
import {
  addPersonAction,
  removePersonAction,
  starPersonAction,
} from "./legacy-redux/store/actionCreators/listActionCreator"

const LegacyApp = () => {
  const people = useSelector((state) => state.list)

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
      <Box sx={{ flexGrow: 1 }}>
        <PeopleList
          people={people}
          removePersonAction={removePersonAction}
          starPersonAction={starPersonAction}
          subheader="All people"
        />
        <PeopleList
          people={people.filter((person) => person.starred)}
          removePersonAction={removePersonAction}
          starPersonAction={starPersonAction}
          subheader="Favorite people"
        />
      </Box>
      <PeopleListControls
        addPersonAction={addPersonAction}
        removePersonAction={removePersonAction}
        people={people}
      />
    </Box>
  )
}

export default LegacyApp
