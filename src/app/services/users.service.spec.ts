import { fakeAsync, TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { USERS } from '../mock-data/USERS';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should return all the user data', fakeAsync(() => {
  //   const getUsersSpy$ = spyOn(service, 'getUsers').and.callThrough();

  //   expect(service.users).toEqual(USERS);
  //   expect(getUsersSpy$).toEqual(USERS);
  // }));
});
