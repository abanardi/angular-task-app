import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../interfaces/task.interface';
import { Observable, of } from 'rxjs';
import { UserTaskListService } from '../../services/user-task-list.service';
import { OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TaskCardComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  userTasks: Observable<Task[]> = of([]);
  userId: any = '';

  constructor(
    private userTaskListService: UserTaskListService,
    private activatedRoute: ActivatedRoute
  ) {}

  getUserTasks() {
    this.userTasks = this.userTaskListService.getTasks();
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.firstChild;
    this.getUserTasks();
  }
}
