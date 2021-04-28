import { TurretPlace } from "./turret/TurretPlace";
import { Game } from "./Game";
import { Creep } from "./creep/Creep";
import { Utils, Vector } from "./Utils";

export class GameLevel {
  background: CanvasImageSource;
  turretPlaces: TurretPlace[];
  hpinc: number;
  waveIndex = 0;
  waves = [];

  updateWave(game: Game) {
    for (let i = 0; i < 10; i++) {
      const creep: Creep = new Creep(
        new Vector(Utils.rand(14), Utils.rand(40)),
        Utils.rand(20),
        this.hpinc
      );
      creep.setPos(
        new Vector(-(i * 50) - 10, game.map[creep.wave % game.map.length][0].y)
      );
      creep.draw(game.cx);
      game.creeps.push(creep);
    }
  }
}
