import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { loadPersonsAction, removePersonAction } from "../store/arrayReducer"
import { loadPersons } from "../store/asyncActions/loadPersons"
import ArrDataForm from "./ArrDataForm"
import { loadDataMyFunc } from "../store/asyncActions/loadDataMyFunc"

const ArrData = () => {
  /* Получаем данные
     В функцию попадает глобальный state stor'а,
     из которого мы достаём конкретно то, что нам нужно
  */
  const myArr = useSelector((state) => state.arr.arrVal)
  const dispatch = useDispatch()

  /* const loadUsersMyFunc = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(loadPersonsAction(data)))
  } */

  return (
    <Box>
      <Container>
        <Box>
          <Typography variant="h4">My Array</Typography>

          {myArr.length ? (
            <List dense={true}>
              {myArr.map((person, index) => (
                <ListItem
                  key={"person" + index}
                  onClick={() => dispatch(removePersonAction(person))}
                >
                  <ListItemText primary={person.name} />
                </ListItem>
              ))}
            </List>
          ) : (
            <>
              <Typography variant="body1">Array is empty</Typography>
              <Button onClick={() => dispatch(loadPersons())}>
                Load users from the server
              </Button>
              <Button
                onClick={() =>
                  loadDataMyFunc(
                    "https://jsonplaceholder.typicode.com/users",
                    dispatch,
                    loadPersonsAction
                  )
                }
              >
                My Own Load Users Function
              </Button>
            </>
          )}
        </Box>

        <Divider sx={{ my: 2 }} />

        <ArrDataForm />
      </Container>
    </Box>
  )
}

export default ArrData
