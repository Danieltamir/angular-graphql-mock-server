import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Subscription} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  users: User[] = [{name: 'Daniel', lastName: 'Tamir', age: 25}];
  displayedColumns = ['name', 'lastName', 'age'];
  usersSubscription: Subscription;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.firstName.hasError('required') ? 'You must enter a value' : '';
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.usersSubscription = this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}

export interface User {
  name: string;
  lastName: string;
  age: number;
}
