import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "../App";

describe("<App />", () => {
  it("shallow rendering", () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());

    expect(wrapper.exists()).toBe(true);
  });

  it("mount rendering", () => {
    const wrapper = mount(<App />);
    // console.log(wrapper.debug());

    expect(wrapper.exists()).toBe(true);
  });

  it("full rendering", () => {
    // render returns a Cheerio wrapper https://cheerio.js.org/
    // console.log(render(<App />).html());

    expect(render(<App />).html()).toBe(
      "<div><h2>My title</h2><div id=\"cards\"><div class=\"card m-b\"><div class=\"card-body\"><h5 class=\"card-title\">John Tsevdos</h5><p class=\"card-text\">male</p><button class=\"btn btn-primary\">edit</button></div></div><div class=\"card m-b\"><div class=\"card-body\"><h5 class=\"card-title\">Patricia Lebsack</h5><p class=\"card-text\">female</p><button class=\"btn btn-primary\">edit</button></div></div><div class=\"card m-b\"><div class=\"card-body\"><h5 class=\"card-title\">Dennis Schulist</h5><p class=\"card-text\">male</p><button class=\"btn btn-primary\">edit</button></div></div></div></div>"
    );
  });
});
