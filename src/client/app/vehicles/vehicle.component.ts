import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'vehicle-list',
  templateUrl: 'vehicle.component.html'
})
export class VehicleComponent implements OnInit {
  private list:any = [];
  constructor(
    private http:Http
  ) { }
    ngOnInit() {
    this.http.get('http://promotocrossapi.com/laptimes/redbud')
    .toPromise().then(response => {
      this.list = response.json(); // not set as json() it gives you crap back
      console.log(this.list);
    }).catch(); //.then().catch();
      //console.log(this.list);
    }
}
