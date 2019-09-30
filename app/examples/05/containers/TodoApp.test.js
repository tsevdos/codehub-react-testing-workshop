import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TodoApp } from "./TodoApp";

xdescribe("<TodoApp>", () => {
  afterEach(cleanup);

  it("renders correctly the user list", () => {
    const { getByTestId, getAllByTestId } = render(
      <TodoApp
        users={usersInitialState}
        selectedUserId={""}
        saveUser={() => {}}
        selectUser={() => {}}
      />
    );
    const userList = getByTestId("user-list");
    const userListItems = getAllByTestId("user-list-item");

    expect(userList).toBeInTheDocument();
    expect(userList).toBeVisible();
    expect(userListItems.length).toBe(11);
    expect(userList).toContainHTML("Bates Washington");
    expect(userList).toContainHTML("Bates Washington photo");
    expect(userList).toContainHTML("bates.washington@zolarex.io");
    expect(userList).toContainHTML("Viola Serrano");
    expect(userList).toContainHTML("Viola Serrano photo");
  });

  xit("renders correctly the select user message", () => {
    const { getByText } = render(
      <Users
        users={usersInitialState}
        selectedUserId={""}
        saveUser={() => {}}
        selectUser={() => {}}
      />
    );
    const message = getByText(/Please select a user/i);

    expect(message).toBeInTheDocument();
    expect(message).toBeVisible();
  });
});
