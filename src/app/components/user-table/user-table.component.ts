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
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../user-action-dialogs/add-user-dialog/add-user-dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

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

interface queryParams {
  filter: string;
  description: string;
  team: string;
}

@Component({
    selector: 'app-user-table',
    imports: [
        AsyncPipe,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        AddUserDialogComponent,
        MatSidenavModule,
        MatButtonModule,
    ],
    providers: [DatePipe],
    templateUrl: './user-table.component.html',
    styleUrl: './user-table.component.scss'
})
export class UserTableComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges
{
  @Input() globalFilter: string;
  drawerOpened: boolean = false;
  selectedUser: User;
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

  constructor(
    private usersService: UsersService,
    private datePipe: DatePipe,
    private router: Router,
    private dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(AddUserDialogComponent);
  }

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

    this.dataSource.filterPredicate = (
      data: UserDataSource,
      filter: string
    ) => {
      const dummyString = 'filter=andrew&description=developer';
      const extractedParams = dummyString.split('&');

      // Setting up filters
      const filterString = filter.toString().toLowerCase();

      // Checking other filters

      // Checking global filter
      for (const dataEntry of Object.keys(data)) {
        const dataToCheck = data[dataEntry as keyof UserDataSource]
          .toString()
          .toLowerCase();

        if (dataToCheck.includes(filterString)) {
          return true;
        }
      }
      return false;
    };
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
    if (row.userResponse === this.selectedUser) {
      this.drawerOpened = !this.drawerOpened;
    } else {
      this.selectedUser = row.userResponse;
      this.drawerOpened = true;
    }
  }

  onClose(): void {
    this.drawerOpened = false;
  }

  viewTasks(): void {
    const childRoute = 'tasks/' + this.selectedUser.id;
    this.router.navigate([childRoute]);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
