import { render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe('TodoItem Component', () => {

    test('renders Todo item', () => {
        const item = {
            id: "u1",
            title: "Dinner",
            description: "remember buy dinner to celebrate",
            date: "2022-04-25",
            color: "201, 134, 64"
        };

        render(<TodoItem item={item} />);

        const itemTitle = screen.getByText('Dinner');
        const itemDescription = screen.getByText('remember buy dinner to celebrate');
        expect(itemTitle).toBeInTheDocument();
        expect(itemDescription).toBeInTheDocument();
    });

});