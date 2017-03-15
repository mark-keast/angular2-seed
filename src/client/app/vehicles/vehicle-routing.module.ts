import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'vehicles', component: VehicleComponent }
    ])
  ],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
