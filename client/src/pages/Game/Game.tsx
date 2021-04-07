import React, { useEffect } from "react";

import "./Game.scss";

import { Button } from "../../component/Button";

import { GameApplication } from "../../game/GameApplication";

const resetHandler = () => {
  window.location.reload();
};

export const GamePage = (): JSX.Element => {
  useEffect(() => {
    const game = new GameApplication();
    game.start();
  }, []);

  return (
    <div className="game-page" id="GAME-TD-101">
      <canvas id="canvas" width="1024" height="768"></canvas>

      <div id="control" className="control">
        <div id="control-turrets" className="control-turrets">
          <div data-name="teslagun" className="control-turrets_gun">
            <img
              src="./assets/game/img/teslagun.jpg"
              className="control-turrets_image-gun"
            />
            <p>Teslagun ($15)</p>
          </div>
          <div data-name="lasergun" className="control-turrets_gun">
            <img
              src="./assets/game/img/laser.jpg"
              className="control-turrets_image-gun"
            />
            <p>Laser ($25)</p>
          </div>
          <div data-name="rocketgun" className="control-turrets_gun">
            <img
              src="./assets/game/img/rocketgun.jpg"
              className="control-turrets_image-gun"
            />
            <p>Rocket ($40)</p>
          </div>
          <div data-name="icegun" className="control-turrets_gun">
            <img
              src="./assets/game/img/icegun.jpg"
              className="control-turrets_image-gun"
            />
            <p>Icegun ($60)</p>
          </div>
        </div>

        <div id="control-right" className="info-stats">
          <span id="control-timer"></span>
          <span id="control-fast"></span>
        </div>

        <div id="control-right-2" className="info-game">
          <div className="info-game_param">
            Cash $<span id="control-cash">35</span>
          </div>
          <div className="info-game_param">
            Lives <span id="control-lives">10</span>
          </div>
          <div className="info-game_param">
            Wave <span id="control-wave">1</span>
          </div>
        </div>

        <div id="control-right-3" className="info-engine">
          <div className="info-engine_fps">
            <span id="control-fps">60</span>
            FPS
          </div>
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
