import classes from './TodoItem.module.css';
import editIcon from '../../../assets/lapiz.svg';
import deleteIcon from '../../../assets/basura.svg';

const TodoItem = props => {


    
    return (
        <div className={classes.card}>
            <div className={classes.title}>
                <div className={classes.category}></div>Titulo
            </div>
            <div className={classes.body}>
                <p>hjkdhkd dljlcjfjlcmc fjclkfclcjd fcdfmjñdfkmñ </p>
            </div>
            <div className={classes.actions}>
                <div className={classes.action}>
                    <img src={editIcon} />
                </div>
                <div className={classes.action}>
                    <img src={deleteIcon} />
                </div>
            </div>
        </div>
    );

}

export default TodoItem;