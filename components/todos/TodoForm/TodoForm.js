import { Fragment, useContext, useState } from "react";
import classes from './TodoForm.module.css';
import TodosContext from "../../../store/todos-context";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import  ArrowBackIcon  from "@mui/icons-material/ArrowBack";
import { useRouter } from 'next/router';

const TodoForm = () => {
    const todosCtx = useContext(TodosContext);
    const [enteredTitle, setEnteredTitle] = useState(todosCtx.currentItem?.title ?? '');
    const [enteredDescription, setEnteredDescription] = useState(todosCtx.currentItem?.description ?? '');
    const [enteredDate, setEnteredDate] = useState(todosCtx.currentItem?.date ?? '');
    const modalTitle = todosCtx.isCreate ? 'Add new Task' : 'Edit Task';
    const router = useRouter();
    
    const titleInputChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const dateInputChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const descriptionInputChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const clearForm = () => {
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredDescription('');
        todosCtx.setCurrentItem({});
    }

    const backButtonHandler = () => {        
        router.back();
        todosCtx.setCurrentItem({});
    }

    const createNewTask = () => {
        const newTodo = {
            id: new Date().getTime(),
            title: enteredTitle,
            description: enteredDescription,
            color: '96, 191, 151',
            date: enteredDate,
        };

        todosCtx.addTodo(newTodo);
    }

    const updateNewTask = () => {

        const updatedItem = {
            id: todosCtx.currentItem.id,
            title: enteredTitle,
            description: enteredDescription,
            color: '96, 191, 151',
            date: enteredDate,
        }
        todosCtx.setCurrentItem(updatedItem);
        todosCtx.updateTodo(updatedItem.id, updatedItem);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        (todosCtx.isCreate) ? createNewTask() : updateNewTask();
        clearForm();
        backButtonHandler();
        // todosCtx.setFormIsShown(false);
    }

    return (
        <Fragment>
            <Grid container >
                <IconButton aria-label="edit" size="small" onClick={backButtonHandler}>
                    <ArrowBackIcon/>
                </IconButton>
            </Grid> 
            <Typography variant="h5" noWrap component="div" sx={{ fontWeight: 600, color: '#313136', marginBottom: '1rem' }}>
                {modalTitle}
            </Typography>
            <form className={classes.form} onSubmit={formSubmissionHandler}>
                <div className={classes.input_group}>

                    <label>Title:</label>
                    <input type="text" value={enteredTitle} onChange={titleInputChangeHandler} />
                </div>
                <div className={classes.input_group}>
                    <label>Date:</label>
                    <input type="date" value={enteredDate} onChange={dateInputChangeHandler} />
                </div>
                <div className={classes.input_group}>
                    <label>descripción:</label>
                    <textarea type="text" value={enteredDescription} onChange={descriptionInputChangeHandler} />
                </div>
                <button className={classes.button}>
                    Agregar
                </button>
            </form>
        </Fragment>
    );
}

export default TodoForm;