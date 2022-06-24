const loadDataMyFunc = (url, dispatch, actionCreator) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => dispatch(actionCreator(data)))
}

export { loadDataMyFunc }
