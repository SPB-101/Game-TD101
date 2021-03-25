import {Actor} from "./Actor";

export interface Creep extends Actor {
    slowfor: number
    nextpoint: number
    burning: boolean
    cash: number
}