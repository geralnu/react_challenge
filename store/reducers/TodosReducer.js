export const defaultState = {
    items: [
        {
            id: "u1",
            title: "Cena",
            description: "recuerda comprar cena para celebrar",
            date: "2022-04-17",
            color: "201, 134, 64"
        },
        {
            id: "u2",
            title: "Cita",
            description: "llamar a la agencia ",
            date: "2022-04-17",
            color: "96, 191, 151",
        },
    ],
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
};

// const ACTIONS = {
//     ADD: () => { },
//     REMOVE: () => { },
//     UPDATE: () => { }
// }

export const TodosReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = [...state.items, action.item];
        state = { ...state, items: updatedItems };
        return state;
    }
    if (action.type === "REMOVE") {
        const updatedItems = state.items.filter((item) => item.id !== action.id);
        state = { ...state, items: updatedItems };
        return state;
    }
    if (action.type === "UPDATE") {
        const updatedItems = state.items.map(item => (item.id === action.id) ? action.item : item);
        state = { ...state, items: updatedItems };
        return state;
    }
    if (action.type === "TOGGLE_MODAL") {
        state = { ...state, formIsShown: action.isShown };
        return state;
    }
    if (action.type === 'TOGGLE_ALERT') {
        state = { ...state, isAlertOpen: action.isOpen };
        return state;
    }
    if (action.type === 'SET_ITEM') {
        state = { ...state, currentItem: action.item }
        return state;
    }
    if (action.type === "CREATE_OPERATION") {
        state = { ...state, isCreate: action.isCreate };
        return state;
    }
    // const result = ACTIONS[action.type]() || defaultState;

    return defaultState;
};
