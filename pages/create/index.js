import { Container } from "@mui/material";
import { useContext, useEffect } from "react";
import TodoForm from "../../components/Todos/TodoForm/TodoForm";
import TodosContext from "../../store/todos-context";


 function CreateTask() {

    return(
        <Container sx={{margin: '2rem 0'}}>
            <TodoForm/>
        </Container>
    );
}

export default CreateTask;