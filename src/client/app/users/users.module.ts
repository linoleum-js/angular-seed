import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersListService } from '../shared/users-list/users-list.service';

@NgModule({
  imports: [UsersRoutingModule, SharedModule],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [UsersListService]
})
export class UsersModule { }
