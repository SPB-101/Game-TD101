import type { State } from "@reducers/index";

export const getGameWidget = (state: State) => state.widgets.game;

export const getScore = (state: State) => getGameWidget(state).score;
export const getIsEndGame = (state: State) => !!getGameWidget(state).result;
export const getResult = (state: State) => getGameWidget(state).result;
export const getLevel = (state: State) => getGameWidget(state).level;
