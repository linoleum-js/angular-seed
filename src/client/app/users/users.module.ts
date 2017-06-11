import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../shared/user-service/user.service';

@NgModule({
  imports: [UsersRoutingModule, SharedModule],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [UserService]
})
export class UsersModule { }
