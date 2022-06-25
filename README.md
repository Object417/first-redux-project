# React Redux for Dummies

There're 4 main things in **Redux**:

- `store` &mdash; the state. Like if we were using `useState` from **React**,
  but usually we create `store` for the whole app
- `reducer` &mdash; is a simple javascript function which works with the state.
  The function takes arguments `state` (current state) and `action`.
  `state` could be any type of data (string, number, array) but usually it's an object.
- `action` is just an object. Any action object must have `type` key to describe
  what the action has to be done?
  If requires, some data which we need to provide goes into `payload` key
- `dispatch` (dispatcher) &mdash; function which takes `action` object and provides it to the reducer.
  You can get dispatcher in any component of the app by simply using hook `useDispatch()`
