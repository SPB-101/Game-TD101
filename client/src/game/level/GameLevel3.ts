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

export class GameLevel3 extends GameLevel {
  map = [
    [
      { x: 0, y: 160 },
      { x: 232, y: 175 },
      { x: 245, y: 465 },
      { x: 438, y: 487 },
      { x: 663, y: 474 },
      { x: 692, y: 426 },
      { x: 700, y: 192 },
      { x: 752, y: 142 },
      { x: 1064, y: 142 },
    ],
    [
      { x: 0, y: 160 },
      { x: 227, y: 190 },
      { x: 265, y: 465 },
      { x: 438, y: 487 },
      { x: 463, y: 685 },
      { x: 1064, y: 685 },
    ],
  ];
  background = () => Loader.getImageMap("map_3");
  turretPlaces: TurretPlace[] = [
    new TurretPlace(new Vector(162, 382), false),
    new TurretPlace(new Vector(365, 370), false),
    new TurretPlace(new Vector(580, 370), false),
    new TurretPlace(new Vector(565, 585), false),
    new TurretPlace(new Vector(770, 605), false),
    new TurretPlace(new Vector(820, 275), false),
    new TurretPlace(new Vector(600, 95), false),
    new TurretPlace(new Vector(310, 100), false),
    new TurretPlace(new Vector(310, 575), false),
    new TurretPlace(new Vector(775, 500), false),
  ];

  waves = [TankM, Rembot, Meh, Tank];

  entityFactory = <
    T extends {
      new (...args: any[]): any;
    }
  >(
    ClassToCreate: T,
    ...args: ConstructorParameters<T>
  ): InstanceType<T> => new ClassToCreate(...args);

  updateWave(game: Game) {
    for (let i = 0; i < 6; i++) {
      const clazz = this.waves[game.gameStat.wave % this.waves.length];
      const creep: Creep = this.entityFactory(
        clazz,
        new Vector(Utils.rand(14), Utils.rand(25)),
        Utils.rand(20),
        game.hpinc
      );

      creep.setPos(
        new Vector(-(i * 140), this.map[creep.wave % this.map.length][0].y)
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
