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
    currentItem: {
        id: new Date().getTime(),
        title: '',
        description: '',
        color: '',
        date: null,
    },
    isCreate: true,
    isAlertOpen: false
};

export const ACTIONS = {
    ADD: (state, action) => {
        const updatedItems = [...state.items, action.item];
        return { ...state, items: updatedItems };
    },
    REMOVE: (state, action) => {
        const updatedItems = state.items.filter((item) => item.id !== action.id);
        return { ...state, items: updatedItems };
    },
    UPDATE: (state, action) => {
        const updatedItems = state.items.map(item => (item.id === action.id) ? action.item : item);
        return { ...state, items: updatedItems };
    },
    TOGGLE_ALERT: (state, action) => {
        return { ...state, isAlertOpen: action.isOpen };
    },
    SET_ITEM: (state, action) => {
        return { ...state, currentItem: action.item };
    },
    CREATE_OPERATION: (state, action) => {
        return { ...state, isCreate: action.isCreate };
    }
}

export const TodosReducer = (state, action) => {
    return ACTIONS[action.type](state, action) || defaultState;
};
