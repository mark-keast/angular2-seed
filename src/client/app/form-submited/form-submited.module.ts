import { FormService } from './../services/form.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSubmitedComponent } from './form-submited.component';
import { FormSubmitedRoutingModule } from './form-submited-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
  CommonModule,
  FormSubmitedRoutingModule,
  ReactiveFormsModule,
  FormsModule],
  declarations: [
    FormSubmitedComponent],
  exports: [
    FormSubmitedComponent],
  providers: [FormService]
})
export class FormSubmitedModule { }
