import { Fragment, useContext, useState } from "react";
import classes from './TodoForm.module.css';
import TodosContext from "../../../store/todos-context";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from 'next/router';
import { CompactPicker } from "react-color";
import { ChromePicker } from "react-color";

const TodoForm = () => {
    const todosCtx = useContext(TodosContext);
    
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState(todosCtx.currentItem?.title ?? '');
    const [enteredDescription, setEnteredDescription] = useState(todosCtx.currentItem?.description ?? '');
    const [enteredDate, setEnteredDate] = useState(todosCtx.currentItem?.date ?? '');
    const [enteredColor, setEnteredColor] = useState(todosCtx.currentItem?.color ?? '');
    const modalTitle = todosCtx.isCreate ? 'Add new Task' : 'Edit Task';
    const modalBtnTxt = todosCtx.isCreate ? 'Add' : 'Update';
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

    const colorInputChangeHandler = (color) => {
        const reformatedColor = `${color.rgb.r}, ${color.rgb.b}, ${color.rgb.g}`;
        setEnteredColor(reformatedColor);
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
            color: enteredColor,
            date: enteredDate,
        };

        todosCtx.addTodo(newTodo);
    }

    const updateNewTask = () => {

        const updatedItem = {
            id: todosCtx.currentItem.id,
            title: enteredTitle,
            description: enteredDescription,
            color: '#60bf97',
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
    }

    return (
        <Fragment>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ marginBottom: '1rem' }}>
                <IconButton aria-label="edit" size="small" onClick={backButtonHandler}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600, color: '#313136' }}>
                    {modalTitle}
                </Typography>
            </Grid>
            <form className={classes.form} onSubmit={formSubmissionHandler}>
                <Grid container spacing={4}>
                    <Grid item xs={12} >
                        <div className={classes.input_group}>
                            <label>Title:</label>
                            <input type="text" id="form_title" value={enteredTitle} onChange={titleInputChangeHandler} />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.input_group}>
                            <label>descripción:</label>
                            <textarea type="text" id="form_description" value={enteredDescription} onChange={descriptionInputChangeHandler} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className={classes.input_group}>
                            <label>Date:</label>
                            <input type="date" id="form_date" value={enteredDate} onChange={dateInputChangeHandler} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <label>Pick a color</label>
                        <button type="button" className={classes.colorPickerBtn} onClick={() => setShowColorPicker(isShown => !isShown)}>
                            <div className={classes.colorPickerBtn_preview} style={{background: `rgba(${enteredColor ? enteredColor : '90,78,299'},0.8)`}}></div>
                            {showColorPicker? 'close color picker':'Selected Color'}
                        </button>
                        {
                            showColorPicker && (
                                <ChromePicker 
                                    color={`rgb(${enteredColor})`}
                                    onChange={colorInputChangeHandler}/>
                                )
                        }
                        
                    </Grid>

                </Grid>
                <button id="form_button" className={classes.button}>
                    {modalBtnTxt}
                </button>
            </form>
        </Fragment>
    );
}

export default TodoForm;