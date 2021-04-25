import React from "react";
import { shallow } from "enzyme";

import { LeaderBoardBlock } from "./LeaderBoardPage";

jest.mock("./LeaderBoardItem", () => ({
  LeaderBoardItem() {
    return null;
  },
}));

jest.mock("@component/Pagination", () => ({
  Pagination() {
    return `pagination component`;
  },
}));

const mockLeaderboardItem = {
  id: 1,
  displayName: "Ivan",
  avatar: null,
  TD101Dev1: 1000,
};

describe("<LeaderBoardBlock />", () => {
  it("should render correctly", () => {
    const tree = shallow(
      <LeaderBoardBlock
        fetchLeaderboardThunk={(mockFilter) => {
          return Promise.resolve(mockFilter).then();
        }}
        isLoading={false}
        leaderboard={[mockLeaderboardItem]}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
