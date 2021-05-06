import React from "react";
import { shallow } from "enzyme";

import { LeaderBoardPage } from "./LeaderBoardPage";

jest.mock("./List/index", () => ({
  List() {
    return null;
  },
}));

jest.mock("./Item/index", () => ({
  Item() {
    return null;
  },
}));
describe("<LeaderBoardPage />", () => {
  it("should render correctly", () => {
    const tree = shallow(<LeaderBoardPage />);
    expect(tree).toMatchSnapshot();
  });
});
