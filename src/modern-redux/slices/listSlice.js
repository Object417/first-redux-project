import { createSlice } from "@reduxjs/toolkit"

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addPerson: (state, { payload }) => {
      return [...state, payload]
    },
    removePerson: (state, { payload }) => {
      return state.filter((person) => person.id !== payload)
    },
    starPerson: (state, { payload }) => {
      return state.map((person) =>
        person.id === payload ? { ...person, starred: !person.starred } : person
      )
    },
  },
})

export const { addPerson, removePerson, starPerson } = listSlice.actions
export default listSlice.reducer
