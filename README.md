# **React Redux for Dummies**

To run the project you need to have Node.js and npm installed.

Then just open a console in the project folder and run:

```
npm i
```

As soon as all packages are installed, you can start the project:

```
npm start
```

If something went wrong, read the console messages before going to google.

---

## **Three main things in Redux**

- **`store`** is where the global state of the whole app located.
- **`reducer`** is a pure javascript function. It takes 2 parameters: `state` and `action`,
  and returns a new `state` based on a provided action (`state` in Redux is immutable).

  `state` is the current state. It's not the store, it's not the state of the whole app,
  it's just a state with which this reducer can work (like a little slice of the global state).

- **`action`** is just a plain javascript object with 2 properties:
  `type` (required) and `payload` (optional).
  `type` describes what is need to be done and `payload` provides some additional data to the `reducer`.

## **Two main hooks**

To read and change data from the components you need to use this 2 hooks:

- **`useSelector()`** - inside it you have to pass a function that takes `state` as an arguments
  and returns the little slice of the state that you want
- **`useDispatch()`** will return a `dispatch` function which connects the `reducer` and the component.
  To change the `state`, you need to pass an `action` object into the `dispatch` function.
  If you've passed a valid action, `reducer` will find a function for the provided `action` type
  and execute it. The state change will cause the component to re-render.

## **Snippets**

### **Create a store**

```js
import { combineReducers, createStore } from "redux"
import reducer1 from "./reducers/reducer1"
import reducer2 from "./reducers/reducer2"
import reducer3 from "./reducers/reducer3"

const rootReducer = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2,
  reducer3: reducer3,
  // etc.
})
const store = createStore(rootReducer)

export default store
```

### **Create a reducer**

```js
const initialState = { value: 0 }

function reducer1(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 }
    case "DECREMENT":
      return { ...state, value: state.value - 1 }
    case "ADD_CUSTOM_VALUE":
      return { ...state, value: state.value + action.payload }
    default:
      return state
  }
}

export default reducer1
```

### **Get value from the store in a component**

```js
import { useSelector } from "react-redux"

function myComponent(props) {
  const value = useSelector((state) => state.reducer1.value)

  return <div>{value}</div>
}

export default myComponent
```

### **Change the value from a component**

```js
import { useDispatch } from "react-redux"

function myComponent(props) {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch({type: "INCREMENT"})}>
      Increment
    </button>
    <button onClick={() => dispatch({type: "DECREMENT"})}>
      Decrement
    </button>
    <button onClick={() => dispatch({type: "ADD_CUSTOM_VALUE", payload: 5})}>
      Add 5
    </button>
    )
}

export default myComponent
```

### **Action creators**

It's a simple function that reduces coding and typos.

```js
export function increment() {
  return { type: "INCREMENT" }
}
export function decrement() {
  return { type: "DECREMENT" }
}
export function addCustomValue(payload) {
  return { type: "ADD_CUSTOM_VALUE", payload }
}

// in myComponent.js
import { useDispatch } from "react-redux"
import {
  increment,
  decrement,
  addCustomValue,
} from "../store/actionCreators/reducer1ActionCreators"

function myComponent(props) {
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addCustomValue(5))}>Add 5</button>
    </>
  )
}

export default myComponent
```

### **Action types as constants**

It's also a good practice that prevents typos.

```js
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_CUSTOM_VALUE = "ADD_CUSTOM_VALUE"

// in reducer1.js
import {
  INCREMENT,
  DECREMENT,
  ADD_CUSTOM_VALUE,
} from "./actionTypes/reducer1Actions"

function reducer1(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 }
    case DECREMENT:
      return { ...state, value: state.value - 1 }
    case ADD_CUSTOM_VALUE:
      return { ...state, value: state.value + action.payload }
    default:
      return state
  }
}

export default reducer1
```

### **rootReducer as a separated file**

```js
import { combineReducers } from "redux"
import reducer1 from "./reducer1"
import reducer2 from "./reducer2"
import reducer3 from "./reducer3"

const rootReducer = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2,
  reducer3: reducer3,
  // etc.
})

export default rootReducer
```

## **Redux Thunk and async actions**

Redux Thunk is a middleware. You can create our own async functions
by passing them the `dispatch` as an argument. Redux Thunk will do it for you
so all the logic for working with the state will be outside the components.

First of all you need to add `redux-thunk` as a middleware in your `store.js`.

```js
import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers/index"

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
```

Then you can start to create thunks. By the way **thunk**
_is a function that wraps an expression to delay its evaluation_.

```js
import {
  loadingStarted,
  loadingSuccessful,
  loadingFailed,
} from "../actionCreators/usersACtionCreators"

export function loadUsers() {
  return function (dispatch, getState) {
    dispatch(loadingStarted())

    try {
      fetch("protocol.domain:port/users")
        .then((res) => res.json())
        .then((json) => dispatch(loadingSuccessful(json)))
    } catch (error) {
      dispatch(loadingFailed(error.message))
    }
  }
}
```

If we take into account the fact that we can read the state inside a thunk function
by calling `getState()`, then we can use thunks not only for delayed/async actions
but and for conditional as well.

Why do we need this? Because in the official documentation
said that _Redux reducers must not contain side effects, but real applications require logic that has side effects_. So we can use Redux Thunk to work with this _side effects_.

```js
import { increment } from "../actionCreators/reducer1ActionCreators"

export function addIfOdd() {
  return function (dispatch, getState) {
    const state = getState()
    state % 2 && dispatch(increment())
  }
}
```

Or for instance, a thunk function can always return 42
(The Answer to the Ultimate Question of Life, The Universe, and Everything).

```js
export function getTheAnswer() {
  return function (dispatch, getState) {
    setTimeout(() => {
      console.log(42)
    }, 1000)
  }
}
```

---

**RTK is on the way!**
