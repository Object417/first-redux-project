import { composeWithDevTools } from "@redux-devtools/extension/"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import listReducer from "./reducers/listReducer"

const rootReducer = combineReducers({
  list: listReducer,
})
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
