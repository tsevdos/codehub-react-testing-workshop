import React from "react";
import { shallow } from "enzyme";
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
  }
];

describe("<CharacterList />", () => {
  it("renders correctly CharacterList title", () => {
    const wrapper = shallow(<CharacterList data={data} />);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h2").text()).toBe("My title");
  });

  it("renders a list with 3 cards", () => {
    const wrapper = shallow(<CharacterList data={data} />);

    expect(wrapper.find("#cards .card").length).toBe(3);
  });

  it("list contains correct names", () => {
    const wrapper = shallow(<CharacterList data={data} />);
    const charactersList = wrapper.find("#cards .card");

    expect(charactersList.contains("John Tsevdos")).toBe(true);
    expect(charactersList.contains("Patricia Lebsack")).toBe(true);
    expect(charactersList.contains("Dennis Schulist")).toBe(true);
  });

  it("list item can be clicked twice", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <CharacterList data={data} onSelectCharacter={mockFn} />
    );
    wrapper
      .find("#cards .card button")
      .first()
      .simulate("click");
    wrapper
      .find("#cards .card button")
      .first()
      .simulate("click");

    expect(mockFn.mock.calls.length).toBe(2);
  });
});
