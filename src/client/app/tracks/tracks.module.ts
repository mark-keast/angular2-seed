import { RiderTimesComponent } from './components/rider-times/rider-times.component';
import { RiderComponent } from './track/rider/rider.component';
import { NgModule } from '@angular/core';
import { TracksComponent } from './tracks.component';
import { TrackComponent } from './track/track.component';
import { TracksRoutingModule } from './tracks-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [TracksRoutingModule, SharedModule],
  declarations: [
    RiderTimesComponent,
    TracksComponent,
    TrackComponent,
    RiderComponent],
  exports: [
    TracksComponent,
    TrackComponent,
    RiderComponent],
  providers: [NameListService]
})
export class TracksModule { }
