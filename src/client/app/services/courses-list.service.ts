import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TrackListService {

    constructor(
        private http: Http
    ) { }

    getCourse(track:string) {
        return this.http.get(`http://promotocrossapi.com/laptimes/${track}`)
        .toPromise().then(response => {
        // response.json(); // not set as json() it gives you crap back
        console.log('service ' + response.json());
        return response.json();
        // console.log(response.json());
        }).catch((e):any => { //.then().catch();
        console.log('Ooops issue not working');
        });
    }

}