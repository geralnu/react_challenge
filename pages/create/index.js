import { Container } from "@mui/material";
import TodoForm from "../../components/Todos/TodoForm/TodoForm";


 function CreateTask() {

    return(
        <Container sx={{margin: '2rem auto'}}>
            <TodoForm/>
        </Container>
    );
}

export default CreateTask;