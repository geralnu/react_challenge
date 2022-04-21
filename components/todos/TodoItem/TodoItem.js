import classes from './TodoItem.module.css';
import TodosContext from '../../../store/todos-context';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import AlertDialog from '../../ui/AlertDialog';

const TodoItem = ({ item }) => {
    const todosCtx = useContext(TodosContext);

    const deleteItem = (id) => {
        todosCtx.removeTodo(id);
        todosCtx.setAlertOpen(false);
    }

    const updateItem = (item) => {
        todosCtx.setIsCreate(false);
        todosCtx.setFormIsShown(true);
        todosCtx.setCurrentItem(item);
    }

    const deleteItemHandler = (id) => {
        todosCtx.setAlertOpen(true);
    }

    const closeAlertHandler = () => {
        todosCtx.setAlertOpen(false);
    }

    return (
        <Card className={classes.card}>
            <Grid container direction="column" justifyContent="space-between" alignItems="flex-start">
                <CardContent className={classes.card_head}>
                    <Typography variant="h6" sx={{fontWeight: '500', fontFamily: 'Open Sans'}} className={classes.card_title}>
                        <div className={classes.card_category} style={{ backgroundColor: `rgb(${item.color})` }}></div>
                        {item.title}
                    </Typography>
                    <div className={classes.card_body}>
                        <p>{item.description} </p>
                    </div>

                </CardContent>
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                    <IconButton aria-label="edit" size="small" onClick={() => updateItem(item)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" size="small" onClick={() => deleteItemHandler(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <AlertDialog
                open={todosCtx.isAlertOpen}
                closeHandler={closeAlertHandler}
                actionHandler={() => deleteItem(item.id)}
                title={'Delete Task'}
                message={'Are you sure you want to delete this task?'}
            />
        </Card>

    );

}

export default TodoItem;