import background from "../img/map_1.jpg";
import { FrameData } from "./FrameData";
import mehMap from "../img/meh1.jpg";
import mehJson from "../img/meh1.json";
import laser from "../img/laser.jpg";
import rocketgun from "../img/rocketgun.jpg";
import teslagun from "../img/teslagun.jpg";
import icegun from "../img/icegun.jpg";
import teslagunMap from "../img/turret_teslagun.jpg";
import teslagunJson from "../img/turret_teslagun.json";
import electroMap from "../img/electro.jpg";
import electroJson from "../img/electro.json";
import teslaShotMap from "../img/tesla_shot.jpg";
import teslaShotJson from "../img/tesla_shot.json";
import lightingMap from "../img/lighting.jpg";
import lightingJson from "../img/lighting.json";
import splashMap from "../img/splash.jpg";
import splashJson from "../img/splash.json";
import fireMap from "../img/fire2.jpg";
import fireJson from "../img/fire2.json";
import explosionMap from "../img/explosion1.jpg";
import explosionJson from "../img/explosion1.json";
import icegunMap from "../img/turret_icegun.jpg";
import icegunJson from "../img/turret_icegun.json";
import lasergunMap from "../img/turret_lasergun.jpg";
import lasergunJson from "../img/turret_lasergun.json";
import rocketgunBLMap from "../img/turret_rocketgun11.jpg";
import rocketgunBLJson from "../img/turret_rocketgun11.json";
import rocketgunBRMap from "../img/turret_rocketgun12.jpg";
import rocketgunBRJson from "../img/turret_rocketgun12.json";
import rocketgunTRMap from "../img/turret_rocketgun13.jpg";
import rocketgunTRJson from "../img/turret_rocketgun13.json";
import rocketgunTLMap from "../img/turret_rocketgun14.jpg";
import rocketgunTLJson from "../img/turret_rocketgun14.json";
import airshipMap from "../img/airship.jpg";
import airshipJson from "../img/airship.json";
import tankMap from "../img/tank_left.jpg";
import tankJson from "../img/tank_left.json";
import tankMMap from "../img/tank_m.jpg";
import tankMJson from "../img/tank_m.json";
import rembotMap from "../img/rembot.jpg";
import rembotJson from "../img/rembot.json";

export class AnimationType {
  static MEH_GO = "meh_go";
  static AIRSHIP_GO = "airship_go";
  static TANK_GO = "tank1_left";
  static TANK_M_GO = "tank2_m_go";
  static REMBOT_GO = "rembot1_run";

  static ICEGUN_AROUND = "turret6_1";
  static ICEGUN_STATIC = "turret6_10001";

  static TESLAGUN_AROUND = "turret3_1";
  static TESLAGUN_STATIC = "turret3_10001";

  static SPLASH = "splash1";
  static FIRE = "fire2";
  static EXPLOSION = "explosion1";

  static LASERGUN_BL = "turret5_1_1";
  static LASERGUN_BR = "turret5_1_2";
  static LASERGUN_TR = "turret5_1_3";
  static LASERGUN_TL = "turret5_1_4";
  static LASERGUN_BL_STATIC = "turret5_1_10001";
  static LASERGUN_BR_STATIC = "turret5_1_20001";
  static LASERGUN_TR_STATIC = "turret5_1_30001";
  static LASERGUN_TL_STATIC = "turret5_1_40001";

  static ROCKETGUN_BL = "turret2_1_1stage";
  static ROCKETGUN_BR = "turret2_1_2stage";
  static ROCKETGUN_TR = "turret2_1_3stage";
  static ROCKETGUN_TL = "turret2_1_4stage";
  static ROCKETGUN_BL_STATIC = "turret2_1_1stage0001";
  static ROCKETGUN_BR_STATIC = "turret2_1_2stage0001";
  static ROCKETGUN_TR_STATIC = "turret2_1_3stage0001";
  static ROCKETGUN_TL_STATIC = "turret2_1_4stage0001";
}

export class Loader {
  static jsons = [
    mehJson,
    teslagunJson,
    electroJson,
    teslaShotJson,
    lightingJson,
    splashJson,
    explosionJson,
    fireJson,
    lasergunJson,
    icegunJson,
    rocketgunBLJson,
    rocketgunBRJson,
    rocketgunTRJson,
    rocketgunTLJson,
    airshipJson,
    tankJson,
    tankMJson,
    rembotJson,
  ];
  static imgs = [
    background,
    mehMap,
    laser,
    rocketgun,
    teslagun,
    icegun,
    teslagunMap,
    electroMap,
    teslaShotMap,
    lightingMap,
    splashMap,
    explosionMap,
    fireMap,
    icegunMap,
    lasergunMap,
    rocketgunBLMap,
    rocketgunBRMap,
    rocketgunTRMap,
    rocketgunTLMap,
    airshipMap,
    tankMap,
    tankMMap,
    rembotMap,
  ];
  static maps: Record<string, CanvasImageSource> = {};
  static frames: Record<string, FrameData[]> = {};

  static getImageMap(name: string): CanvasImageSource {
    let image: CanvasImageSource;
    for (const key in Loader.maps) {
      if (key.indexOf(name) !== -1) {
        image = Loader.maps[key];
        break;
      }
    }
    return image!;
  }

  static load(cb: () => void) {
    // O(n3) :(
    for (const json of this.jsons) {
      for (const animType in AnimationType) {
        const res: FrameData[] = [];
        const frames = json["frames"] as Record<string, unknown>;
        for (const frameName in frames) {
          if (
            frameName.indexOf(
              AnimationType[animType as keyof AnimationType]
            ) === -1
          )
            continue;
          res.push(frames[frameName] as FrameData);
        }
        if (res.length) {
          this.frames[AnimationType[animType as keyof AnimationType]] = res;
        }
      }
    }
    let count = 0;
    const length = this.imgs.length;
    for (const imgUrl of this.imgs) {
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
