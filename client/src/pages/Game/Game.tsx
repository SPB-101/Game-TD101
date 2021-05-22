import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Button } from "@component/Button";
import { GameApplication } from "../../game/GameApplication";
import { OverlayEnd } from "./overlayEnd";

import { endGameAndScore } from "@thunks/widgets/game";
import { resetGame } from "@actions/game";

import { world } from "./index";

import type { Props } from "./types";

import "./Game.scss";

export const GameBlock = ({ endGameAndScoreThunk, resetGame }: Props) => {
  const endGameCallback = (score: number, result: string) => {
    endGameAndScoreThunk({ result, score });
  };

  const resetHandler = () => {
    window.location.reload();
  };

  useEffect(() => {
    const level = window.location.pathname.split("-")[1];
    if (world.game !== null) {
      resetGame();
      world.game.game.scoreCallback = () => {
        /**/
      };
      world.game = null;
    }
    world.game = new GameApplication(endGameCallback);
    world.game.start(+level);
  }, []);

  return (
    <div className="game-page" id="GAME-TD-101">
      <canvas id="canvas" width="1024" height="768"></canvas>

      <OverlayEnd />

      <img src="./assets/images/fullscreen.jpg" className="fullscreen" />

      <div id="control" className="control">
        <div id="control-turrets" className="control-turrets">
          <div data-name="teslagun" className="control-turrets_gun">
            <img
              src="./assets/images/teslagun.jpg"
              className="control-turrets_image-gun"
            />
            <p>Teslagun ($15)</p>
          </div>
          <div data-name="lasergun" className="control-turrets_gun">
            <img
              src="./assets/images/laser.jpg"
              className="control-turrets_image-gun"
            />
            <p>Laser ($25)</p>
          </div>
          <div data-name="rocketgun" className="control-turrets_gun">
            <img
              src="./assets/images/rocketgun.jpg"
              className="control-turrets_image-gun"
            />
            <p>Rocket ($40)</p>
          </div>
          <div data-name="icegun" className="control-turrets_gun">
            <img
              src="./assets/images/icegun.jpg"
              className="control-turrets_image-gun"
            />
            <p>Icegun ($60)</p>
          </div>
        </div>

        <div id="control-right-1" className="info-game">
          <div className="info-game_param">
            Cash $<span id="control-cash">60</span>
          </div>
          <div className="info-game_param">
            Lives <span id="control-lives">10</span>
          </div>
          <div className="info-game_param">
            Wave <span id="control-wave">1</span>
          </div>
        </div>

        <div id="control-right-2" className="info-stats">
          <div className="info-stats_fps">
            <span id="info-fps"></span>
            FPS
          </div>
          <div className="info-btn">
            <button id="info-fast" className="info-btn_fast">
              ▶
            </button>
            <button id="info-wave" className="info-btn_wave">
              +
            </button>
          </div>
        </div>

        <div id="control-right-3" className="info-engine">
          <Button id="control-pause" className="info-engine_button">
            Pause
          </Button>
          <Button onClick={resetHandler} className="info-engine_button">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  resetGame: resetGame,
  endGameAndScoreThunk: endGameAndScore,
};

export const GamePage = connect(mapStateToProps, mapDispatchToProps)(GameBlock);
