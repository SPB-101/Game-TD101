/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* правило отключено потому что мы уверены в наличии элементов управления (интерфейс) */

import { Game } from "./Game";
import { PanelController } from "./PanelController";
import { Loader } from "./model/Loader";

export class GameApplication {
  game: Game;
  panelController: PanelController;
  cx: CanvasRenderingContext2D;
  constructor(cb: (score: number, result: string) => void) {
    const canvas = document.querySelector("canvas")!;
    const cx = canvas.getContext("2d")!;
    this.game = new Game(cx);
    this.game.scoreCallback = cb;
    this.panelController = new PanelController();
  }
  start() {
    this.panelController.init(this.game);
    Loader.load(() => {
      this.game.start();
    });
  }
}
