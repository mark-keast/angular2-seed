import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResidencyFormComponent } from './residency.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'residency', component: ResidencyFormComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ResidencyFormRoutingModule { }
