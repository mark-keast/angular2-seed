import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessageModule } from './../form-control-messages/control-messages.module';

@NgModule({
  imports: [
 ContactUsRoutingModule,
  SharedModule,
  ReactiveFormsModule,
  FormsModule,
  ControlMessageModule],
  declarations: [
    ContactUsComponent],
  exports: [
    ContactUsComponent],
  providers: [NameListService]
})
export class ContactUsModule { }
