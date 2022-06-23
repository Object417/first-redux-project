const defaultState = {
  value: 0,
}

// reducer is just a function
const valueReducer = (state = defaultState, action) => {
  // state - is out state (store)
  // action is just an object: {type: "ACTION_TYPE", payload: "some data" || null}

  switch (action.type) {
    case "increment":
      return { ...state, value: state.value + 1 }
    case "decrement":
      return { ...state, value: state.value - 1 }
    case "changeValue":
      return { ...state, value: state.value + action.payload }
    default:
      return state
  }
}

export default valueReducer
