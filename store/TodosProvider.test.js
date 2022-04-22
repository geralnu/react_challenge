import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import React from "react";
import TodosContext from "./todos-context";
import TodosProvider, { useProvider } from "./TodosProvider";

const state = { items: [] };
const dispatch = jest.fn();

const wrapper = ({ children }) => (
    <TodosContext.Provider value={{ state, dispatch }}>
        {children}
    </TodosContext.Provider>
);

const mockUseContext = jest.fn().mockImplementation(() => ({ state, dispatch }));
React.useContext = mockUseContext;

describe('TodosProvider test', () => {
    test('should return present todos with its state and dispatch function', () => {
        render(<TodosProvider />);
        const { result } = renderHook(() => useProvider(), {wrapper});

        expect(result.current.state.items.length).toBe(0);
        expect(result.current).toEqual({state, dispatch});
    });
});