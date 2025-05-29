import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss',
})
export class TasksPageComponent {
  constructor(private router: Router) {}

  returnToUsers(): void {
    this.router.navigate(['/users']);
  }
}
