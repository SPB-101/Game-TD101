import "./index.css";
import {PanelController} from "./PanelController";
import {Game} from "./Game";

const canvas: HTMLCanvasElement = document.querySelector('canvas')!;
const cx = canvas.getContext('2d');

let game = new Game();
let panelController = new PanelController();
panelController.init(game);

