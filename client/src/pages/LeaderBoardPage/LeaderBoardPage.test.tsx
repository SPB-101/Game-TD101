import React from "react";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";

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
    const tree = renderer
      .create(
        <StaticRouter location="/leaderboard">
          <LeaderBoardPage />
        </StaticRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
