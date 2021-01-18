import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UsersFormComponent } from './users-form/users-form.component';

const routes: Routes = [
  // {path:"registered-users",component: RegisteredUsersComponent},
  {path:"register", component: UsersFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
