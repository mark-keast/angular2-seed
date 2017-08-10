import { UsersResolve } from './users.resolve';
import { OptionOneComponent } from './option1/option.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users',
        component: UsersComponent,
        resolve : {
            users: UsersResolve
        },
        children: [{
            path:'user/:id',
            component : OptionOneComponent
            }
        ] }
    ])
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
