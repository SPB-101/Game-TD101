import React from "react";
import { shallow } from "enzyme";
import { TextField } from "./index";

describe("<TextField />", () => {
  it("TextField renders correctly", () => {
    const wrapper = shallow(<TextField name="login" />);
    expect(wrapper).toMatchSnapshot();
  });
});
