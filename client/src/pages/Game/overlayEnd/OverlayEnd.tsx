import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useTranslation } from "react-i18next";
import useWindowSize from "react-use/lib/useWindowSize";
import classnames from "classnames";

import Confetti from "react-confetti";
import { Button } from "@component/Button";

import { GAME_WIN } from "@constants/index";
import { getScore, getResult, getIsEndGame } from "@selectors/widgets/game";
import { resetGame } from "@actions/game";

import type { State } from "@reducers/index";
import type { Props } from "./types";

import "./OverlayEnd.scss";

export const OverlayEndBlock = ({ result = "", score, isEndGame }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { width, height } = useWindowSize();

  const goMenu = useCallback(() => {
    dispatch(resetGame());
    dispatch(push("/menu"));
  }, []);

  const goLeaderboard = useCallback(() => {
    dispatch(resetGame());
    dispatch(push("/leaderboard"));
  }, []);

  const reload = useCallback(() => {
    dispatch(resetGame());
    window.location.reload();
  }, []);

  const overlayClasses = classnames("overlay", { "overlay--hide": !isEndGame });

  return (
    <div className={overlayClasses}>
      {result === GAME_WIN ? (
        <Confetti
          className="overlay_confetti"
          recycle={false}
          tweenDuration={10000}
          colors={[
            "#eb5757",
            "#2f80ed",
            "#2d9cdb",
            "#56ccf2",
            "#c0f0ff",
            "#219653",
            "#27ae60",
            "#6fcf97",
            "#f2994a",
            "#f2c94c",
            "#9b51e0",
            "#bb6bd9",
          ]}
          width={width}
          height={height}
        />
      ) : null}

      <div className="overlay_result">
        <p className="overlay_message">{t(result)}</p>
        <p className="overlay_score">
          {t("score")}:{score}
        </p>
        <Button onClick={reload} classType="primary">
          {t("playAgain")}
        </Button>
        <Button onClick={goLeaderboard}>{t("leaderboard")}</Button>
        <Button onClick={goMenu}>{t("menu")}</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  result: getResult(state),
  score: getScore(state),
  isEndGame: getIsEndGame(state),
});

const mapDispatchToProps = {};

export const OverlayEnd = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverlayEndBlock);
