import { FormNavigator } from './../navigator/form.navigator';
import { FormService } from './../services/form.service';
import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessageModule } from './../form-control-messages/control-messages.module';

@NgModule({
  imports: [
  CommonModule,
  ContactUsRoutingModule,
  ReactiveFormsModule,
  FormsModule,
  ControlMessageModule],
  declarations: [
    ContactUsComponent],
  exports: [
    ContactUsComponent],
  providers: [FormService, FormNavigator]
})
export class ContactUsModule { }
