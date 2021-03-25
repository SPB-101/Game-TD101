import {Creep} from "./Creep";

export interface Upgrade {
    damage: number
    rate: number
    range: number
}

export abstract class Turret {
    abstract get cost(): number

    abstract get damage(): number

    abstract get rate(): number

    abstract get range(): number

    abstract get upgrades(): Upgrade[]

    abstract shoot(creeps: Creep[]): void
}
