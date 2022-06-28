import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const getList = createAsyncThunk("list/getListAsync", (payload, thunkAPI) => {
  return axios.get("https://dummyjson.com/users").then((res) => res.data)

  /* try {
    return axios
      .get("https://dummyjson.com/users")
      .then((res) => thunkAPI.fulfillWithValue(res.data))
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  } */
})

export { getList }
