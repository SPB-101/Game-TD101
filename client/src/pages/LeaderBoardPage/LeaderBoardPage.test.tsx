import React from "react";
import { shallow } from "enzyme";

import { LeaderBoardBlock } from "./LeaderBoardPage";
import { LeaderboardItem } from "@entities/leaderboard/types";

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
        fetchLeaderboardThunk={jest.fn()}
        isLoading={false}
        leaderboard={[mockLeaderboardItem] as LeaderboardItem[]}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
