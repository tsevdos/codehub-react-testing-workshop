import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import App from "../App";

describe("<App />", () => {
  it("renders correctly with snapshot (shallow)", () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders correctly with snapshot (mount)", () => {
    const wrapper = mount(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
