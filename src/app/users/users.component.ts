import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  title = 'Users';
  users: any[] = [];

  constructor(private service: UserService) {}

  ngOnInit() {
    this.users = this.service.getUsers();
  }

  onDeleteUser(user: any) {
    this.service.deleteUser(user);
  }
}
