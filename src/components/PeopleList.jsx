import { Star, StarBorder, Delete, DeleteOutline } from "@mui/icons-material"
import {
  Alert,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListSubheader,
} from "@mui/material"
import React from "react"

const PeopleList = ({
  people,
  subheader,
  removePersonAction,
  starPersonAction,
  dispatch,
}) => {
  const itemOnDelete = (person) => {
    dispatch(removePersonAction(person.id))
  }
  const itemOnStar = (person) => {
    dispatch(starPersonAction(person.id))
  }

  console.log(subheader + " RENDER")

  return (
    <List
      dense={true}
      sx={{
        overflow: "auto",
        maxHeight: "25rem",
        py: 0,
        flexGrow: 1,
      }}
    >
      <ListSubheader
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, .12)",
        }}
      >
        {subheader}
      </ListSubheader>
      {people.length ? (
        people.map((person, index) => (
          <ListItem
            key={person.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => itemOnDelete(person)}>
                <DeleteOutline />
              </IconButton>
            }
          >
            <ListItemIcon>
              <IconButton onClick={() => itemOnStar(person)}>
                {person.starred ? <Star color="primary" /> : <StarBorder />}
              </IconButton>
            </ListItemIcon>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: person.bgcolor }}>
                {person.name.length === 0
                  ? null
                  : person.name.length === 1
                  ? person.name[0]
                  : person.name.indexOf(" ") > -1
                  ? person.name[0] + person.name[person.name.indexOf(" ") + 1]
                  : person.name[0] + person.name[1]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={person.name} secondary={person.id} />
          </ListItem>
        ))
      ) : (
        <ListItem>
          <Alert sx={{ width: "100%" }} severity="error">
            There're no people in the list
          </Alert>
        </ListItem>
      )}
    </List>
  )
}

export default PeopleList
