import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Subscription} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import {User} from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public users: User[];
  public displayedColumns = ['name', 'lastName', 'age'];
  public usersSubscription: Subscription;
  public firstName = new FormControl('', [Validators.required]);
  public lastName = new FormControl('', [Validators.required]);
  public age = new FormControl('', [Validators.required]);

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

  getErrorMessage() {
    return this.firstName.hasError('required') ? 'You must enter a value' : '';
  }
}
