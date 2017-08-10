import { OptionOneFormService } from './../services/optionOne.service';
import { OptionOneComponent } from './option1/option.component';
import { FormNavigator } from './../navigator/form.navigator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
  CommonModule,
  UsersRoutingModule,
  ReactiveFormsModule,
  FormsModule],
  declarations: [
      UsersComponent,
      OptionOneComponent
    ],
  exports: [
      UsersComponent,
      OptionOneComponent
    ],
  providers: [OptionOneFormService, FormNavigator]
})
export class UsersModule { }
