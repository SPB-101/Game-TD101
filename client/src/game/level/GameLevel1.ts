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

export class GameLevel1 extends GameLevel {
  map = [
    [
      { x: 0, y: 370 },
      { x: 280, y: 380 },
      { x: 400, y: 220 },
      { x: 620, y: 220 },
      { x: 750, y: 380 },
      { x: 1064, y: 380 },
    ],
    [
      { x: 0, y: 370 },
      { x: 280, y: 380 },
      { x: 400, y: 520 },
      { x: 620, y: 520 },
      { x: 750, y: 380 },
      { x: 1064, y: 380 },
    ],
  ];
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

  waves = [Rembot, Tank, TankM, Meh];

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
        new Vector(-(i * 90), this.map[creep.wave % this.map.length][0].y)
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
