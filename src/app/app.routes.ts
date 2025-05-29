import { Routes } from '@angular/router';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'tasks', component: TasksPageComponent },
];
