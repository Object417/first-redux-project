const defaultState = {
  arrVal: [],
}

/* Зачем так делать? 
  По идее это должно предотвращать элементарные опечатки
  IDE не всегда подскажет, где в строке вы ошиблись,
  зато всегда скажет, если вы попытаетесь обратиться к переменной,
  которой не существует
*/
const ADD_PERSON = "ADD_PERSON"
const REMOVE_PERSON = "REMOVE_PERSON"

const arrayReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return { ...state, arrVal: [...state.arrVal, action.payload] }
    case REMOVE_PERSON:
      return {
        ...state,
        arrVal: state.arrVal.filter((person) => person.name !== action.payload.name),
      }
    default:
      return state
  }
}

/* Action Creators ещё больше упрощают жизнь */
const addPersonAction = (payload) => ({
  type: ADD_PERSON,
  payload: payload,
})
const removePersonAction = (payload) => ({
  type: REMOVE_PERSON,
  payload: payload,
})

export { addPersonAction, removePersonAction }
export default arrayReducer
