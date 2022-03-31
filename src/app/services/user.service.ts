import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = [
    {
      name: 'name',
      lastName: 'lastName',
      fiscalCode: 'fiscalCode',
      email: 'email',
      phone: 'phone',
      province: 'province',
      age: 'age',
    },
    {
      name: 'name1',
      lastName: 'lastName1',
      fiscalCode: 'fiscalCode1',
      email: 'email1',
      phone: 'phone1',
      province: 'province1',
      age: 'age1',
    },
    {
      name: 'name2',
      lastName: 'lastName2',
      fiscalCode: 'fiscalCode2',
      email: 'email2',
      phone: 'phone2',
      province: 'province2',
      age: 'age2',
    },
  ];

  getUsers() {
    return this.users;
  }

  deleteUser(user: any) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}
