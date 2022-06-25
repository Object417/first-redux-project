import { createSlice } from "@reduxjs/toolkit"
import randomColor from "randomcolor"
import { getList } from "../asyncThunks/getList"

const listSlice = createSlice({
  name: "list",
  initialState: {
    status: "idle",
    list: [],
  },
  reducers: {
    addPerson: (state, { payload }) => {
      state.list = [...state.list, payload]
    },
    removePerson: (state, { payload }) => {
      state.list = state.list.filter((person) => person.id !== payload)
    },
    starPerson: (state, { payload }) => {
      state.list = state.list.map((person) =>
        person.id === payload ? { ...person, starred: !person.starred } : person
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(getList.fulfilled, (state, action) => {
        const list = action.payload.users.map((person) => ({
          name: person.firstName + " " + person.lastName,
          id: person.id,
          bgcolor: randomColor(),
          starred: false,
        }))

        state.list = list
        state.status = "idle"
      })
      .addCase(getList.rejected, (state, action) => {
        state.status = "error"
      })
  },
})

export const { addPerson, removePerson, starPerson } = listSlice.actions
export default listSlice.reducer
