import { Tracks } from './../../../models/tracks/tracks';
import { ActivatedRoute } from '@angular/router';
import { RiderData } from './../../../models/tracks/riderData';

import { Component, OnInit } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'rider-data',
    templateUrl:'rider.component.html'
})

export class RiderComponent implements OnInit {
    private riderData : Array<RiderData>;
    private trackData : Array<Tracks>;
    private classCategory : Number;
    private motoCategory : Number;
    private paramClass : any;
    private paramMoto : any;
    private sub : any;
    private filteredTrack : Array<Tracks> = [];
    private showLapTimesList :boolean = false;

    constructor(private router :ActivatedRoute) {}

    public showLapTimes() {
        console.log('method clicked');
        this.showLapTimesList = !this.showLapTimesList;
    }
    ngOnInit() {
        this.trackData = this.router.parent.snapshot.data['track'];

        this.sub = this.router.params.subscribe(params => {
            // console.log(this.router.params);
            const trackRaceId = params['id'];
            // console.log('trackRaceId = ' + trackRaceId);

            this.filteredTrack = this.trackData.filter((i)=> {
                return i._id === trackRaceId;
            });
            // console.log(this.trackData);
            // console.log(this.filteredTrack);
        });
    }
}
