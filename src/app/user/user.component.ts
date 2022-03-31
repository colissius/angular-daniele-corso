import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user-data') user: any;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor(private userService: UserService) {}

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  ngOnInit() {}
}
