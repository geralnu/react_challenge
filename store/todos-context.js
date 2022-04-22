import React from "react";

const TodosContext = React.createContext({
    items: [],
    currentItem: {
        id: new Date().getTime(),
        title: '',
        description: '',
        color: '#a95f5f',
        date: null,
    },
    isCreate: true,
    isAlertOpen: false,
    addTodo: (item) => { },
    removeTodo: (id) => { },
    updateTodo: (id, item) => { },
    setAlertOpen: (isOpen) => { },
    setCurrentItem: (setCurrentItem) => { },
    setIsCreate: (isCreate) => { },
});

export default TodosContext;