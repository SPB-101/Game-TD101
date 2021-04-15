import type { Actions } from "../../../actions/leaderboard";
import { LeaderboardItem } from "../../../../../app/entities/leaderboard/types";
import { FETCH_LEADERBOARD_FULFILLED } from "../../../actions/leaderboard";

export type Leaderboard = {
  [id: string]: LeaderboardItem;
};

const initialState = {
  "1": {
    id: 1,
    displayName: "Kristina Trifunov",
    TD101Score: 12123232,
    avatar: "https://uifaces.co/our-content/donated/7JZz4G7I.jpg",
  },
  "2": {
    id: 2,
    displayName: "Vivian Painter",
    TD101Score: 12323,
    avatar:
      "https://images.generated.photos/QbcqC7vbdYI9lI-q6inuEaCPd_yC4v7OkPMqCdWk-tM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTk2NjMuanBn.jpg",
  },
  "3": {
    id: 3,
    displayName: "Aniah Lassiter",
    TD101Score: 9898,
    avatar:
      "https://images.generated.photos/rF3Ir6Y3AZiiqNshk_D1rTEAUsgYz4wv_CLWd0EJZmM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1NzM2MTUuanBn.jpg",
  },
  "4": {
    id: 4,
    displayName: "Krish Kendall",
    TD101Score: 3490,
    avatar:
      "https://images.generated.photos/KSkFZay8lawllgpfawH1UjaofmrXm1sPLZiauTWaYag/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAw/MzYyNTIuanBn.jpg",
  },
  "5": {
    id: 5,
    displayName: "Dave Smiths",
    TD101Score: 1233,
  },
};

export const leaderboard = (
  state: Leaderboard = initialState,
  action: Actions
) => {
  switch (action.type) {
    case FETCH_LEADERBOARD_FULFILLED: {
      return action.payload.entities.leaderboard;
    }
  }

  return state;
};
