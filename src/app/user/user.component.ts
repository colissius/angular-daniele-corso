import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();

  constructor(private userService: UserService) {}

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.onSelectUser.emit(this.user);
  }

  ngOnInit() {}
}
