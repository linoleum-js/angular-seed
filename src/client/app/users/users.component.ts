import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user-service/user.service';

/**
 * This class represents the lazy loaded UsersComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  errorMessage: string;
  pageLoading: boolean = false;

  /**
   * @param {UsersListService} usersListService
   */
  constructor(public userService: UserService) {}

  /**
   */
  ngOnInit() {
    this.loadUsers();
  }

  /**
   */
  loadUsers() {
    this.pageLoading = true;
    this.userService.getList()
      .subscribe(
        (users) => {
          this.users = users;
          this.pageLoading = false;
        },
        error => this.errorMessage = <any>error
      );
  }
}
