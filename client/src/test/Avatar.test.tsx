import React from "react";
import renderer from "react-test-renderer";
import { Avatar } from "../component/Avatar";

describe("<Avatar />", () => {
  it("Avatar renders correctly", () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
