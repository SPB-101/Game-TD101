import {Vector} from "./Math";

export interface Actor {
    pos: Vector
    offset: Vector
    speed: number
    hp: number
}