import { Fragment } from "react";
import classes from './TodoForm.module.css';
import addIcon from '../../../assets/mas.svg';

const TodoForm = props => {
    return (
        <Fragment>
            <form className={classes.form}>
                <div>
                    <label>Nombre:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Categoría:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>descripción:</label>
                    <textarea type="text"/>
                </div>
                <button className={classes.button}> 
                    Agregar
                    <img src={addIcon}/>
                </button>
            </form>
        </Fragment>
    );
}

export default TodoForm;