import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
    selector: 'app-tasks-page',
    imports: [
        MatButtonModule,
        TaskListComponent,
        MatFormFieldModule,
        MatInputModule,
    ],
    templateUrl: './tasks-page.component.html',
    styleUrl: './tasks-page.component.scss'
})
export class TasksPageComponent {
  constructor(private router: Router, private dialog: MatDialog) {}

  globalFilter: string;

  returnToUsers(): void {
    this.router.navigate(['/users']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      height: '80vh',
      maxWidth: '100vw',
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log('Closed adding dialog');
      console.log(res);
    });
  }
}
