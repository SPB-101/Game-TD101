import { GameLevel } from "./GameLevel";
import { Loader } from "../model/Loader";
import { TurretPlace } from "../turret/TurretPlace";
import { Utils, Vector } from "../Utils";
import { Rembot } from "../creep/Rembot";
import { TankM } from "../creep/TankM";
import { Meh } from "../creep/Meh";
import { Tank } from "../creep/Tank";
import { Game } from "../Game";
import { Creep } from "../creep/Creep";
import { Airship } from "../creep/Airship";

export class GameLevel2 extends GameLevel {
  map = [
    [
      { x: 0, y: 376 },
      { x: 254, y: 364 },
      { x: 322, y: 307 },
      { x: 652, y: 305 },
      { x: 767, y: 352 },
      { x: 805, y: 419 },
      { x: 1064, y: 419 },
    ],
    [
      { x: 0, y: 376 },
      { x: 254, y: 364 },
      { x: 320, y: 488 },
      { x: 674, y: 510 },
      { x: 734, y: 483 },
      { x: 805, y: 419 },
      { x: 1064, y: 419 },
    ],
  ];
  background = () => Loader.getImageMap("map_2");
  turretPlaces: TurretPlace[] = [
    new TurretPlace(new Vector(145, 290), false),
    new TurretPlace(new Vector(360, 600), false),
    new TurretPlace(new Vector(395, 410), false),
    new TurretPlace(new Vector(635, 410), false),
    new TurretPlace(new Vector(860, 520), false),
    new TurretPlace(new Vector(330, 220), false),
    new TurretPlace(new Vector(735, 250), false),
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
    for (let i = 0; i < 8; i++) {
      const clazz = this.waves[game.gameStat.wave % this.waves.length];
      const creep: Creep = this.entityFactory(
        clazz,
        new Vector(Utils.rand(14), Utils.rand(50)),
        Utils.rand(20),
        game.hpinc
      );

      creep.setPos(
        new Vector(-(i * 100), this.map[creep.wave % this.map.length][0].y)
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
