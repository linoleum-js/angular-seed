import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../shared/user-service/user.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
})
export class UserComponent implements OnInit {
  user: any = {};
  errorMessage: string;
  private sub: any;

  /**
   * @param {UserListService} userListService
   */
  constructor(public userService: UserService, private route: ActivatedRoute) {}

  /**
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.loadUserData(Number.parseInt(params['id']));
    });
  }

  OnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   */
  loadUserData(id: number) {
    this.userService.get(id)
      .subscribe(
        user => this.user = user,
        error => this.errorMessage = <any>error
      );
  }
}
