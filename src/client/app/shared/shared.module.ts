// import { AccordianGroupComponent } from './accordian/accordian-group.component';
// import { AccordianComponent } from './accordian/accordian.component';
import { ProgressBarCircleComponent } from './progressBarCircle/progress-bar-circle.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccordianModule } from 'angular-2-accordian/mk-accordian/accordian.module';
// import { AccordianModule } from 'angular-2-accordian/mk-accordian/';1

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NameListService } from './name-list/name-list.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule,
  AccordianModule,
  DropdownModule.forRoot()],
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    ProgressBarCircleComponent,
    // AccordianComponent,
    // AccordianGroupComponent
    ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    ProgressBarCircleComponent,
    // AccordianComponent,
    // AccordianGroupComponent,
    CommonModule,
    FormsModule,
    AccordianModule,
    RouterModule
    ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
