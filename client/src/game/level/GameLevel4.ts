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

export class GameLevel4 extends GameLevel {
  map = [
    [
      { x: 0, y: 120 },
      { x: 770, y: 120 },
      { x: 810, y: 380 },
      { x: 1064, y: 390 },
    ],
  ];
  background = () => Loader.getImageMap("map_4");
  turretPlaces: TurretPlace[] = [
    new TurretPlace(new Vector(80, 220), false),
    new TurretPlace(new Vector(400, 220), false),
    new TurretPlace(new Vector(670, 220), false),
    new TurretPlace(new Vector(670, 360), false),
    new TurretPlace(new Vector(910, 295), false),
    new TurretPlace(new Vector(910, 110), false),
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
