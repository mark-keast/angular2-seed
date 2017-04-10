import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { TrackListService } from './../services/courses-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'motor-bike-tracks',
  templateUrl: 'tracks.component.html'
})
export class TracksComponent implements OnInit {
  private list:any = [];
  constructor(
    private http:Http,
    private trackListService: TrackListService,
    private route : ActivatedRoute
  ) { }
    ngOnInit() {

      //  this.trackListService.getCourse(this.route.snapshot.params['track']).then(Response => {
      //   this.list = Response;
      //   // console.log('MotorBikes ' + this.list);
      // }).catch((e) => {
      //   console.log('Oops an error has just happended');
      // });
    }
}
