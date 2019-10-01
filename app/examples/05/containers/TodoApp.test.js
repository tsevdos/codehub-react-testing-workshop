import React from "react";
import { render, rerender, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TodoApp } from "./TodoApp";
import { initialState } from "../reducers/TodosReducer";

describe("<TodoApp>", () => {
  afterEach(cleanup);

  it("renders correctly the ToDo app", () => {
    const { container } = render(
      <TodoApp
        todos={initialState}
        input={""}
        toggleTodo={() => {}}
        updateInput={() => {}}
      />
    );

    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
    expect(container).toContainHTML("My ToDos");
  });

  it("renders correctly the ToDo items", () => {
    const { container } = render(
      <TodoApp
        todos={initialState}
        input={""}
        toggleTodo={() => {}}
        updateInput={() => {}}
      />
    );
    const items = container.querySelectorAll("li");

    expect(items.length).toBe(3);
    expect(container).toContainHTML("Learn React");
    expect(container).toContainHTML("Go to Code.Hub");
    expect(container).toContainHTML("Go out for a drink");
  });

  it("renders correctly the input value", () => {
    const { getByTestId } = render(
      <TodoApp
        todos={initialState}
        input="My new Todo"
        toggleTodo={() => {}}
        updateInput={() => {}}
      />
    );
    const input = getByTestId("addTodo");

    expect(input).toContainHTML("My new Todo");
  });

  it("runs correctly the updateInput callback", () => {
    const mockUpdateInput = jest.fn();
    const { getByTestId } = render(
      <TodoApp
        todos={initialState}
        input={""}
        toggleTodo={() => {}}
        updateInput={mockUpdateInput}
      />
    );

    const input = getByTestId("addTodo");

    fireEvent.change(input, { target: { value: "My new Todo" } });

    expect(mockUpdateInput.mock.calls.length).toBe(1);
    expect(mockUpdateInput).toBeCalledWith("My new Todo");
  });

  it("runs correctly the updateInput callback", () => {
    const mockAddToDo = jest.fn();
    const { container, debug } = render(
      <TodoApp
        todos={initialState}
        input="My new Todo"
        toggleTodo={() => {}}
        addTodo={mockAddToDo}
      />
    );
    const form = container.querySelector("form");
    const expectedTodoItem = {
      id: 4,
      title: "My new Todo",
      done: false
    };

    fireEvent.submit(form);

    expect(mockAddToDo.mock.calls.length).toBe(1);
    expect(mockAddToDo).toBeCalledWith(expectedTodoItem);
  });
});
