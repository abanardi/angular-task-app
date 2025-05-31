import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [MatButtonModule, TaskListComponent],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss',
})
export class TasksPageComponent {
  constructor(private router: Router) {}

  returnToUsers(): void {
    this.router.navigate(['/users']);
  }
}
