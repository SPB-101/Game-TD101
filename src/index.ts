import "./index.css";
import {PanelController} from "./PanelController";
import {Game} from "./Game";
import {Loader} from "./Loader";

const canvas: HTMLCanvasElement = document.querySelector('canvas')!;
const cx = canvas.getContext('2d');

const game = new Game(cx!);
const panelController = new PanelController();
panelController.init(game);
Loader.load(() => {
    game.start();
});

