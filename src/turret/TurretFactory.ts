import {Teslagun} from "./Teslagun";
import {Turret} from "./Turret";
import {Lasergun} from "./Lasergun";
import {Rocketgun} from "./Rocketgun";

export class TurretFactory {

    static createTurret(name: string): Turret | null {
        if (name === 'teslagun') {
            return new Teslagun('teslagun');
        } else if (name === 'lasergun') {
            return new Lasergun('lasergun');
        } else if (name === 'rocketgun') {
            return new Rocketgun('rocketgun');
        } else {
            return new Teslagun('icegun');
        }
        return null;
    }

}