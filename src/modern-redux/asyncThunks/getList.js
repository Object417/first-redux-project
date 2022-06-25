import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const getList = createAsyncThunk("list/getListAsync", async () => {
  return (await axios.get("https://dummyjson.com/users")).data
})

export { getList }
