
import AddIcon from '@mui/icons-material/Add';
import { Button, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import TodosContext from "../../store/todos-context";
import TodoForm from "../Todos/TodoForm/TodoForm";
import TodoList from "../Todos/TodoList/TodoList";
import Modal from "../UI/Modal";

const Main = () => {
  const todosCtx = useContext(TodosContext);

  const showModalForm = () => {
    todosCtx.setIsCreate(true);
    todosCtx.setFormIsShown(true);
  }

  const hideModalForm = () => {
    todosCtx.setFormIsShown(false);
    todosCtx.setCurrentItem({});
  }

  return (
    <Container>
      <Grid container>
      <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{
                                fontWeight: 800,
                                color: 'darkgray'
                            }}
                        >
                            My tasks
                        </Typography>
      </Grid>
      <Grid container direction="column" justifyContent="center" alignItems="flex-end">
        <Button variant="contained" startIcon={<AddIcon />} 
        className='addButton'
        onClick={() => showModalForm()}>Add Task</Button>
      </Grid>

      {todosCtx.formIsShown &&
        <Modal onClose={() => hideModalForm()}>
          <TodoForm />
        </Modal>}
      <TodoList />
    </Container>
  );
}

export default Main;