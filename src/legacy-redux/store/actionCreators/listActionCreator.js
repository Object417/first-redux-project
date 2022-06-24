import {
  ADD_PERSON,
  REMOVE_PERSON,
  STAR_PERSON,
} from "../actionTypes/listActionTypes"

export const addPersonAction = (payload) => ({
  type: ADD_PERSON,
  payload,
})
export const removePersonAction = (payload) => ({
  type: REMOVE_PERSON,
  payload,
})
export const starPersonAction = (payload) => ({
  type: STAR_PERSON,
  payload,
})
