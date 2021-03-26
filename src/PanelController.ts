import {Game} from "./Game";

export class PanelController {

    controlPause: HTMLLinkElement = document.querySelector('#control-pause')!
    fpsInfo: HTMLSpanElement = document.querySelector('#control-fps')!

    init(game: Game) {
        this.controlPause.onclick = () => this.controlPause.textContent = game.paused ? (game.start(), "Pause") : (game.pause(), "Start")
        game.fpsListener = (fps: number) => {
            this.fpsInfo.textContent = fps.toString();
        }
        document.onkeydown = (e: KeyboardEvent) => {
            if(!game.paused) {
                switch (e.keyCode) {
                    case 13:
                        game._wave =  game.ticks - 1200;
                        break;
                    default:
                        break;
                }
            }
        }
    }

}