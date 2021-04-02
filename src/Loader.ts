import background from './img/map_1.jpg';
import {FrameData} from "./model/FrameData";
import mehMap from './img/meh1.jpg';
import mehJson from './img/meh1.json';
import laser from './img/laser.jpg'
import rocketgun from './img/rocketgun.jpg'
import teslagun from './img/teslagun.jpg'
import icegun from './img/icegun.jpg'
import teslagunMap from './img/turret_teslagun.jpg'
import teslagunJson from './img/turret_teslagun.json'
import electroMap from './img/electro.jpg'
import electroJson from './img/electro.json'
import teslaShotMap from './img/tesla_shot.jpg'
import teslaShotJson from './img/tesla_shot.json'
import lightingMap from './img/lighting.jpg'
import lightingJson from './img/lighting.json'
import splashMap from './img/splash.jpg'
import splashJson from './img/splash.json'
import fireMap from './img/fire2.jpg'
import fireJson from './img/fire2.json'
import lasergunMap from './img/turret_lasergun.jpg'
import lasergunJson from './img/turret_lasergun.json'
import lasergunMap2 from './img/turret_lasergun2.jpg'
import lasergunJson2 from './img/turret_lasergun2.json'
import rocketgunMap from './img/turret_rocketgun11.jpg'
import rocketgunJson from './img/turret_rocketgun11.json'

export enum AnimationType {
    meh_go = "meh_go",
    meh_b = "meh_b",
    turret_6 = "turret_6", // icegun
    turret2_1_1 = "turret2_1_1", // rocketgun
    turret3_1 = "turret3_1", // teslagun
    turret3_10001 = "turret3_10001", // teslagun static
    electro_man = "electro_man",
    tesla_shot_1 = "tesla_shot_1",
    red_lighting0 = 'red_lighting0',
    white_lighting0 = 'white_lighting0',
    splash1 = 'splash1',
    fire2 = 'fire2',
    turret5_1_1 = 'turret5_1_1', // lasergun bl
    turret5_1_2 = 'turret5_1_2', // lasergun br
    turret5_1_3 = 'turret5_1_3', // lasergun tr
    turret5_1_4 = 'turret5_1_4', // lasergun tl
    turret5_1_10001 = 'turret5_1_10001', // lasergun static
    turret5_1_20001 = 'turret5_2_10001', // lasergun static
    turret5_1_30001 = 'turret5_3_10001', // lasergun static
    turret5_1_40001 = 'turret5_4_10001', // lasergun static
    turret5_2 = 'turret5_2', // lasergun 2
    turret5_2_10001 = 'turret5_2_10001', // lasergun static 2
    turret2_1_1stage = 'turret2_1_1stage', // rocket gun
    turret2_1_1stage0001 = 'turret2_1_1stage0001' // rocket gun static
}

export class Loader {

    static jsons = [mehJson, teslagunJson, electroJson, teslaShotJson, lightingJson, splashJson, fireJson, lasergunJson, lasergunJson2, rocketgunJson];
    static imgs = [background, mehMap, laser, rocketgun, teslagun, icegun, teslagunMap, electroMap, teslaShotMap, lightingMap, splashMap, fireMap, lasergunMap, lasergunMap2, rocketgunMap];
    static maps: Record<string, CanvasImageSource> = {};
    static frames: Record<string, FrameData[]> = {};

    static getImageMap(name: string): CanvasImageSource {
        let image: CanvasImageSource
        for(let key in Loader.maps) {
            if(key.indexOf(name) !== -1) {
                image = Loader.maps[key];
                break;
            }
        }
        return image!;
    }

    static load(cb: () => void) {
        // O(n3) :(
        for(let json of this.jsons) {
            for(let animType in AnimationType) {
                const res: FrameData[] = [];
                const frames = json['frames'];
                for (let frameName in frames) {
                    if (frameName.indexOf(animType) === -1) continue;
                    res.push(frames[frameName] as FrameData);
                }
                if(res.length) {
                    this.frames[animType] = res;
                }
            }
        }
        let count = 0;
        const length = this.imgs.length;
        for (let imgUrl of this.imgs) {
            const img = new Image();
            img.src = imgUrl;
            img.onload = () => {
                this.maps[imgUrl] = img;
                count++;
                if (count === length) {
                    cb();
                }
            };
        }

    }

}