import React from "react";
import { shallow } from "enzyme";
import { LoginPageBlock } from "./LoginPage";

describe("<LoginPageBlock />", () => {
  it("should render correctly", () => {
    const tree = shallow(
      <LoginPageBlock
        isLoading={false}
        errorMessage=""
        fetchLoginThunk={() => {
          /**/
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
