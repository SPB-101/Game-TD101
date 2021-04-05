import React, { useEffect } from "react";

import "./Game.scss";
import { GameApplication } from "../../game/GameApplication";

const html = `<div class="root">
    <canvas id="canvas" width="1024" height="768"></canvas>
    <div id="control">
        <div id="control-turrets">
            <div data-name="teslagun"><img src="img/teslagun.jpg"><p>Teslagun ($15)</p></div>
            <div data-name="lasergun"><img src="img/laser.jpg"><p>Laser ($25)</p></div>
            <div data-name="rocketgun"><img src="img/rocketgun.jpg"><p>Rocket ($40)</p></div>
            <div data-name="icegun"><img src="img/icegun.jpg"><p>Icegun ($60)</p></div>
        </div>

        <div id="control-right">
            <div id="control-right-1">
                <a id="control-timer"></a>
                <a id="control-fast"></a>
            </div>

            <div id="control-right-2">
                Cash $<span id="control-cash">35</span><br>
                Lives <span id="control-lives">10</span><br>
                Wave #<span id="control-wave">1</span>
            </div>

            <div id="control-right-3">
                <span id="control-fps">60</span>FPS<br>
                <button id="control-pause">Pause</button><br>
                <button href="">Reset</button>
            </div>
        </div>
    </div>
</div>`;

export const GamePage = (): JSX.Element => {
  const GAME_ID = "GAME-TD-101";
  useEffect(() => {
    const game = new GameApplication();
    game.start();
  }, []);
  return React.createElement("div", {
    id: GAME_ID,
    dangerouslySetInnerHTML: { __html: html },
  });
};
