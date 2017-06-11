import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user-service/user.service';

/**
 * This class represents the lazy loaded HomeComponent.
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

  /**
   * @param {UsersListService} usersListService
   */
  constructor(public userService: UserService) {}

  /**
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.userService.getList()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    return false;
  }

}
