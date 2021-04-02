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
import rocketgunMap from './img/turret_rocketgun11.jpg'
import rocketgunJson from './img/turret_rocketgun11.json'

export class AnimationType {
    static MEH_GO = "meh_go";
    static ICEGUN_AROUND = "turret_6";
    static ROCKETGUN_AROUND = "turret2_1_1";
    static TESLAGUN_AROUND = "turret3_1";
    static TESLAGUN_STATIC = "turret3_10001";
    static SPLASH = 'splash1';
    static FIRE = 'fire2';

    static LASERGUN_BL = 'turret5_1_1';
    static LASERGUN_BR = 'turret5_1_2';
    static LASERGUN_TR = 'turret5_1_3';
    static LASERGUN_TL = 'turret5_1_4';
    static LASERGUN_BL_STATIC = 'turret5_1_10001';
    static LASERGUN_BR_STATIC = 'turret5_1_20001';
    static LASERGUN_TR_STATIC = 'turret5_1_30001';
    static LASERGUN_TL_STATIC = 'turret5_1_40001';

    static ROCKETGUN_BL = 'turret2_1_1stage';
    static ROCKETGUN_BL_STATIC = 'turret2_1_1stage0001';
}

export class Loader {

    static jsons = [mehJson, teslagunJson, electroJson, teslaShotJson, lightingJson, splashJson, fireJson, lasergunJson, rocketgunJson];
    static imgs = [background, mehMap, laser, rocketgun, teslagun, icegun, teslagunMap, electroMap, teslaShotMap, lightingMap, splashMap, fireMap, lasergunMap, rocketgunMap];
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
                    if (frameName.indexOf(AnimationType[animType]) === -1) continue;
                    res.push(frames[frameName] as FrameData);
                }
                if(res.length) {
                    this.frames[AnimationType[animType]] = res;
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