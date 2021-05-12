import React from "react";
import { shallow } from "enzyme";
import { Avatar } from "./index";
import ProfileDefaultIcon from "../../assets/images/icons/profile-icon.svg";

describe("<Avatar />", () => {
  it("should render correctly without props", () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.matchesElement(<ProfileDefaultIcon />)).toBe(true);
  });

  it("should have a default class 'avatar'", () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.hasClass("avatar")).toBe(true);
  });

  it("should render correctly with props", () => {
    const src = "./john.png";
    const wrapper = shallow(<Avatar src={src} />);
    expect(wrapper.props().src).toEqual(src);
  });
});
