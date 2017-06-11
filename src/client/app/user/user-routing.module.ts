import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users/:id/new', component: UserComponent }
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
