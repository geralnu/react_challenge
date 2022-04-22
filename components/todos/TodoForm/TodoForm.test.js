import { render, screen } from "@testing-library/react";
import TodosContext from "../../../store/todos-context";
import TodoForm from "./TodoForm";

describe('TodoForm Component', () => {

    test('renders "Add new Task" as a text in the form title', () => {
        const formType = { isCreate: true };

        render(
            <TodosContext.Provider value={formType}>
                <TodoForm />
            </TodosContext.Provider>
        );

        const formTitleElement = screen.getByText('Add new Task');
        expect(formTitleElement).toBeInTheDocument();
    });

    test('renders "Edit Task" as a text in the form title', () => {
        const formType = { isCreate: false };

        render(
            <TodosContext.Provider value={formType}>
                <TodoForm />
            </TodosContext.Provider>
        );

        const formTitleElement = screen.getByText('Edit Task');
        expect(formTitleElement).toBeInTheDocument();
    });

    test('on edit form fields should be filled', () => {
        const state = {
            isCreate: false,
            currentItem: {
                id: 'u1',
                title: "Cita",
                description: "llamar a la agencia ",
                date: "2022-04-17",
                color: "96, 191, 151",
            }
        }

        const dom = render(
            <TodosContext.Provider value={state}>
                <TodoForm />
            </TodosContext.Provider>
        );
        
        const formButton = screen.getByText('Update');
        const titleInput = dom.container.querySelector('#form_title');
        const dateInput = dom.container.querySelector('#form_date');
        const descriptionInput = dom.container.querySelector('#form_description');

        expect(formButton).toBeInTheDocument();
        expect(titleInput).toHaveValue(state.title);
        expect(dateInput).toHaveValue(state.date);
        expect(descriptionInput).toHaveValue(state.description);
    });

    test('on create form fields should be empty', () => {
        const state = {
            isCreate: true,
            currentItem: {
                id: new Date().getTime(),
                title: '',
                description: '',
                color: '',
                date: null,
            }
        }

        const dom = render(
            <TodosContext.Provider value={state}>
                <TodoForm />
            </TodosContext.Provider>
        );
        
        const formButton = screen.getByText('Add');
        const titleInput = dom.container.querySelector('#form_title');
        const dateInput = dom.container.querySelector('#form_date');
        const descriptionInput = dom.container.querySelector('#form_description');

        expect(formButton).toBeInTheDocument();
        expect(titleInput).toHaveValue('');
        expect(dateInput).toHaveValue('');
        expect(descriptionInput).toHaveValue('');
    });
});