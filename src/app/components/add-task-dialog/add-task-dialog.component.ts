import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
    selector: 'app-add-task-dialog',
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatTimepickerModule,
    ],
    providers: [provideNativeDateAdapter()],
    templateUrl: './add-task-dialog.component.html',
    styleUrl: './add-task-dialog.component.scss'
})
export class AddTaskDialogComponent {
  newTitle: string = '';
  newDescription: string = '';
  newTimeStart: string = '';
  newTimeEnd: string = '';

  constructor(private dialogRef: MatDialogRef<AddTaskDialogComponent>) {}

  onClose() {
    this.dialogRef.close();
  }

  addTask() {
    console.log('Added a task');
    this.dialogRef.close();
  }
}
