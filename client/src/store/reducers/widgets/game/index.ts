import { START_GAME, END_GAME, RESET_GAME } from "@actions/game";
import type { Actions } from "@actions/game";

export type Game = {
  score: number;
  result: string;
  level: number;
};

export type ResultGame = {
  score: number;
  result: string;
};

export type Level = {
  level: number;
};

export const initialState = {
  score: 0,
  result: "",
  level: 0,
};

export const game = (state: Game = initialState, action: Actions) => {
  switch (action.type) {
    case START_GAME: {
      state.level = action.payload.level;
      state.score = 0;
      state.result = "";
      return state;
    }

    case END_GAME: {
      state.score = action.payload.score;
      state.result = action.payload.result;
      return state;
    }

    case RESET_GAME: {
      state.score = 0;
      state.result = "";
      return state;
    }
  }

  return state;
};
