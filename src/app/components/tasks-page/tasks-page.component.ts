import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [
    MatButtonModule,
    TaskListComponent,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss',
})
export class TasksPageComponent {
  constructor(private router: Router) {}

  globalFilter: string;

  returnToUsers(): void {
    this.router.navigate(['/users']);
  }
}
