import { configureStore } from "@reduxjs/toolkit"
import listSlice from "./slices/listSlice"

const modernStore = configureStore({
  reducer: {
    list: listSlice,
  },
})

export default modernStore
