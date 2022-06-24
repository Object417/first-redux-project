import { loadPersonsAction } from "../arrayReducer"

// Not very clear why do we need this
const loadPersons = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => dispatch(loadPersonsAction(res)))
  }
}

export { loadPersons }
