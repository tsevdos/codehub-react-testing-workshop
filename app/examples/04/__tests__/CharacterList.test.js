import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import CharacterList from "../CharacterList";

const data = [
  {
    name: "John Tsevdos",
    gender: "male"
  },
  {
    name: "Patricia Lebsack",
    gender: "female"
  },
  {
    name: "Dennis Schulist",
    gender: "male"
  },
];

describe("<CharacterList />", () => {

  it("renders correctly with snapshot (shallow)", () => {
    const wrapper = shallow(<CharacterList data={data} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders correctly with snapshot (mount)", () => {
    const wrapper = mount(<CharacterList data={data} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
