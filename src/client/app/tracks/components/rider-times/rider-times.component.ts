import { RiderData } from './../../../models/tracks/riderData';
import { Component, Input, OnInit } from '@angular/core';
@Component({
    moduleId : module.id,
    selector : 'rider-times',
    templateUrl : 'rider-times.component.html'
})

export class RiderTimesComponent implements OnInit {
    @Input('riderTimesData') riderTimesData : RiderData;
    private lapTimes : boolean = false;


    constructor() {
        // console.log(this.riderData);
    }

    public showLapTimes() {
        this.lapTimes = !this.lapTimes;
    }

    ngOnInit() {
        console.log(this.riderTimesData);
    }
}
