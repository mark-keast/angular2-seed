import { NgModule } from '@angular/core';
import { VehicleComponent } from './vehicle.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [VehicleRoutingModule, SharedModule],
  declarations: [VehicleComponent],
  exports: [VehicleComponent],
  providers: [NameListService]
})
export class VehicleModule { }
