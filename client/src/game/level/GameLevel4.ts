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
import { Cruiser } from "../creep/Cruiser";

export class GameLevel4 extends GameLevel {
  map = [
    [
      { x: 0, y: 120 },
      { x: 770, y: 120 },
      { x: 810, y: 380 },
      { x: 1064, y: 390 },
    ],
  ];
  waterMap: { x: number; y: number }[] = [
    { x: 0, y: 373 },
    { x: 248, y: 373 },
    { x: 523, y: 437 },
    { x: 783, y: 620 },
    { x: 1064, y: 620 },
  ];
  background = () => Loader.getImageMap("map_4");
  turretPlaces: TurretPlace[] = [
    new TurretPlace(new Vector(80, 220), false),
    new TurretPlace(new Vector(400, 220), false),
    new TurretPlace(new Vector(242, 446), false),
    new TurretPlace(new Vector(688, 641), false),
    new TurretPlace(new Vector(670, 220), false),
    new TurretPlace(new Vector(690, 385), false),
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
    for (let i = 0; i < 8; i++) {
      const clazz = this.waves[game.gameStat.wave % this.waves.length];
      const creep: Creep = this.entityFactory(
        clazz,
        new Vector(Utils.rand(14), Utils.rand(50)),
        Utils.rand(20),
        game.hpinc
      );

      creep.setPos(
        new Vector(-(i * 90) - 10, this.map[creep.wave % this.map.length][0].y)
      );
      creep.draw(game.cx);
      game.creeps.push(creep);
    }

    const cruiser = new Cruiser(
      new Vector(0, 0),
      Utils.rand(20),
      game.hpinc * 2
    );
    cruiser.setPos(new Vector(-150, this.waterMap[0].y));
    game.creeps.push(cruiser);

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
