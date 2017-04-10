import { RiderData } from './riderData';
export class Tracks {
    _id:string;
    moto:number;
    series:string;
    track:string;
    location:string;
    round:6;
    date:Date;
    class:number;
    race:string;
    racedata6:string;
    riderData:Array<RiderData>;
}
