import {
  ADD_PERSON,
  LOAD_LIST,
  REMOVE_PERSON,
  SET_STATUS,
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
export const setStatusAction = (payload) => ({
  type: SET_STATUS,
  payload,
})
export const loadListAction = (payload) => ({
  type: LOAD_LIST,
  payload,
})
