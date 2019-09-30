import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItem from "./TodoItem";

describe("<TodoItem>", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    const { getByTestId } = render(
      <TodoItem id={1} title="Master React" done={true} toggleTodo={() => {}} />
    );
    const todo = getByTestId("todo");

    expect(todo).toBeInTheDocument();
    expect(todo).toBeVisible();
    expect(todo).toContainHTML("Master React");
  });
});
