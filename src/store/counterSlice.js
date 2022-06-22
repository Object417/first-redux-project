import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      // There're 2 ways to change th state:
      // 1. Mutate it. Actually, it won't be mutated, it just looks like
      state.value += 1
    },
    decrement: (state) => {
      // 2. Return a new state
      return { ...state, value: state.value - 1 }
    },
    changeValue: (state, action) => {
      // state.value += action.payload
      return { ...state, value: state.value + action.payload }
    },
  },
})

const { increment, decrement, changeValue } = counterSlice.actions

export { counterSlice, increment, decrement, changeValue }
export default counterSlice.reducer
