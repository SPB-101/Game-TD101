import React from "react";
import renderer from "react-test-renderer";
import { TextField } from "../component/TextField";

describe("<TextField />", () => {
  it("TextField renders correctly", () => {
    const tree = renderer.create(<TextField name="login" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
