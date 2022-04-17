import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.css'

const TodoList = props => {
    return (
        <div className={classes.todoList}>
            <div className={classes.todoList__layout}>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    );
}

export default TodoList;