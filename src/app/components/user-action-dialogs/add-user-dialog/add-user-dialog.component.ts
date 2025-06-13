import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-add-user-dialog',
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: './add-user-dialog.component.html',
    styleUrl: './add-user-dialog.component.scss'
})
export class AddUserDialogComponent {
  newName: string = '';
  newDescription: string = '';
  newTeam: string = '';
  newDateStarted: string = '';

  constructor(private dialogRef: MatDialogRef<AddUserDialogComponent>) {}

  onClose() {
    this.dialogRef.close();
  }

  addUser() {
    console.log('Added a user');
    this.dialogRef.close();
  }

  onNameInputChange(event: any) {
    const value = event.target.value;
    this.newName = value;
  }

  onDescriptionInputChange(event: any) {
    const value = event.target.value;
    this.newDescription = value;
  }

  onTeamInputChange(event: any) {
    const value = event.target.value;
    this.newTeam = value;
  }

  onDateStartedInputChange(event: any) {
    const value = event.target.value;
    this.newDateStarted = value;
  }

  userFieldsIncomplete() {
    const returnValue = !!(
      this.newName &&
      this.newDescription &&
      this.newTeam &&
      this.newDateStarted
    );
    console.log(returnValue);

    return !returnValue;
  }
}
