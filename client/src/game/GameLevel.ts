import { TurretPlace } from "./turret/TurretPlace";
import { Game } from "./Game";
import { Creep } from "./creep/Creep";
import { Utils, Vector } from "./Utils";
import { Tank } from "./creep/Tank";
import { TankM } from "./creep/TankM";
import { Meh } from "./creep/Meh";
import { Airship } from "./creep/Airship";
import { Defs } from "./model/Defs";
import { Loader } from "./model/Loader";
import { Rembot } from "./creep/Rembot";

export class GameLevel {
  map = Defs.Loopy;
  background = () => Loader.getImageMap("map_1");
  turretPlaces: TurretPlace[] = [
    new TurretPlace(new Vector(200, 270), false),
    new TurretPlace(new Vector(200, 470), false),
    new TurretPlace(new Vector(815, 270), false),
    new TurretPlace(new Vector(815, 470), false),
    new TurretPlace(new Vector(450, 410), false),
    new TurretPlace(new Vector(450, 320), false),
    new TurretPlace(new Vector(580, 410), false),
    new TurretPlace(new Vector(580, 320), false),
    new TurretPlace(new Vector(500, 125), false),
    new TurretPlace(new Vector(500, 620), false),
  ];

  waves = [Rembot, TankM, Meh, Tank];

  entityFactory = <
    T extends {
      new (...args: any[]): any;
    }
  >(
    ClassToCreate: T,
    ...args: ConstructorParameters<T>
  ): InstanceType<T> => new ClassToCreate(...args);

  updateWave(game: Game) {
    for (let i = 0; i < 10; i++) {
      const clazz = this.waves[game.gameStat.wave % this.waves.length];
      const creep: Creep = this.entityFactory(
        clazz,
        new Vector(Utils.rand(14), Utils.rand(50)),
        Utils.rand(20),
        game.hpinc
      );

      creep.setPos(
        new Vector(-(i * 70) - 10, this.map[creep.wave % this.map.length][0].y)
      );
      creep.draw(game.cx);
      game.creeps.push(creep);
    }
    if (
      game.gameStat.wave > 3 &&
      game.gameStat.wave < 8 &&
      game.gameStat.wave % 2 === 0
    ) {
      const creep = new Airship(
        new Vector(Utils.rand(14), Utils.rand(60)),
        Utils.rand(20),
        game.hpinc * 2
      );
      creep.setPos(
        new Vector(-(3 * 50) - 10, this.map[creep.wave % this.map.length][0].y)
      );
      creep.speed = 1.5;
      game.creeps.push(creep);
    }
  }
}
