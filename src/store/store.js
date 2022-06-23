import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import valueReducer from "./valueReducer"
import arrayReducer from "./arrayReducer"
import { composeWithDevTools } from "@redux-devtools/extension"

/*
  store он же state - хранилище данных
  reducer - ф-я, которая непосредственно работает с данными
  dispatch - ф-я, которая принимает объект action и передаёт его в reducer
  actions - действия, т.е. то, как мы хотим данные изменить
*/

/*
// Modern example 
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
 */

// Legacy code below

const rootReducer = combineReducers({
  value: valueReducer,
  arr: arrayReducer,
})

// store is just an object
const store = createStore(rootReducer, composeWithDevTools())

export default store
