import background from './img/map_1.jpg';
import {FrameData} from "./FrameData";
import meh from './img/meh1.jpg';
import mehJson from './img/meh1.json';

export enum AnimationType {
    meh_go = "meh_go",
    meh_b = "meh_b"
}

export class Loader {

    static jsons = [mehJson];
    static imgs = [background, meh];
    static maps: Record<string, CanvasImageSource> = {};
    static frames: Record<string, FrameData[]> = {};

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