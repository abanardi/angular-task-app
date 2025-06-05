import { Injectable } from '@angular/core';
import { TASKS } from '../mock-data/TASKS';
import { Observable, of } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class UserTaskListService {
  tasks: Observable<Task[]> = of(TASKS);

  constructor() {}

  getTasks(): Observable<Task[]> {
    return this.tasks;
  }
}
