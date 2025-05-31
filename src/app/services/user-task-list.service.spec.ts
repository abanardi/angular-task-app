import { TestBed } from '@angular/core/testing';

import { UserTaskListService } from './user-task-list.service';

describe('UserTaskListService', () => {
  let service: UserTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
