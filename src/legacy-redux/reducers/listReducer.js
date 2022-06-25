import {
  ADD_PERSON,
  LOAD_LIST,
  REMOVE_PERSON,
  SET_STATUS,
  STAR_PERSON,
} from "../actionTypes/listActionTypes"

const defaultState = {
  list: [],
  status: "idle",
}
const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return { ...state, list: [...state.list, action.payload] }
    case REMOVE_PERSON:
      return {
        ...state,
        list: state.list.filter((person) => person.id !== action.payload),
      }
    case STAR_PERSON:
      return {
        ...state,
        list: state.list.map((person) =>
          person.id === action.payload
            ? { ...person, starred: !person.starred }
            : person
        ),
      }
    case LOAD_LIST:
      return { ...state, list: action.payload }
    case SET_STATUS:
      return { ...state, status: action.payload }
    default:
      return state
  }
}

export default listReducer
