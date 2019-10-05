import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

describe("<Input>", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    const { container } = render(<Input placeholder="" value="" />);
    const input = container.querySelector("input");

    // ...
  });

  xit("renders correctly with placeholder", () => {
    // ...
  });

  xit("renders correctly with value", () => {
    // ...
  });

  xit("has correct attributes", () => {
    // ...
  });

  xit("corectly updates the value", () => {
    // ...
  });
});
