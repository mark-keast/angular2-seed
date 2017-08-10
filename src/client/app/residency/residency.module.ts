import { FormNavigator } from './../navigator/form.navigator';
import { FormService } from './../services/form.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidencyFormComponent, CartBadgeCmpComponent } from './residency.component';
import { ResidencyFormRoutingModule } from './residency-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
  CommonModule,
  ResidencyFormRoutingModule,
  ReactiveFormsModule,
  FormsModule],
  declarations: [
    ResidencyFormComponent,
    CartBadgeCmpComponent],
  exports: [
    ResidencyFormComponent,
    CartBadgeCmpComponent],
  providers: [FormService, FormNavigator]
})
export class ResidencyFormModule { }
