import React from "react";
import renderer from "react-test-renderer";
import { LoginPage } from "../pages/Login";
import { StaticRouter } from "react-router";

describe("<LoginPage />", () => {
  it("LoginPage renders correctly", () => {
    const tree = renderer
      .create(
        <StaticRouter location="/login">
          <LoginPage />
        </StaticRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
