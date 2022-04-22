import TodosContext from "./todos-context";
import { TodosReducer, defaultState } from "./reducers/TodosReducer";
import { useContext, useReducer } from "react";

const TodosProvider = (props) => {
    const [todoState, dispatchTodoAction] = useReducer(TodosReducer, defaultState);

    const todosContext = {
        items: todoState.items,
        totalItems: todoState.totalItems,
        currentItem: todoState.currentItem,
        isCreate: todoState.isCreate,
        isAlertOpen: todoState.isAlertOpen,
        addTodo: item => dispatchTodoAction({ type: 'ADD', item }),
        removeTodo: id => dispatchTodoAction({ type: 'REMOVE', id }),
        updateTodo: (id, item) => dispatchTodoAction({ type: 'UPDATE', id, item }),
        setAlertOpen: isOpen => dispatchTodoAction({ type: 'TOGGLE_ALERT', isOpen }),
        setCurrentItem: (item) => dispatchTodoAction({ type: 'SET_ITEM', item }),
        setIsCreate: (isCreate) => dispatchTodoAction({ type: 'CREATE_OPERATION', isCreate }),
    };

    return <TodosContext.Provider value={todosContext}>
        {props.children}
    </TodosContext.Provider>
};

export const useProvider = () => useContext(TodosContext);

export default TodosProvider;

