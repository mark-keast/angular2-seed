import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ListDoctorsComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

import { AlertModule } from 'ng2-bootstrap/alert';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, AlertModule.forRoot()],
  declarations: [HomeComponent,ListDoctorsComponent],
  exports: [HomeComponent,ListDoctorsComponent],
  providers: [NameListService]
})
export class HomeModule { }
