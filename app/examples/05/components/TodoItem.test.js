import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItem from "./TodoItem";

describe("<TodoItem>", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    const { getByTestId } = render(
      <TodoItem id={1} title="Master React" toggleTodo={() => {}} />
    );
    const todo = getByTestId("todo");

    expect(todo).toBeInTheDocument();
    expect(todo).toBeVisible();
    expect(todo).toContainHTML("Master React");
    expect(todo.querySelector("span")).toBeTruthy();
  });

  it("strike through if is done", () => {
    const { getByTestId } = render(
      <TodoItem id={1} title="Master Redux" done toggleTodo={() => {}} />
    );
    const todo = getByTestId("todo");

    expect(todo).toBeInTheDocument();
    expect(todo).toBeVisible();
    expect(todo).toContainHTML("Master Redux");
    expect(todo.querySelector("strike")).toBeTruthy();
  });

  it("handles correctly onChange", () => {
    const mockToggleTodo = jest.fn();
    const { getByTestId } = render(
      <TodoItem id={4} title="Master JS" toggleTodo={mockToggleTodo} />
    );
    const input = getByTestId("todo").querySelector("input");
    fireEvent.click(input, { target: { checked: true } });

    expect(mockToggleTodo.mock.calls.length).toBe(1);
    expect(mockToggleTodo).toBeCalledWith(4);
  });
});
