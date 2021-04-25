import React from "react";
import { shallow } from "enzyme";

import { LeaderBoardPage } from "./index";

jest.mock("./LeaderBoardItem", () => ({
  LeaderBoardItem() {
    return null;
  },
}));

jest.mock("../../component/Pagination", () => ({
  Pagination() {
    return `pagination component`;
  },
}));

describe("<LeaderBoardPage />", () => {
  it("should render correctly", () => {
    const tree = shallow(<LeaderBoardPage />);
    expect(tree).toMatchSnapshot();
  });
});
