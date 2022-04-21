import React from "react";

const TodosContext = React.createContext({
    items: [],
    formIsShown: false,
    currentItem: {
        id: new Date().getTime(),
        title: '',
        description: '',
        color: '',
        date: null,
    },
    isCreate: true,
    isAlertOpen: false,
    addTodo: (item) => { },
    removeTodo: (id) => { },
    updateTodo: (id, item) => { },
    setFormIsShown: (isShown) => { },
    setAlertOpen: (isOpen) => { },
    setCurrentItem: (setCurrentItem) => { },
    setIsCreate: (isCreate) => { },
});

export default TodosContext;