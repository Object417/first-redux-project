import {
  Box,
  Container,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { removePersonAction } from "../store/arrayReducer"
import ArrDataForm from "./ArrDataForm"

const ArrData = () => {
  /* Получаем данные
     В функцию попадает глобальный state stor'а,
     из которого мы достаём конкретно то, что нам нужно
  */
  const myArr = useSelector((state) => state.arr.arrVal)
  const dispatch = useDispatch()

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
            <Typography variant="body1">Array is empty</Typography>
          )}
        </Box>

        <Divider sx={{ my: 2 }} />

        <ArrDataForm />
      </Container>
    </Box>
  )
}

export default ArrData
