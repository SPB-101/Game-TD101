import React from "react";
import { shallow } from "enzyme";
import { LoginBlock } from "./LoginPage";

describe("<LoginBlock />", () => {
  it("should render correctly", () => {
    const tree = shallow(
      <LoginBlock
        isLoading={false}
        errorMessage=""
        fetchLoginThunk={() => {
          return Promise.resolve();
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
