import React from "react";
import renderer from "react-test-renderer";
import { LeaderBoardPage } from "../pages/LeaderBoardPage";
import { StaticRouter } from "react-router";

describe("<LeaderBoardPage />", () => {
  it("LeaderBoardPage renders correctly", () => {
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
