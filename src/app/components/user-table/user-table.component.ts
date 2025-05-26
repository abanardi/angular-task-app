import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [AsyncPipe, MatTableModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent implements OnInit, OnDestroy {
  componentDestroyed$: Subject<boolean> = new Subject();

  displayedColumns = [
    'id',
    'name',
    'totalTasks',
    'remainingTasks',
    'description',
    'team',
  ];
  usersToDisplay: Observable<User[]> = of([]);
  dataSource = new MatTableDataSource<User>();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService
      .getUsers()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((users) => {
        this.dataSource.data = users;
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
