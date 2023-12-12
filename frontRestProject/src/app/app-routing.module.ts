import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {VehiculesComponent} from "./vehicules/vehicules.component";
import {UserDetailsComponent} from "./users/user-details/user-details.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },  {
    path: "users/:id",
    component: UserDetailsComponent
  },
  {
    path: "vehicules",
    component: VehiculesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
