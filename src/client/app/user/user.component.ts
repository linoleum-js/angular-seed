import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../shared/user-service/user.service';

/**
 * This class represents the lazy loaded UserComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
})
export class UserComponent implements OnInit {
  user: any = { company: {}, address: {} };
  errorMessage: string;
  pageLoading: boolean = false;
  dataSaved: boolean = false;
  creating: boolean = false;
  private sub: any;
  private id: number;


  /**
   * @param {UserListService} userListService
   */
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const route = params['id'];
      if (route === 'new') {
        this.creating = true;
      } else {
        this.id = Number.parseInt(params['id']);
        this.loadUserData();
      }
    });
  }

  OnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   */
  loadUserData() {
    this.pageLoading = true;
    this.userService.get(this.id)
      .subscribe(
        (user) => { this.user = user, this.pageLoading = false; },
        (error) => { this.errorMessage = <any>error, this.pageLoading = false; }
      );
  }

  updateUser(field: string) {
    if (this.creating) { return; }

    this.userService.update(this.id, { [field]: this.user[field] })
      .subscribe(
        (user) => {
          this.user = user;
          this.dataSaved = true;
          setTimeout(() => {
            this.dataSaved = false;
          }, 3000);
        },
        error => this.errorMessage = <any>error
      );
  }

  createUser() {
    this.userService.create(this.user)
      .subscribe(
        (user) => {
          this.user = user;
          this.router.navigate([`/users/${user.id}`]);
        },
        error => this.errorMessage = <any>error
      );
  }
}
