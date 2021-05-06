import React from "react";
import { shallow } from "enzyme";
import { LoginBlock } from "./LoginPage";

jest.mock("../../hooks/useQuery", () => ({
  useQuery() {
    return null;
  },
}));

describe("<LoginBlock />", () => {
  it("should render correctly", () => {
    const tree = shallow(
      <LoginBlock
        isLoading={false}
        errorMessage=""
        fetchLoginThunk={jest.fn()}
        fetchLoginYandexStepOneThunk={jest.fn()}
        fetchLoginYandexStepTwoThunk={jest.fn()}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
