import { ProgressBarCircleComponent } from './progressBarCircle/progress-bar-circle.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NameListService } from './name-list/name-list.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, DropdownModule.forRoot()],
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    ProgressBarCircleComponent
    ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    ProgressBarCircleComponent,
    CommonModule,
    FormsModule,
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
