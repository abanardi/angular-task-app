import { Component } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [UserTableComponent, MatInputModule, MatFormFieldModule, MatCardModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {
  globalFilter: string;

  onInputChange(event: any) {
    const value = event.target.value;
    this.globalFilter = value;
  }
}
