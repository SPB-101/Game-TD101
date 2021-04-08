import { Game } from "./Game";
import { PanelController } from "./PanelController";
import { Loader } from "./model/Loader";

export class GameApplication {
  game: Game;
  panelController: PanelController;
  cx: CanvasRenderingContext2D;
  constructor() {
    const canvas = document.querySelector("canvas")!;
    const cx = canvas.getContext("2d")!;
    this.game = new Game(cx);
    this.panelController = new PanelController();
  }
  start() {
    this.panelController.init(this.game);
    Loader.load(() => {
      this.game.start();
    });
  }
}
