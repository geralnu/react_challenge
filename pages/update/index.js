import { Container } from "@mui/material";
import { useContext, useEffect } from "react";
import TodoForm from "../../components/Todos/TodoForm/TodoForm";
import TodosContext from "../../store/todos-context";

export default function UpdateTask() {
    const todosCtx = useContext(TodosContext);

    useEffect(()=> {
        todosCtx.setIsCreate(false);
    },[])

    return(
        <Container sx={{margin: '2rem auto'}}>
            <TodoForm/>
        </Container>
    );
}