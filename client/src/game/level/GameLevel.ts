import { TurretPlace } from "../turret/TurretPlace";
import { Game } from "../Game";
import { Rembot } from "../creep/Rembot";

export abstract class GameLevel {
  abstract map: { x: number; y: number }[][];
  waterMap: { x: number; y: number }[] = [];
  abstract background: () => CanvasImageSource;
  abstract turretPlaces: TurretPlace[];

  abstract waves: typeof Rembot[];

  protected entityFactory = <
    T extends {
      new (...args: any[]): any;
    }
  >(
    ClassToCreate: T,
    ...args: ConstructorParameters<T>
  ): InstanceType<T> => new ClassToCreate(...args);

  abstract updateWave(game: Game): void;
}
