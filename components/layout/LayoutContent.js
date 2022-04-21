
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TodoList from "../Todos/TodoList/TodoList";
import {useContext}  from "react";
import TodosContext from "../../store/todos-context";
import { useRouter } from 'next/router';

const LayoutContent = () => {
  const todosCtx = useContext(TodosContext);
  const router = useRouter();

  const navigateToForm = () => {
    router.push('/create');
    todosCtx.setIsCreate(true);
  }

  return (
    <Container>
      <Grid container direction="column">
        <Typography noWrap component="div" sx={{ margin: '2rem 0 0 0', color: '#B3BCC4', fontSize: '14px'}}>
          Manage your tasks!
        </Typography>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{
            fontWeight: 600,
            color: '#313136',
            margin: '0 0 0.313rem',
            fontFamily: 'Open Sans'
          }}
        >
          My Tasks
        </Typography>
      </Grid>
      <Grid container direction="column" justifyContent="center" alignItems="flex-end">
        <Button variant="contained" startIcon={<AddIcon />}
          className='addButton'
          onClick={() => navigateToForm()}>Add Task</Button>
      </Grid>
      <TodoList />
    </Container> 
  );
}

export default LayoutContent;