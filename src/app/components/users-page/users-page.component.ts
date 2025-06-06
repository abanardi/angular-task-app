import { Component } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../user-action-dialogs/add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    UserTableComponent,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {
  globalFilter: string;

  constructor(private dialog: MatDialog) {}

  onInputChange(event: any) {
    const value = event.target.value;
    this.globalFilter = value;
  }

  openDialog() {
    this.dialog.open(AddUserDialogComponent, {
      height: '75vh',
      maxWidth: '100vw',
    });
  }
}
