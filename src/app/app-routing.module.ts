import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './day-6/day-6/auth.guard';
import { LoginPageComponent } from './day-6/login-page/login-page.component';
import { MainPageComponent } from './day-6/main-page/main-page.component';
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
  {path:"login", component: LoginPageComponent},
  {path:"mtavari", component: MainPageComponent, canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
