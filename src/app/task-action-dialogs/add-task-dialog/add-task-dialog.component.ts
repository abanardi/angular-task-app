import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss',
})
export class AddTaskDialogComponent {
  constructor(private dialogRef: MatDialogRef<AddTaskDialogComponent>) {}

  onClose() {
    this.dialogRef.close();
  }

  addTask() {
    console.log('Added a task');
    this.dialogRef.close();
  }
}
