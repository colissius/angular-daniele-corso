import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input() user: User | undefined;

  constructor() {}

  ngOnInit() {}

  saveUser() {
    alert(this.user.name);
  }
}
