import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LayoutContent from "./LayoutContent";

describe('Layout Component', () => {

    test('renders "My Tasks" as a text', () => {
        render(<LayoutContent />);

        const titleElement = screen.getByText('My Tasks');
        expect(titleElement).toBeInTheDocument();
    });

});