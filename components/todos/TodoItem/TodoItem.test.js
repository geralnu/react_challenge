import { render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe('TodoItem Component', () => {

    test('renders Todo item', () => {
        const item = {
            id: "u1",
            title: "Cena",
            description: "recuerda comprar cena para celebrar",
            date: "2022-04-25",
            color: "201, 134, 64"
        };

        render(<TodoItem item={item} />);

        const itemTitle = screen.getByText('Cena');
        const itemDescription = screen.getByText('recuerda comprar cena para celebrar');
        expect(itemTitle).toBeInTheDocument();
        expect(itemDescription).toBeInTheDocument();
    });

});