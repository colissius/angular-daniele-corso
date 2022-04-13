import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'name',
      lastName: 'lastName',
      fiscalCode: 'fiscalCode',
      email: 'email',
      phone: 'phone',
      province: 'province',
      age: 30,
    },
    {
      id: 2,
      name: 'name1',
      lastName: 'lastName1',
      fiscalCode: 'fiscalCode1',
      email: 'email1',
      phone: 'phone1',
      province: 'province1',
      age: 60,
    },
    {
      id: 3,
      name: 'name2',
      lastName: 'lastName2',
      fiscalCode: 'fiscalCode2',
      email: 'email2',
      phone: 'phone2',
      province: 'province2',
      age: 90,
    },
  ];

  getUsers() {
    return this.users;
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}
