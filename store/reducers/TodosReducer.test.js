import { TodosReducer } from "./TodosReducer";


describe('Reducer function test', () => {
    test('should add item when ADD action is dispatched', () => {
        const prevState = { items: [] };
        const action = {
            type: 'ADD',
            item: {
                id: "u1",
                title: "Dinner",
                description: "remember buy dinner to celebrate!",
                date: "2022-04-17",
                color: "201, 134, 64"
            }
        };
        const EXPECTED = {
            items: [
                {
                    id: "u1",
                    title: "Dinner",
                    description: "remember buy dinner to celebrate!",
                    date: "2022-04-17",
                    color: "201, 134, 64"
                }
            ]
        };

        const udpatedState = TodosReducer(prevState, action);
        expect(udpatedState).toEqual(EXPECTED);
    });

    test('should remove an item when REMOVE action is dispatched', () => {
        const prevState = {
            items: [{
                id: "u1",
                title: "Dinner",
                description: "remember buy dinner to celebrate!",
                date: "2022-04-17",
                color: "201, 134, 64"
            }]
        };
        const action = { type: 'REMOVE', id: 'u1' }
        const EXPECTED = { items: [] };
        const udpatedState = TodosReducer(prevState, action);

        expect(udpatedState).toEqual(EXPECTED);
    });

    test('should update an item when UPDATE action is dispatched', () => {
        const prevState = {
            items: [{
                id: "u1",
                title: "Dinner",
                description: "remember buy dinner to celebrate!",
                date: "2022-04-17",
                color: "201, 134, 64"
            }]
        };
        const action = {
            type: 'UPDATE',
            id: "u1",
            item: {
                id: "u1",
                title: "Dinner tomorrow",
                description: "remember dinner tomorrow at 8",
                date: "2022-04-17",
                color: "202, 134, 65"
            }
        }
        const EXPECTED = {
            items: [{
                id: "u1",
                title: "Dinner tomorrow",
                description: "remember dinner tomorrow at 8",
                date: "2022-04-17",
                color: "202, 134, 65"
            }
            ]
        };
        const udpatedState = TodosReducer(prevState, action);

        expect(udpatedState).toEqual(EXPECTED);
    });

    test('should toggle an alert when TOGGLE_ALERT action is dispatched', () => {
        const prevState = { isAlertOpen: false };
        const action = { type: 'TOGGLE_ALERT', isOpen: true }
        const EXPECTED = { isAlertOpen: true };
        const udpatedState = TodosReducer(prevState, action);

        expect(udpatedState).toEqual(EXPECTED);
    });

    test('should set the form mode to create when CREATE_OPERATION action is dispatched', () => {
        const prevState = { isCreate: false };
        const action = { type: 'CREATE_OPERATION', isCreate: true }
        const EXPECTED = { isCreate: true };
        const udpatedState = TodosReducer(prevState, action);

        expect(udpatedState).toEqual(EXPECTED);
    });

    test('should set a current item when SET_ITEM action is dispatched', () => {
        const prevState = {
            currentItem: {
                id: new Date().getTime(),
                title: '',
                description: '',
                color: '',
                date: null,
            }
        };
        const newItem = {
            id: "u1",
            title: "Dinner tomorrow",
            description: "remember dinner tomorrow at 8",
            date: "2022-04-17",
            color: "202, 134, 65"
        };
        const action = {
            type: 'SET_ITEM',
            item: newItem
        }
        const EXPECTED = {
            currentItem: newItem
        };
        const udpatedState = TodosReducer(prevState, action);

        expect(udpatedState).toEqual(EXPECTED);
    });
});