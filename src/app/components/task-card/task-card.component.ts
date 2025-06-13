import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Input } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
    selector: 'app-task-card',
    imports: [MatCard],
    templateUrl: './task-card.component.html',
    styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task;
}
