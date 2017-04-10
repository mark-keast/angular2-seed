import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TracksComponent } from './tracks.component';
import { TrackComponent } from './track/track.component';
import { RiderComponent } from './track/rider/rider.component';
import { TrackResolve } from './track/track.resolve';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'tracks', component: TracksComponent,
          // resolve :{
          //   tracks: TrackResolve
          // },
      children: [{
        path:'track/:track',
        component:TrackComponent,
          resolve :{
            track: TrackResolve
          },
          children:[{
            path:'rider/:id',
            component:RiderComponent
          }]
      }],
    }
    ])
  ],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
