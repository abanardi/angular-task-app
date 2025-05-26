import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { UserTableComponent } from './user-table.component';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;
  let getUsersSpy$: jasmine.Spy;

  let usersService: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTableComponent, MatTableModule],
      providers: [UsersService],
    }).compileComponents();

    usersService = TestBed.inject(UsersService);

    getUsersSpy$ = spyOn(usersService, 'getUsers').and.returnValue(
      of([
        {
          id: '1',
          name: 'Andrew',
          totalTasks: 5,
          remainingTasks: 2,
          description: 'Some employee',
          team: 'Some team',
          dateStarted: '2023-11-15T14:22:10Z',
        },
        {
          id: '2',
          name: 'Rachel',
          totalTasks: 5,
          remainingTasks: 2,
          description: 'Some employee',
          team: 'Some team',
          dateStarted: '2024-07-08T09:45:33Z',
        },
        {
          id: '3',
          name: 'John',
          totalTasks: 5,
          remainingTasks: 2,
          description: 'Some employee',
          team: 'Some team',
          dateStarted: '2022-02-27T18:10:05Z',
        },
        {
          id: '4',
          name: 'Jake',
          totalTasks: 5,
          remainingTasks: 2,
          description: 'Some employee',
          team: 'Some team',
          dateStarted: '2026-03-19T03:55:47Z',
        },
        {
          id: '5',
          name: 'Charlotte',
          totalTasks: 5,
          remainingTasks: 2,
          description: 'Some employee',
          team: 'Some team',
          dateStarted: '2025-09-30T23:01:12Z',
        },
      ])
    );
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should render users', fakeAsync(() => {
    expect(component.dataSource.data.length).toEqual(5);
  }));

  // it('should set global filter', fakeAsync(() => {
  //   expect(component.dataSource.data).toEqual([]);
  // }));

  it('should filter by id', fakeAsync(() => {
    expect(component.dataSource.data).toEqual([]);
  }));

  it('should filter by name', fakeAsync(() => {
    expect(component.dataSource.data).toEqual([]);
  }));

  it('should filter by total tasks', fakeAsync(() => {
    expect(component.dataSource.data).toEqual([]);
  }));

  it('should filter by remaining tasks', fakeAsync(() => {
    expect(component.dataSource.data).toEqual([]);
  }));

  it('should filter by team', fakeAsync(() => {
    expect(component.dataSource.data).toEqual([]);
  }));

  it('', fakeAsync(() => {}));
});
