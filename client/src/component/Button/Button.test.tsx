import React from "react";
import { shallow } from "enzyme";
import { Button } from "./index";

describe("<Button />", () => {
  it("should render correctly without props", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.matchesElement(<button className="button"></button>)).toBe(
      true
    );
  });

  it("should have a default class 'button'", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.hasClass("button")).toBe(true);
  });

  it("should render correctly with props", () => {
    const text = "Text";
    const wrapper = shallow(<Button>Text</Button>);
    expect(wrapper.text()).toEqual(text);
  });
});
