import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { ValutisCvlaComponent } from './valutis-cvla/valutis-cvla.component';
// 
const routes: Routes = [
  // {path:"registered-users",component: RegisteredUsersComponent},
  {path:"register", component: UsersFormComponent},
  {path:"valuta", component: ValutisCvlaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
