import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormSubmitedComponent } from './form-submited.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'form-submited', component: FormSubmitedComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FormSubmitedRoutingModule { }
