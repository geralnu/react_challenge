import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import TodosContext from '../../../store/todos-context';
import AlertDialog from '../../ui/AlertDialog';
import classes from './TodoItem.module.css';

const TodoItem = ({ item }) => {
    const todosCtx = useContext(TodosContext);
    const router = useRouter();

    const deleteItem = () => {
        todosCtx.removeTodo(todosCtx.currentItem.id);
        todosCtx.setAlertOpen(false);
        todosCtx.setCurrentItem({});
    }

    const updateItem = (item) => {
        router.push('/update');
        todosCtx.setIsCreate(false);
        todosCtx.setCurrentItem(item);
    }

    const deleteItemHandler = (item) => {
        todosCtx.setCurrentItem(item);
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
                    <IconButton aria-label="delete" size="small" onClick={() => deleteItemHandler(item)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <AlertDialog
                open={todosCtx.isAlertOpen}
                closeHandler={closeAlertHandler}
                actionHandler={deleteItem}
                title={'Delete Task'}
                message={'Are you sure you want to delete this task?'}
            />
        </Card>

    );

}

export default TodoItem;