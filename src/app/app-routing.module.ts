import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { ValutisCvlaComponent } from './valutis-cvla/valutis-cvla.component';
//
const routes: Routes = [
  // {path:"registered-users",component: RegisteredUsersComponent},
  {path:"register", component: UsersFormComponent},
  {path:"valuta", component: ValutisCvlaComponent},
  {path:"employer/user", component: EmployeeRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
