import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { USERS } from '../mock-data/USERS';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Observable<User[]> = of(USERS);

  constructor() {}

  getUsers(): Observable<User[]> {
    return this.users;
  }
}
