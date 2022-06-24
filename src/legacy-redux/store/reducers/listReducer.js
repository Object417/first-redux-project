import {
  ADD_PERSON,
  REMOVE_PERSON,
  STAR_PERSON,
} from "../actionTypes/listActionTypes"

const defaultState = []
const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.payload]
    case REMOVE_PERSON:
      return state.filter((person) => person.id !== action.payload)
    case STAR_PERSON:
      return state.map((person) =>
        person.id === action.payload
          ? { ...person, starred: !person.starred }
          : person
      )
    default:
      return state
  }
}

export default listReducer
