import { RiderData } from './../../models/tracks/riderData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { TrackListService } from './../../services/courses-list.service';
import { Tracks } from './../../models/tracks/tracks';

@Component({
    moduleId:module.id,
    selector:'track-data',
    templateUrl:'track.component.html'
})
export class TrackComponent implements OnInit {
    private trackList: Array<string>;
    private list:Tracks;
    private track: string;
    private sub: any;
    private tracktitle: string;

    constructor( private route: ActivatedRoute, private trackListService: TrackListService) { }
    ngOnInit() {

        // having to subscribe to the params to get a new call to data as component wont
        // be called when Route doesnt change only param does
        this.sub = this.route.params.subscribe(params => {
            console.log(this.route.params);
            const trackName = params['track'];
            this.tracktitle = params['track'];
            console.log('trackName = ' + trackName);

              this.trackListService.getCourse(trackName).then(Response => {
                this.list = Response;
                console.log(this.sub + this.list);
              }).catch((e) => {
                console.log('Oops an error has just happended');
              });

        });

    //  this.track = this.route.snapshot.params['track'];
    //  console.log('click track ' + this.track);
    //   this.trackListService.getCourse(this.track).then(Response => {
    //     this.list = Response;
    //     console.log(this.track + this.list);
    //   }).catch((e) => {
    //     console.log('Oops an error has just happended');
    //   });

    //     // this.trackList = this.route.parent.snapshot.data['tracks'];
    //     this.trackList = this.route.snapshot.data['track'];
    // }
    }

}
