import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {VehiculesComponent} from "./vehicules/vehicules.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
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
