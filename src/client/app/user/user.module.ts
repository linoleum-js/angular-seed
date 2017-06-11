import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../shared/user-service/user.service';

@NgModule({
  imports: [UserRoutingModule, SharedModule, FormsModule],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
