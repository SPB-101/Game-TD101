import {Turret, Upgrade} from "./Turret";

export class Laser extends Turret {
    get cost(): number {
        return 15;
    }

    get damage(): number {
        return 10;
    }

    get range(): number {
        return 80;
    }

    get rate(): number {
        return 40;
    }

    shoot(creeps: []): void {

    }

    get upgrades(): Upgrade[] {
        return [{damage: 15, rate: 38, range: 85},
            {damage: 25, rate: 36, range: 90},
            {damage: 50, rate: 34, range: 95},
            {damage: 75, rate: 32, range: 100},
            {damage: 100, rate: 30, range: 105},
            {damage: 150, rate: 28, range: 110},
            {damage: 200, rate: 26, range: 120},
            {damage: 400, rate: 25, range: 130},
            {damage: 600, rate: 24, range: 140},
            {damage: 1000, rate: 22, range: 160}];
    }

}