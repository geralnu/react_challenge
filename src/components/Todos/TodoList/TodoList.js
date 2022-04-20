import { useContext } from 'react';
import TodosContext from '../../../store/todos-context';
import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.css'

const TodoList = props => {

    const todosCtx = useContext(TodosContext);
    const content = <p className='no-content'>No items added yet!. Maybe add one?</p>;

    const renderContent = () => {
        return todosCtx.items.map(todo => {
            return <TodoItem
                key={todo.id}
                id={todo.id}
                item={todo}
            />
        })
    }


    return (
        <div className={classes.todoList}>
            {
                (todosCtx.items.length > 0) ?
                    <ul className={classes.todoList__layout}>
                        {renderContent()}
                    </ul> : content
            }

        </div>
    );
}

export default TodoList;