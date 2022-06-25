import axios from "axios"
import {
  loadListAction,
  setStatusAction,
} from "../actionCreators/listActionCreator"
import randomColor from "randomcolor"

export const getList = () => (dispatch, getState) => {
  dispatch(setStatusAction("loading"))

  axios
    .get("https://dummyjson.com/users")
    .then((res) => {
      dispatch(setStatusAction("idle"))

      const list = res.data.users.map((person) => ({
        name: person.firstName + " " + person.lastName,
        id: person.id,
        bgcolor: randomColor(),
        starred: false,
      }))
      dispatch(loadListAction(list))
    })
    .catch((error) => {
      console.log(error)
      dispatch(setStatusAction("error"))
    })
}
