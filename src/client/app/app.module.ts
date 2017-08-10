import { MessageService } from './services/message.service';
import { UsersResolve } from './users/users.resolve';
import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ValidationService } from './form-validation-service/validation.service';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { TracksModule } from './tracks/tracks.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { FormSubmitedModule } from './form-submited/form-submited.module';
import { ResidencyFormModule } from './residency/residency.module';
import { SharedModule } from './shared/shared.module';

import { TrackListService } from './services/courses-list.service';
import { TrackResolve } from './tracks/track/track.resolve';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AboutModule,
    HomeModule,
    TracksModule,
    ContactUsModule,
    FormSubmitedModule,
    ResidencyFormModule,
    UsersModule,
    SharedModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [
    AppComponent
    ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
  TrackListService,
  TrackResolve,
  UsersResolve,
  MessageService
  // ValidationService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
