import React from "react";
import renderer from "react-test-renderer";
import { LoginPageBlock } from "./LoginPage";
import { StaticRouter } from "react-router";

describe("<LoginPageBlock />", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <StaticRouter location="/login">
          <LoginPageBlock
            isLoading={false}
            errorMessage=""
            fetchLoginThunk={() => {
              /**/
            }}
          />
        </StaticRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
