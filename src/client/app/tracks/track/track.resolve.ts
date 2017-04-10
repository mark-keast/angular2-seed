import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TrackListService } from './../../services/courses-list.service';

@Injectable()
export class TrackResolve implements Resolve<any> {

  constructor(private trackListService: TrackListService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // let showData = this.trackListService.getCourse('redbud');
    // console.log('showData ' + showData);
    // return this.trackListService.getCourse('redbud');
    // return showData;
          return Observable.fromPromise(
          // this.trackListService.getCourse('redbud'));
          this.trackListService.getCourse(route.params['track']));
  }
}
