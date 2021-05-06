import React from "react";
import { shallow } from "enzyme";
import { LoginBlock } from "./LoginPage";

describe("<LoginBlock />", () => {
  it("should render correctly", () => {
    const tree = shallow(
      <LoginBlock
        isLoading={false}
        errorMessage=""
        fetchLoginThunk={jest.fn()}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
