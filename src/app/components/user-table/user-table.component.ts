import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Input } from '@angular/core';
interface UserDataSource {
  id: string;
  name: string;
  totalTasks: number;
  remainingTasks: number;
  description: string;
  team: string;
  dateStarted: string;
  userResponse: User;
}

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    AsyncPipe,
    MatTableModule,
    MatSortModule,
    DatePipe,
    MatPaginatorModule,
  ],
  providers: [DatePipe],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges
{
  @Input() globalFilter: string;
  componentDestroyed$: Subject<boolean> = new Subject();

  displayedColumns = [
    'id',
    'name',
    'totalTasks',
    'remainingTasks',
    'description',
    'team',
    'dateStarted',
  ];
  usersToDisplay: Observable<User[]> = of([]);
  dataSource = new MatTableDataSource<UserDataSource>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usersService: UsersService, private datePipe: DatePipe) {}

  onSort(sort: Sort): void {
    console.log(sort);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.globalFilter) {
      this.dataSource.filter = this.globalFilter;
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (
      item: UserDataSource,
      property: string
    ) => {
      if (property === 'dateStarted') {
        // Replaces internal sorting with ISO time standard
        return item.userResponse.dateStarted;
      } else {
        return item[property as keyof UserDataSource] as string;
      }
    };

    this.dataSource.paginator = this.paginator;
  }

  getUsers() {
    this.usersService
      .getUsers()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((users) => {
        const usersDataSource: UserDataSource[] = users.map((user: User) => {
          const {
            id,
            name,
            totalTasks,
            remainingTasks,
            description,
            team,
            dateStarted,
          } = user;

          const convertedDate = this.datePipe.transform(dateStarted);

          return {
            id,
            name,
            totalTasks,
            remainingTasks,
            description,
            team,
            dateStarted: convertedDate ? convertedDate : '',
            userResponse: user,
          };
        });

        this.dataSource.data = usersDataSource;
      });
  }

  clickRow(row: UserDataSource): void {
    console.log(row);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
